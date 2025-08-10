// 練習問題 2:
// `add-button`がクリックされたときに以下の処理を行うイベントリスナーを追加してください。
//   *   `todo-input`の値を取得する。
//   *   もし入力が空でなければ、新しい`<li>`要素を作成し、その`textContent`を入力値に設定する。
//   *   作成した`<li>`要素を`todo-list` (`<ul>`) に追加する。
//   *   `todo-input`の値を空にする。
const inputElement = document.getElementById("todo-input");
const buttonValue = document.getElementById("add-button");

buttonValue.addEventListener("click", function (event) {
  // eventオブジェクトが自動生成され、イベントの情報が保持される
  const inputValue = inputElement.value;
  if (inputValue) {
    // todo-listのエレメントを取得
    const ulElement = document.getElementById("todo-list");
    // liを格納するオブジェクトを定義
    const liElement = document.createElement("li");
    // inputValueの値を入れるspan要素を作成
    const spanElement = document.createElement("span");
    spanElement.textContent = inputValue;
    // 削除ボタンの追加
    const deleteElement = document.createElement("button");
    // deleteElement.setAttribute("id", "");
    deleteElement.textContent = "x";
    // liに入力された文章を挿入
    liElement.appendChild(spanElement);
    liElement.appendChild(deleteElement);

    // 削除ボタンのイベントを追加
    deleteElement.addEventListener("click", function () {
      liElement.remove();
    });
    // ul項目にliを追加
    ulElement.append(liElement);
    // input要素を空にする
    inputElement.value = "";
  }
});

// 練習問題 3 (応用):
// 追加された各`<li>`要素に、その項目を削除するためのボタン（例: `[x]`）を追加してみましょう。
// この削除ボタンがクリックされたら、対応する`<li>`要素がリストから削除されるように実装してください。
