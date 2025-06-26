## Day 17: フロントエンドからのデータ送信

### 学習内容

今回は、フロントエンドからバックエンドAPIに対して、データの作成（POST）、更新（PUT）、削除（DELETE）リクエストを送信する方法を学びます。

1.  **`fetch` APIを使ったPOSTリクエストの実行**
    *   新しいリソースを作成する場合にPOSTリクエストを使用します。
    *   `fetch`の第二引数に`method: 'POST'`と`body`（送信するデータ）を指定します。
    *   `body`は通常、`JSON.stringify()`でJSON文字列に変換して送信します。
    *   `headers`に`'Content-Type': 'application/json'`を設定することが重要です。
    ```javascript
    const newProject = {
        title: "新しいプロジェクト",
        description: "これは新しいプロジェクトです。",
        imageUrl: "https://example.com/new.jpg"
    };

    fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProject)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Project added:', data);
        // 成功時の処理
    })
    .catch(error => {
        console.error('Error adding project:', error);
    });
    ```

2.  **`fetch` APIを使ったPUTリクエストの実行**
    *   既存のリソースを更新する場合にPUTリクエストを使用します。
    *   URLに更新対象のIDを含め、`method: 'PUT'`と`body`を指定します。
    ```javascript
    const updatedProject = {
        title: "更新されたプロジェクト",
        description: "説明が更新されました。"
    };
    const projectIdToUpdate = 1; // 更新したいプロジェクトのID

    fetch(`http://localhost:3000/api/projects/${projectIdToUpdate}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProject)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Project updated:', data);
    })
    .catch(error => {
        console.error('Error updating project:', error);
    });
    ```

3.  **`fetch` APIを使ったDELETEリクエストの実行**
    *   リソースを削除する場合にDELETEリクエストを使用します。
    *   URLに削除対象のIDを含め、`method: 'DELETE'`を指定します。`body`は通常不要です。
    ```javascript
    const projectIdToDelete = 1; // 削除したいプロジェクトのID

    fetch(`http://localhost:3000/api/projects/${projectIdToDelete}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Project deleted:', data);
    })
    .catch(error => {
        console.error('Error deleting project:', error);
    });
    ```

4.  **フォームからのデータ送信とAPIへの連携**
    *   HTMLフォームからユーザーが入力したデータを取得し、それをJSON形式に整形して`fetch`でAPIに送信する一連の流れを実装します。
    *   フォームの`submit`イベントを`event.preventDefault()`で阻止し、JavaScriptで送信処理を制御します。

### 練習問題

`index.html`と`script.js`ファイルを開き、以下の問題に取り組んでください。

1.  **バックエンドサーバーの起動:** `week3/day15/app.js`を起動しておいてください (`node app.js`)。
2.  `index.html`に、新しいプロジェクトを追加するためのフォームを作成してください。フォームには、`title`, `description`, `imageUrl`, `githubUrl`, `demoUrl`の入力フィールドと、`id="add-project-button"`を持つ送信ボタンを含めてください。
3.  `script.js`で、フォームの送信ボタンに`click`イベントリスナーを追加してください。
4.  イベントリスナー内で、各入力フィールドから値を取得し、それらをオブジェクトにまとめてください。
5.  作成したオブジェクトを`fetch` APIを使って`http://localhost:3000/api/projects`にPOSTリクエストとして送信してください。
    *   成功した場合、コンソールに成功メッセージとレスポンスデータを表示し、フォームをクリアしてください。
    *   失敗した場合、エラーメッセージをコンソールに表示してください。
6.  (応用) 既存のプロジェクトを削除するためのボタンを各プロジェクトリストアイテムに追加し、そのボタンがクリックされたら対応するプロジェクトをDELETEリクエストで削除する機能を実装してみましょう。

**実行方法:**
*   `week3/day15/app.js`を`node app.js`で起動。
*   `week4/day17/index.html`をブラウザで開く。
*   フォームにデータを入力して送信ボタンを押し、バックエンドとDBの変化を確認。
