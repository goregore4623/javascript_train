// 要素の取得
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// 「追加」ボタンにクリックイベントリスナーを追加
addButton.addEventListener("click", function () {
  // 1. 入力値を取得し、前後の空白を削除
  const inputValue = todoInput.value.trim();

  // 2. 入力値が空でなければ、処理を実行
  if (inputValue !== "") {
    // 3. <li>要素を新規作成
    const li = document.createElement("li");

    // 4. テキストを表示するための<span>要素を作成
    const textSpan = document.createElement("span");
    textSpan.textContent = inputValue;

    // 5. 削除ボタン用の<button>要素を作成
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    // 6. <li>要素に<span>と<button>を追加
    li.appendChild(textSpan);
    li.appendChild(deleteButton);

    // 7. 【応用】削除ボタンにクリックイベントを追加
    deleteButton.addEventListener("click", function () {
      // クリックされたボタンの親であるli要素をDOMから削除
      li.remove();
    });

    // 8. <ul>の先頭に完成した<li>要素を追加
    todoList.prepend(li);

    // 9. 入力欄をクリア
    todoInput.value = "";
  }
});
