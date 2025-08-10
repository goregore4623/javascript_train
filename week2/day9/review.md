## Day 9 課題レビュー: 簡単なTodoリスト

Day9の課題、お疲れ様でした。この課題は、DOM操作とイベント処理を組み合わせた、非常に実践的な内容です。動的に要素を追加し、さらにその追加した要素にイベント（今回は削除機能）を設定する、という流れはWebアプリケーション開発の基本となります。

### 完成版コードのポイント解説

#### 1. 項目の追加処理

```javascript
// ... (要素の取得)

addButton.addEventListener('click', function() {
  // (1) クリックされた瞬間に値を取得
  const inputValue = todoInput.value.trim();

  if (inputValue !== "") {
    // (2) <li>要素を新規作成
    const li = document.createElement('li');

    // (3) テキスト表示用の<span>を作成し、liに追加
    const textSpan = document.createElement('span');
    textSpan.textContent = inputValue;
    li.appendChild(textSpan);

    // (4) 削除ボタンを作成し、liに追加
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    li.appendChild(deleteButton);

    // (5) 削除ボタンにイベントを設定
    deleteButton.addEventListener('click', function() {
      li.remove();
    });

    // (6) 完成した<li>を<ul>に追加
    todoList.prepend(li);

    // (7) 入力欄をクリア
    todoInput.value = '';
  }
});
```

*   **(1) 値の取得タイミング:** `addEventListener`の**内側**で`todoInput.value`を取得するのが重要です。これにより、ボタンがクリックされた瞬間の最新の入力値を得られます。
*   **(3, 4) `<span>`と`<button>`の追加:** `li.textContent = ...`としてしまうと、`<li>`の中身がすべてテキストで上書きされてしまいます。テキスト用の`<span>`と、操作用の`<button>`を別々に作成し、それぞれを`appendChild`で追加することで、両方を共存させることができます。

#### 2. 項目の削除処理

```javascript
// (5) 削除ボタンにイベントを設定
deleteButton.addEventListener('click', function() {
  // この関数が呼ばれたとき、liは「このボタンが所属するli要素」を指す
  li.remove();
});
```

*   **ここが最重要ポイントです。**
*   削除ボタンの`addEventListener`は、`<li>`要素と削除ボタンが**作られた直後**に設定されます。
*   JavaScriptの「クロージャ」という仕組みにより、イベントリスナー関数は、それが定義されたときの環境（変数`li`など）を覚えています。
*   そのため、後で削除ボタンがクリックされたときに、`li.remove()`と書くだけで、そのボタンが所属している特定の`<li>`要素を正しく削除することができるのです。

### まとめ

この課題は、以下の重要な概念を学ぶためのものでした。

*   **動的な要素作成:** `document.createElement()`
*   **親子関係の構築:** `appendChild()`
*   **動的に作成した要素へのイベント設定:** `addEventListener()`
*   **要素の削除:** `remove()`

これらのテクニックは、今後APIから取得したデータを表示したり、ユーザーの操作に応じてUIを変化させたりする際に、必ず必要になります。

`practice_solution.js`のコードをよく読んで、一行ずつ何が起きているのかを追ってみてください。そして、ぜひご自身でもう一度、何も見ずに書けるか挑戦してみることをお勧めします。これができれば、大きな自信になります。

2週目の学習、大変お疲れ様でした！
