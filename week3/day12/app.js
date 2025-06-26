const express = require('express');
const app = express();
const port = 3000;

// 練習問題 6: `express.json()`ミドルウェアを使用
app.use(express.json());

// 練習問題 3: ルートURL (`/`) へのGETリクエスト
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// 練習問題 4: `/api/hello`へのGETリクエスト
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from API!" });
});

// 練習問題 5: `/api/users`へのGETリクエスト
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ];
    res.json(users);
});

// 練習問題 6: `/api/data`へのPOSTリクエスト
app.post('/api/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ status: "success", receivedData: req.body });
});

// サーバーを起動
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
