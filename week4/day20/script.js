// Day 19 のプロジェクト表示ロジック
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');

    const fetchProjects = () => {
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
    };

    fetchProjects();

    // 練習問題 3, 4: お問い合わせフォームの処理
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // デフォルトのフォーム送信を阻止

            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            try {
                const response = await fetch('http://localhost:3000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                formMessage.textContent = 'メッセージが正常に送信されました！';
                formMessage.style.color = 'green';
                contactForm.reset(); // フォームをクリア
                console.log('Contact form submission successful:', result);
            } catch (error) {
                formMessage.textContent = 'メッセージの送信に失敗しました。もう一度お試しください。';
                formMessage.style.color = 'red';
                console.error('Error submitting contact form:', error);
            }
        });
    }
});
