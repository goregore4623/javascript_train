const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

// TODO: ご自身のMySQL接続情報に置き換えてください
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'your_mysql_password', // あなたのMySQLパスワード
    database: 'my_portfolio_db' // あなたが作成したデータベース名
};

// 全プロジェクトを取得するAPI
app.get('/api/projects', async (req, res) => {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [rows] = await await connection.execute('SELECT * FROM projects');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'サーバーエラーが発生しました' });
    } finally {
        if (connection) connection.end();
    }
});

// 特定のIDのプロジェクトを取得するAPI
app.get('/api/projects/:id', async (req, res) => {
    const projectId = req.params.id;
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM projects WHERE id = ?', [projectId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'プロジェクトが見つかりません' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        res.status(500).json({ message: 'サーバーエラーが発生しました' });
    } finally {
        if (connection) connection.end();
    }
});

// サーバーを起動
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
