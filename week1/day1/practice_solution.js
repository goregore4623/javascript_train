// 模範解答 (practice_solution.js)

// 練習問題 1:
// `const`を使って円周率（3.14）を定義し、コンソールに表示してみましょう。
const pi = 3.14;
console.log("問題1:", pi);


// 練習問題 2:
// `let`を使って自分の名前を定義し、コンソールに表示してみましょう。
// その後、その変数にニックネームを再代入して、再度表示してみましょう。
let myName = "山田太郎"; // 自分の名前に置き換えてください
console.log("問題2 (変更前):", myName);

myName = "Taro"; // ニックネームに置き換えてください
console.log("問題2 (変更後):", myName);


// 練習問題 3:
// 2つの数値（例: 10と3）を定義し、それらの加算、減算、乗算、除算、剰余の結果をそれぞれコンソールに表示してみましょう。
const num1 = 10;
const num2 = 3;

console.log("問題3 (加算):", num1 + num2);       // 13
console.log("問題3 (減算):", num1 - num2);       // 7
console.log("問題3 (乗算):", num1 * num2);       // 30
console.log("問題3 (除算):", num1 / num2);       // 3.333...
console.log("問題3 (剰余):", num1 % num2);       // 1


// 練習問題 4:
// 自分の年齢が20歳以上かどうかを判定し、結果（`true` or `false`）をコンソールに表示してみましょう。
const myAge = 25; // 自分の年齢に置き換えてください
const isOver20 = myAge >= 20;
console.log("問題4 (20歳以上か？):", isOver20);


// 練習問題 5:
// 姓と名をそれぞれ変数に入れ、連結してフルネームを作成し、「私の名前は〇〇です。」という形でコンソールに表示してみましょう。
const lastName = "山田";
const firstName = "太郎";
const fullName = lastName + firstName;

// 方法1: + 演算子を使う
console.log("問題5 (方法1): 私の名前は" + fullName + "です。");

// 方法2: テンプレートリテラルを使う (推奨)
console.log(`問題5 (方法2): 私の名前は${fullName}です。`);
