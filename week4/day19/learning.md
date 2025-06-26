## Day 19: ポートフォリオサイト - プロジェクトデータの表示

### 学習内容

この日は、Day 18で作成した静的なHTML/CSSのポートフォリオサイトに、Day 16で学んだJavaScriptによるAPI連携を組み込み、MySQLから取得したプロジェクトデータを動的に表示します。

1.  **MySQLの`projects`テーブルに実際のポートフォリオプロジェクトデータを投入**
    *   `week3/day14`の練習問題で作成した`projects`テーブルに、ご自身のポートフォリオに掲載したい実際のプロジェクトデータをいくつか挿入しておきましょう。
    *   画像URLは、ダミー画像サービス（例: `https://via.placeholder.com/300x200?text=Project1`）や、ご自身で用意した画像のURLを使用できます。

2.  **フロントエンドのJavaScriptから`/api/projects` (GET) を呼び出し、取得したプロジェクトデータを動的にWebページに表示**
    *   `index.html`のプロジェクトセクション (`id="projects-grid"`など) に、JavaScriptでプロジェクトデータを挿入するロジックを記述します。
    *   `fetch` APIを使ってバックエンドからプロジェクトデータを取得し、ループ処理で各プロジェクトのHTML要素を生成し、DOMに追加します。
    ```javascript
    // script.js (抜粋)
    document.addEventListener('DOMContentLoaded', () => {
        const projectsGrid = document.getElementById('projects-grid');

        fetch('http://localhost:3000/api/projects')
            .then(response => response.json())
            .then(projects => {
                projectsGrid.innerHTML = ''; // ローディングメッセージなどをクリア
                if (projects.length === 0) {
                    projectsGrid.innerHTML = '<p>まだプロジェクトがありません。</p>';
                    return;
                }

                projects.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.classList.add('project-card'); // CSSでスタイルを適用するためのクラス
                    projectCard.innerHTML = `
                        <img src="${project.imageUrl}" alt="${project.title}">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-links">
                            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank">GitHub</a>` : ''}
                            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank">Demo</a>` : ''}
                        </div>
                    `;
                    projectsGrid.appendChild(projectCard);
                });
            })
            .catch(error => {
                console.error('プロジェクトの取得中にエラーが発生しました:', error);
                projectsGrid.innerHTML = '<p>プロジェクトの読み込みに失敗しました。</p>';
            });
    });
    ```

3.  **各プロジェクトの詳細ページへのリンク (またはモーダル表示) の検討**
    *   ポートフォリオサイトでは、各プロジェクトをクリックすると詳細情報が表示されるようにすることが一般的です。
    *   **詳細ページへのリンク:** 各プロジェクトカードにリンクを設定し、別のHTMLページ（例: `project-detail.html?id=1`）に遷移して詳細を表示する方法。
    *   **モーダル表示:** ページ遷移せずに、ポップアップウィンドウ（モーダル）で詳細を表示する方法。これは少し複雑になりますが、ユーザー体験は向上します。
    *   今回は、シンプルにGitHubやデモサイトへの直接リンクを埋め込む形にします。

### 練習問題

`index.html`と`script.js`ファイルを開き、以下の問題に取り組んでください。

1.  **バックエンドサーバーの起動:** `week3/day15/app.js`を起動しておいてください (`node app.js`)。
2.  `index.html`の`#projects-grid`要素が空であることを確認してください (Day 18で追加したダミーの`<p>`タグは削除してください)。
3.  `script.js`に、`DOMContentLoaded`イベントリスナーを追加し、その中で`http://localhost:3000/api/projects`からプロジェクトデータを取得する`fetch`リクエストを記述してください。
4.  取得したプロジェクトデータ (`projects`配列) をループ処理し、各プロジェクト (`project`オブジェクト) ごとに以下の内容を持つ`div`要素 (`project-card`クラスを付与) を動的に生成し、`#projects-grid`に追加してください。
    *   `<img>`タグ (srcは`project.imageUrl`, altは`project.title`)
    *   `<h3>`タグ (テキストは`project.title`)
    *   `<p>`タグ (テキストは`project.description`)
    *   GitHubへのリンク (`<a>`タグ, hrefは`project.githubUrl`, `target="_blank"`)。`project.githubUrl`が存在する場合のみ表示。
    *   デモサイトへのリンク (`<a>`タグ, hrefは`project.demoUrl`, `target="_blank"`)。`project.demoUrl`が存在する場合のみ表示。
5.  `style.css`に、`project-card`クラスと、その中の`img`, `h3`, `p`, `a`タグに対する基本的なスタイルを追加し、プロジェクトカードがグリッドレイアウトで綺麗に表示されるように調整してください。

**実行方法:**
*   `week3/day15/app.js`を`node app.js`で起動。
*   `week4/day19/index.html`をブラウザで開く。
