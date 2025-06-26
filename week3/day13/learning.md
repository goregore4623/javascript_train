## Day 13: Node.jsからMySQLへの接続

### 学習内容

1.  **MySQLデータベースの準備**
    *   この学習では、すでにMySQLの基本的な知識と操作ができることを前提としています。
    *   Node.jsから接続するためのMySQLサーバーが稼働していることを確認してください。
    *   接続用のデータベースと、テスト用のテーブル（例: `users`テーブル）を作成しておくと良いでしょう。
        ```sql
        CREATE DATABASE IF NOT EXISTS my_nodejs_db;
        USE my_nodejs_db;
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        );
        INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
        INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com');
        ```

2.  **Node.js用MySQLクライアントライブラリの導入 (例: `mysql2`)**
    *   Node.jsからMySQLに接続するためには、専用のクライアントライブラリが必要です。ここでは、`mysql2`という人気のあるライブラリを使用します。`mysql`モジュールよりも高速で、PromiseベースのAPIも提供しています。
    *   プロジェクトディレクトリでインストールします。
        ```bash
        npm install mysql2
        ```

3.  **データベース接続の設定とテスト**
    *   `mysql2`を使ってデータベースに接続するための設定を行います。
    *   接続情報は、セキュリティのため環境変数や設定ファイルで管理することが推奨されますが、ここでは学習のため直接コードに記述します。
        ```javascript
        const mysql = require('mysql2/promise'); // PromiseベースのAPIを使用

        async function connectToDb() {
            try {
                const connection = await mysql.createConnection({
                    host: 'localhost',
                    user: 'your_mysql_user',
                    password: 'your_mysql_password',
                    database: 'my_nodejs_db'
                });
                console.log('MySQLデータベースに接続しました！');
                return connection;
            } catch (error) {
                console.error('MySQL接続エラー:', error);
                throw error;
            }
        }

        // 接続テスト
        connectToDb();
        ```

4.  **簡単なSELECTクエリの実行**
    *   接続が確立できたら、SQLクエリを実行してデータを取得してみましょう。
    *   `connection.execute()`メソッドは、プリペアドステートメントをサポートしており、SQLインジェクション攻撃を防ぐために推奨されます。
        ```javascript
        async function getUsers() {
            const connection = await connectToDb();
            try {
                const [rows, fields] = await connection.execute('SELECT * FROM users');
                console.log('ユーザーデータ:', rows);
                return rows;
            } catch (error) {
                console.error('クエリ実行エラー:', error);
                throw error;
            } finally {
                connection.end(); // 接続を閉じる
            }
        }

        getUsers();
        ```

### 練習問題

`db_test.js`ファイルを開き、以下の問題に取り組んでください。

1.  この`day13`ディレクトリ内で`npm init -y`を実行し、`npm install mysql2`を実行してください。
2.  `db_test.js`に、MySQLデータベースへの接続設定を記述してください。`host`, `user`, `password`, `database`はご自身の環境に合わせて設定してください。
3.  接続が成功したことを示すメッセージをコンソールに表示するようにしてください。
4.  `users`テーブルからすべてのユーザーデータを取得し、コンソールに表示する関数`getAllUsers()`を作成し、実行してください。
5.  特定の`id`を持つユーザー（例: `id = 1`）のデータを取得し、コンソールに表示する関数`getUserById(id)`を作成し、実行してください。この際、プリペアドステートメント (`connection.execute('SELECT * FROM users WHERE id = ?', [id])`) を使用してください。

**実行方法:** `node db_test.js`
