## Day 14: RESTful APIの構築 (GET)

### 学習内容

1.  **RESTful APIの原則 (リソース, HTTPメソッド)**
    *   **REST (Representational State Transfer):** Webサービスを設計するためのアーキテクチャスタイルです。RESTfulなAPIは、Webの既存の技術（HTTP、URIなど）を最大限に活用します。
    *   **リソース:** APIが操作する対象（データ）を指します。例えば、ユーザー、商品、プロジェクトなどがリソースです。URI (Uniform Resource Identifier) で識別されます。
        *   例: `/users`, `/products/123`, `/projects`
    *   **HTTPメソッド:** リソースに対してどのような操作を行うかを示します。
        *   **GET:** リソースの取得 (読み込み)。
        *   **POST:** 新しいリソースの作成。
        *   **PUT:** 既存のリソースの完全な更新 (置き換え)。
        *   **PATCH:** 既存のリソースの部分的な更新。
        *   **DELETE:** リソースの削除。

2.  **Express.jsでGETエンドポイントを実装し、MySQLからデータを取得してJSON形式で返す**
    *   Day 12で学んだExpress.jsのルーティングと、Day 13で学んだMySQL接続を組み合わせて、GETリクエストに対応するAPIエンドポイントを作成します。
    *   クライアントからのリクエストに応じて、MySQLからデータを取得し、JSON形式でレスポンスを返します。
    ```javascript
    // app.js (抜粋)
    const express = require('express');
    const mysql = require('mysql2/promise');
    const app = express();
    const port = 3000;

    // DB接続設定 (実際は環境変数などから読み込む)
    const dbConfig = {
        host: 'localhost',
        user: 'root',
        password: 'your_mysql_password',
        database: 'my_nodejs_db'
    };

    // 全プロジェクトを取得するAPI
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

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    ```

3.  **パスパラメータの利用 (例: `/api/users/:id`)**
    *   特定のIDを持つリソースを取得する場合など、URLの一部として動的な値を受け取りたいときにパスパラメータを使用します。
    *   Express.jsでは、パスに`:`を付けてパラメータ名を指定します。
    *   リクエストハンドラ内で`req.params`オブジェクトを通じてアクセスできます。
    ```javascript
    // 特定のIDのプロジェクトを取得するAPI
    app.get('/api/projects/:id', async (req, res) => {
        const projectId = req.params.id; // パスパラメータからIDを取得
        let connection;
        try {
            connection = await mysql.createConnection(dbConfig);
            const [rows] = await connection.execute('SELECT * FROM projects WHERE id = ?', [projectId]);
            if (rows.length === 0) {
                return res.status(404).json({ message: 'プロジェクトが見つかりません' });
            }
            res.json(rows[0]); // 最初の行（見つかったプロジェクト）を返す
        } catch (error) {
            console.error('Error fetching project by ID:', error);
            res.status(500).json({ message: 'サーバーエラーが発生しました' });
        } finally {
            if (connection) connection.end();
        }
    });
    ```

### 練習問題

`app.js`ファイルを開き、以下の問題に取り組んでください。

1.  この`day14`ディレクトリ内で`npm init -y`を実行し、`npm install express mysql2`を実行してください。
2.  MySQLに`my_portfolio_db`というデータベースを作成し、その中に以下の構造を持つ`projects`テーブルを作成してください。
    ```sql
    CREATE DATABASE IF NOT EXISTS my_portfolio_db;
    USE my_portfolio_db;
    CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        imageUrl VARCHAR(255),
        githubUrl VARCHAR(255),
        demoUrl VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    -- テストデータをいくつか挿入
    INSERT INTO projects (title, description, imageUrl, githubUrl) VALUES
    ('Todo App', 'シンプルなTODOリストアプリケーション', 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Todo', 'https://github.com/your/todo-app'),
    ('Weather App', '現在の天気を表示するアプリケーション', 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Weather', 'https://github.com/your/weather-app');
    ```
3.  `app.js`にExpress.jsサーバーの基本的なセットアップと、MySQL接続設定を記述してください。DB接続情報はご自身の環境に合わせてください。
4.  `/api/projects` (GET) エンドポイントを実装し、`projects`テーブルからすべてのプロジェクトデータを取得してJSON形式で返すようにしてください。
5.  `/api/projects/:id` (GET) エンドポイントを実装し、指定された`id`のプロジェクトデータを取得してJSON形式で返すようにしてください。プロジェクトが見つからない場合は、ステータスコード404とエラーメッセージを返してください。

**サーバーの実行方法:** `node app.js`
