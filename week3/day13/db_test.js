const mysql = require('mysql2/promise');

// TODO: ご自身のMySQL接続情報に置き換えてください
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'your_mysql_password', // あなたのMySQLパスワード
    database: 'my_nodejs_db' // あなたが作成したデータベース名
};

async function connectToDb() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('MySQLデータベースに接続しました！');
        return connection;
    } catch (error) {
        console.error('MySQL接続エラー:', error);
        throw error;
    }
}

// 練習問題 4: すべてのユーザーデータを取得する関数
async function getAllUsers() {
    let connection;
    try {
        connection = await connectToDb();
        const [rows] = await connection.execute('SELECT * FROM users');
        console.log('\n--- すべてのユーザーデータ ---');
        console.log(rows);
        return rows;
    } catch (error) {
        console.error('getAllUsers クエリ実行エラー:', error);
        throw error;
    } finally {
        if (connection) connection.end(); // 接続を閉じる
    }
}

// 練習問題 5: 特定のIDを持つユーザーデータを取得する関数
async function getUserById(id) {
    let connection;
    try {
        connection = await connectToDb();
        const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
        console.log(`\n--- ID ${id} のユーザーデータ ---`);
        console.log(rows);
        return rows[0]; // 最初の行を返す
    } catch (error) {
        console.error(`getUserById (ID: ${id}) クエリ実行エラー:`, error);
        throw error;
    } finally {
        if (connection) connection.end(); // 接続を閉じる
    }
}

// 関数の実行
(async () => {
    try {
        await getAllUsers();
        await getUserById(1); // 例としてID 1のユーザーを取得
        // 必要に応じて、他のIDも試してみてください
        // await getUserById(2);
    } catch (error) {
        console.error("メイン処理でエラーが発生しました:", error);
    }
})();
