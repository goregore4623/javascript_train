## Day 12: Express.jsでWebサーバー構築

### 学習内容

1.  **Express.jsとは何か、その役割**
    *   **Express.js:** Node.jsのための高速で、オープンソースのWebアプリケーションフレームワークです。WebアプリケーションやAPIを構築するための堅牢な機能を提供します。
    *   Node.jsのHTTPモジュールをより使いやすく、機能豊富にしたものと考えると良いでしょう。
    *   ルーティング、ミドルウェア、テンプレートエンジンとの統合など、Web開発に必要な多くの機能を提供します。

2.  **基本的なExpress.jsサーバーのセットアップ**
    *   まず、プロジェクトディレクトリで`npm init -y`を実行し、`package.json`を作成します。
    *   次に、`npm install express`でExpress.jsをインストールします。
    *   基本的なサーバーのコードは以下のようになります。
        ```javascript
        const express = require('express');
        const app = express();
        const port = 3000; // サーバーがリッスンするポート番号

        // ルートURLへのGETリクエストに対するハンドラ
        app.get('/', (req, res) => {
            res.send('Hello, Express!');
        });

        // サーバーを起動
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
        ```

3.  **ルーティングの基本 (`app.get`, `app.post`など)**
    *   **ルーティング:** クライアントからのリクエストURL (パス) とHTTPメソッド (GET, POSTなど) に基づいて、どの処理を実行するかを決定することです。
    *   Express.jsでは、`app.METHOD(PATH, HANDLER)`の形式でルートを定義します。
        *   `METHOD`: `get`, `post`, `put`, `delete`など、HTTPメソッドに対応します。
        *   `PATH`: リクエストのパス (URL) です。`/`, `/users`, `/products/:id`など。
        *   `HANDLER`: リクエストが来たときに実行される関数です。通常、`req` (リクエストオブジェクト) と`res` (レスポンスオブジェクト) を引数に取ります。
            *   `req`: クライアントからのリクエストに関する情報 (パラメータ、クエリ、ボディなど) を含みます。
            *   `res`: クライアントへのレスポンスを送信するためのメソッド (例: `res.send()`, `res.json()`, `res.status()`) を提供します。
    *   **例:**
        ```javascript
        app.get('/users', (req, res) => {
            res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
        });

        app.post('/products', (req, res) => {
            // req.body からデータを取得して処理
            res.status(201).send('Product created');
        });
        ```

4.  **ミドルウェアの概念 (例: `express.json()`)**
    *   **ミドルウェア:** Express.jsアプリケーションのリクエスト処理パイプラインの中間に位置する関数です。
    *   リクエストが最終的なルートハンドラに到達する前に、様々な処理 (ログ記録、認証、データ解析など) を実行できます。
    *   `app.use()`を使ってミドルウェアを登録します。
    *   **`express.json()`:** クライアントから送信されたJSON形式のリクエストボディを解析し、`req.body`オブジェクトとして利用できるようにする組み込みミドルウェアです。
        ```javascript
        app.use(express.json()); // これがないとreq.bodyがundefinedになる

        app.post('/data', (req, res) => {
            console.log(req.body); // クライアントから送られたJSONデータ
            res.send('Data received');
        });
        ```

### 練習問題

`app.js`ファイルを開き、以下の問題に取り組んでください。

1.  この`day12`ディレクトリ内で`npm init -y`を実行し、`npm install express`を実行してください。
2.  `app.js`にExpress.jsサーバーの基本的なセットアップを記述し、ポート3000でリッスンするようにしてください。
3.  ルートURL (`/`) へのGETリクエストに対して、「Welcome to my API!」というテキストを返すようにしてください。
4.  `/api/hello`へのGETリクエストに対して、JSON形式で`{ message: "Hello from API!" }`を返すようにしてください。
5.  `/api/users`へのGETリクエストに対して、ユーザーの配列 (例: `[{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]`) をJSON形式で返すようにしてください。
6.  `/api/data`へのPOSTリクエストを受け付けるように設定し、`express.json()`ミドルウェアを使用してリクエストボディを解析できるようにしてください。POSTされたJSONデータをコンソールに表示し、クライアントには`{ status: "success", receivedData: req.body }`というJSONを返すようにしてください。

**サーバーの実行方法:** ターミナルで`node app.js`と入力し、ブラウザやPostman/Insomniaなどのツールで各エンドポイントにアクセスして動作を確認してください。
