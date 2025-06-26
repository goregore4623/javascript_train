// 練習問題 3, 4:
// `fetch` APIを使って`http://localhost:3000/api/projects`からプロジェクトデータを取得し、
// 取得したプロジェクトデータをループ処理し、各プロジェクトの`title`, `description`, `imageUrl`を使って、
// `projects-list` (`<ul>`) の中に新しい`<li>`要素として動的に追加してください。

document.addEventListener('DOMContentLoaded', () => {
    const projectsList = document.getElementById('projects-list');

    fetch('http://localhost:3000/api/projects')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(projects => {
            projectsList.innerHTML = ''; // ローディングメッセージをクリア
            if (projects.length === 0) {
                projectsList.innerHTML = '<li>プロジェクトがありません。</li>';
                return;
            }

            projects.forEach(project => {
                const projectItem = document.createElement('li');
                projectItem.innerHTML = `
                    <img src="${project.imageUrl}" alt="${project.title}">
                    <div>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank">GitHub</a>` : ''}
                        ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank">Demo</a>` : ''}
                    </div>
                `;
                projectsList.appendChild(projectItem);
            });
        })
        .catch(error => {
            console.error('プロジェクトの取得中にエラーが発生しました:', error);
            projectsList.innerHTML = '<li>プロジェクトの読み込みに失敗しました。</li>';
        });
});
