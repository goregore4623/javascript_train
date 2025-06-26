// 練習問題 3, 4:
// `DOMContentLoaded`イベントリスナーを追加し、その中で`http://localhost:3000/api/projects`からプロジェクトデータを取得する`fetch`リクエストを記述してください。
// 取得したプロジェクトデータ (`projects`配列) をループ処理し、各プロジェクト (`project`オブジェクト) ごとに以下の内容を持つ`div`要素 (`project-card`クラスを付与) を動的に生成し、`#projects-grid`に追加してください。
//   *   `<img>`タグ (srcは`project.imageUrl`, altは`project.title`)
//   *   `<h3>`タグ (テキストは`project.title`)
//   *   `<p>`タグ (テキストは`project.description`)
//   *   GitHubへのリンク (`<a>`タグ, hrefは`project.githubUrl`, `target="_blank"`)。`project.githubUrl`が存在する場合のみ表示。
//   *   デモサイトへのリンク (`<a>`タグ, hrefは`project.demoUrl`, `target="_blank"`)。`project.demoUrl`が存在する場合のみ表示。

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');

    fetch('http://localhost:3000/api/projects')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(projects => {
            projectsGrid.innerHTML = ''; // ローディングメッセージなどをクリア
            if (projects.length === 0) {
                projectsGrid.innerHTML = '<p>まだプロジェクトがありません。</p>';
                return;
            }

            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
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
