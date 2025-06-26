## Day 16: フロントエンドからのAPI呼び出し

### 学習内容

この日から、フロントエンド（HTML/CSS/JavaScript）とバックエンド（Node.js/Express.js/MySQL）を連携させ、ポートフォリオサイトの構築を始めます。

1.  **`fetch` APIを使ったGETリクエストの実行**
    *   Day 10で`fetch`の基本を学びましたが、今回は実際に自分で構築したバックエンドAPIからデータを取得します。
    *   フロントエンドのJavaScriptから、バックエンドの`/api/projects`エンドポイントにGETリクエストを送信し、プロジェクトデータを取得します。
    ```javascript
    fetch('http://localhost:3000/api/projects')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Projects data:', data);
            // 取得したデータをHTMLに表示する処理
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    ```

2.  **取得したJSONデータをJavaScriptで処理し、HTMLに動的に表示**
    *   `fetch`で取得したJSONデータはJavaScriptのオブジェクトとして扱えます。
    *   これらのデータをDOM操作（Day 6-9で学んだ内容）を使って、Webページ上に動的に表示します。
    *   例えば、プロジェクトのリストを表示する場合、`<ul>`要素を取得し、各プロジェクトデータから`<li>`要素を生成して追加していく形になります。
    ```javascript
    const projectsContainer = document.getElementById('projects-list');
    data.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <img src="${project.imageUrl}" alt="${project.title}" style="width:100px;">
        `;
        projectsContainer.appendChild(projectItem);
    });
    ```

3.  **CORS (Cross-Origin Resource Sharing) の基本とExpress.jsでの対応 (`cors`ミドルウェア)**
    *   **CORS:** Webブラウザには、セキュリティ上の理由から、異なるオリジン（ドメイン、プロトコル、ポートのいずれかが異なる）へのHTTPリクエストを制限する「同一オリジンポリシー」という仕組みがあります。
    *   フロントエンド（例: `http://localhost:5500`で動作するHTMLファイル）から、バックエンド（例: `http://localhost:3000`で動作するExpressサーバー）にリクエストを送る場合、オリジンが異なるため、デフォルトではブラウザによってブロックされます。
    *   これを許可するために、サーバー側でCORSの設定を行う必要があります。
    *   Express.jsでは、`cors`ミドルウェアを使用するのが一般的です。
        *   まず、`npm install cors`で`cors`パッケージをインストールします。
        *   `app.js`に以下のコードを追加します。
            ```javascript
            const cors = require('cors');
            app.use(cors()); // すべてのオリジンからのアクセスを許可
            // 特定のオリジンのみ許可する場合
            // app.use(cors({ origin: 'http://localhost:5500' }));
            ```

### 練習問題

`index.html`と`script.js`ファイルを開き、以下の問題に取り組んでください。

1.  **バックエンドサーバーの起動:** `week3/day15/app.js`を起動しておいてください (`node app.js`)。
2.  `index.html`に、プロジェクトを表示するための`id="projects-list"`を持つ空の`<ul>`要素を作成してください。
3.  `script.js`で、`fetch` APIを使って`http://localhost:3000/api/projects`からプロジェクトデータを取得してください。
4.  取得したプロジェクトデータをループ処理し、各プロジェクトの`title`, `description`, `imageUrl`を使って、`projects-list` (`<ul>`) の中に新しい`<li>`要素として動的に追加してください。
    *   `<li>`要素の中には、`<h3>`でタイトル、`<p>`で説明、`<img>`で画像を表示するようにしてください。
5.  **CORS対応:** もしブラウザのコンソールでCORSエラーが発生した場合、`week3/day15/app.js`に`cors`ミドルウェアを追加し、問題を解決してください。

**実行方法:**
*   `week3/day15/app.js`を`node app.js`で起動。
*   `week4/day16/index.html`をブラウザで開く (VS CodeのLive Server拡張機能を使うと便利です)。
