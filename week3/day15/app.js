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

// 練習問題 1: `express.json()`ミドルウェアを追加
app.use(express.json());

// 全プロジェクトを取得するAPI (Day 14から継続)
app.get('/api/projects', async (req, res) => {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM projects');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'サーバーエラーが発生しました' });
    } finally {
        if (connection) connection.end();
    }
});

// 特定のIDのプロジェクトを取得するAPI (Day 14から継続)
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

// 練習問題 2: `/api/projects` (POST) エンドポイント
app.post('/api/projects', async (req, res) => {
    const { title, description, imageUrl, githubUrl, demoUrl } = req.body;
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO projects (title, description, imageUrl, githubUrl, demoUrl) VALUES (?, ?, ?, ?, ?)',
            [title, description, imageUrl, githubUrl, demoUrl]
        );
        res.status(201).json({ id: result.insertId, message: 'プロジェクトが追加されました' });
    } catch (error) {
        console.error('Error adding project:', error);
        res.status(500).json({ message: 'サーバーエラーが発生しました' });
    } finally {
        if (connection) connection.end();
    }
});

// 練習問題 3: `/api/projects/:id` (PUT) エンドポイント
app.put('/api/projects/:id', async (req, res) => {
    const projectId = req.params.id;
    const { title, description, imageUrl, githubUrl, demoUrl } = req.body;
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'UPDATE projects SET title = ?, description = ?, imageUrl = ?, githubUrl = ?, demoUrl = ? WHERE id = ?',
            [title, description, imageUrl, githubUrl, demoUrl, projectId]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'プロジェクトが見つかりません' });
        }
        res.json({ message: 'プロジェクトが更新されました' });
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'サーバーエラーが発生しました' });
    } finally {
        if (connection) connection.end();
    }
});

// 練習問題 4: `/api/projects/:id` (DELETE) エンドポイント
app.delete('/api/projects/:id', async (req, res) => {
    const projectId = req.params.id;
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute('DELETE FROM projects WHERE id = ?', [projectId]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'プロジェクトが見つかりません' });
        }
        res.json({ message: 'プロジェクトが削除されました' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ message: 'サーバーエラーが発生しました' });
    } finally {
        if (connection) connection.end();
    }
});

// お問い合わせフォームのデータを受け取るAPI (Day 20 練習問題 4)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received contact form submission:', { name, email, message });
    // 実際にはここでデータベースに保存したり、メールを送信したりする
    res.status(200).json({ message: 'お問い合わせを受け付けました' });
});

// サーバーを起動
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
