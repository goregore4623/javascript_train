// 練習問題 2:
// `id="my-button"`のボタンに`click`イベントリスナーを追加してください。
// ボタンがクリックされたら、`id="display-text"`の`<p>`タグのテキストが「ボタンがクリックされました！」に変わるように実装してみましょう。

// まず、操作対象となる要素を両方取得します。
const myButton = document.getElementById("my-button");
const displayText = document.getElementById("display-text");

// ボタン(myButton)にクリックイベントリスナーを追加します。
myButton.addEventListener("click", function() {
  // イベントが発生したら、pタグ(displayText)のテキストを変更します。
  displayText.textContent = "ボタンがクリックされました！";
});

// 練習問題 4:
// `id="hover-box"`の`<div>`要素に`mouseover`イベントリスナーを追加してください。
// マウスカーソルが`<div>`の上に乗ったら、その`<div>`の背景色が`lightblue`に変わるようにしてみましょう。
const hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseover", function() {
  hoverBox.style.backgroundColor = "lightblue";
});

// 練習問題 5:
// 同じ`id="hover-box"`の`<div>`要素に`mouseout`イベントリスナーを追加してください。
// マウスカーソルが`<div>`から離れたら、背景色が元の色（または`white`）に戻るようにしてみましょう。
hoverBox.addEventListener("mouseout", function() {
  hoverBox.style.backgroundColor = "white";
});
