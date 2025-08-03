// 練習問題 2:
// `id="message"`の`<p>`タグのテキスト内容を「JavaScriptで変更されました！」に変更してみましょう。
const messageElement = document.getElementById("message");
messageElement.textContent = "JavaScriptで変更されました！";

// 練習問題 3:
// `id="my-image"`の`<img>`タグの`src`属性を別の画像URL（例: `https://via.placeholder.com/150`）に変更し、
// `alt`属性を「新しい画像」に変更してみましょう。
const imageElement = document.getElementById("my-image");
imageElement.setAttribute("src", "https://via.placeholder.com/150x150?text=New+Image");
imageElement.setAttribute("alt", "新しい画像");

// 練習問題 4:
// `id="message"`の`<p>`タグの文字色を赤色に、背景色を薄い黄色に、フォントサイズを24pxに変更してみましょう。
messageElement.style.color = "red";
messageElement.style.backgroundColor = "lightyellow";
messageElement.style.fontSize = "24px";

// 練習問題 5:
// `id="message"`の`<p>`タグに`highlight`というクラスを追加し、`default-text`というクラスを削除してみましょう。
// その後、`highlight`クラスが追加されているかコンソールで確認してみましょう。
console.log("変更前のクラス:", messageElement.className);

messageElement.classList.add("highlight");
messageElement.classList.remove("default-text");

console.log("変更後のクラス:", messageElement.className);
console.log("highlightクラスが含まれているか:", messageElement.classList.contains("highlight"));
