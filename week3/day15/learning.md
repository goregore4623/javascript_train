## Day 15: RESTful APIの構築 (POST, PUT, DELETE)

### 学習内容

Day 14でGETリクエストを扱いましたが、今回はデータの作成、更新、削除を行うHTTPメソッド (POST, PUT, DELETE) を使ったAPIエンドポイントの実装を学びます。

1.  **POST (データ作成)**
    *   新しいリソースを作成するために使用します。
    *   クライアントはリクエストボディに作成したいリソースのデータをJSON形式で含めて送信します。
    *   サーバー側では、`express.json()`ミドルウェアを使ってリクエストボディを解析し、そのデータをデータベースに挿入します。
    *   成功した場合、通常はステータスコード`201 Created`を返します。
    ```javascript
    app.post('/api/projects', async (req, res) => {
        const { title, description, imageUrl, githubUrl, demoUrl } = req.body; // リクエストボディからデータを取得
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
    ```

2.  **PUT (データ更新)**
    *   既存のリソースを完全に更新するために使用します。通常、リソースのURI全体を指定します。
    *   クライアントはリクエストボディに更新後のリソースのデータをJSON形式で含めて送信します。
    *   サーバー側では、指定されたIDのリソースをデータベースで更新します。
    *   成功した場合、通常はステータスコード`200 OK`または`204 No Content`を返します。
    ```javascript
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
    ```

3.  **DELETE (データ削除)**
    *   既存のリソースを削除するために使用します。
    *   通常、リクエストボディは不要で、URIで削除対象のリソースを指定します。
    *   成功した場合、通常はステータスコード`200 OK`または`204 No Content`を返します。
    ```javascript
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
    ```

### 練習問題

`app.js`ファイルを開き、以下の問題に取り組んでください。

1.  `app.js`に`express.json()`ミドルウェアを追加し、リクエストボディを解析できるようにしてください。
2.  `/api/projects` (POST) エンドポイントを実装し、新しいプロジェクトを`projects`テーブルに追加できるようにしてください。成功したらステータスコード`201`と、追加されたプロジェクトの`id`を含むJSONを返してください。
3.  `/api/projects/:id` (PUT) エンドポイントを実装し、指定された`id`のプロジェクトを更新できるようにしてください。プロジェクトが見つからない場合は`404`を返してください。
4.  `/api/projects/:id` (DELETE) エンドポイントを実装し、指定された`id`のプロジェクトを削除できるようにしてください。プロジェクトが見つからない場合は`404`を返してください。

**テスト方法:** Postman, Insomnia, または`curl`コマンドなどを使って、これらのAPIエンドポイントをテストしてください。

**例 (curl):**

*   **POST:**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"title":"New Project","description":"A brand new project.","imageUrl":"https://example.com/new.jpg","githubUrl":"https://github.com/new","demoUrl":"https://demo.com/new"}' http://localhost:3000/api/projects
    ```
*   **PUT (IDは適宜変更):**
    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Project","description":"This project has been updated.","imageUrl":"https://example.com/updated.jpg","githubUrl":"https://github.com/updated","demoUrl":"https://demo.com/updated"}' http://localhost:3000/api/projects/1
    ```
*   **DELETE (IDは適宜変更):**
    ```bash
    curl -X DELETE http://localhost:3000/api/projects/1
    ```
