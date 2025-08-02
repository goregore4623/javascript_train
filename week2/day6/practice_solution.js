// 練習問題 5: JavaScriptが正しく読み込まれているか確認するためのログ
console.log("JavaScript is loaded!");

// 練習問題 2:
// `id="main-title"`を持つ要素を`getElementById`で取得し、コンソールに出力してみましょう。
const mainTitle = document.getElementById("main-title");
console.log("--- 問題2の解答 ---");
console.log(mainTitle);

// 練習問題 3:
// `class="paragraph"`を持つ最初の要素を`querySelector`で取得し、コンソールに出力してみましょう。
const firstParagraph = document.querySelector(".paragraph");
console.log("--- 問題3の解答 ---");
console.log(firstParagraph);

// 練習問題 4:
// `class="paragraph"`を持つすべての要素を`querySelectorAll`で取得し、コンソールに出力してみましょう。
// 取得したNodeListの`length`プロパティも表示してみましょう。
const allParagraphs = document.querySelectorAll(".paragraph");
console.log("--- 問題4の解答 ---");
console.log(allParagraphs);
console.log("取得した要素の数:", allParagraphs.length);
