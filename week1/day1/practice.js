// 練習問題 1:
// `const`を使って円周率（3.14）を定義し、コンソールに表示してみましょう。
const pi = 3.14;
console.log(pi);

// 練習問題 2:
// `let`を使って自分の名前を定義し、コンソールに表示してみましょう。
// その後、その変数にニックネームを再代入して、再度表示してみましょう。
let name = "goregore";
name = "goremusu";
console.log(name);

// 練習問題 3:
// 2つの数値（例: 10と3）を定義し、それらの加算、減算、乗算、除算、剰余の結果をそれぞれコンソールに表示してみましょう。
const right = 10,
  left = 3;
let answer = right + left;
console.log("答え:", answer);

// 練習問題 4:
// 自分の年齢が20歳以上かどうかを判定し、結果（`true` or `false`）をコンソールに表示してみましょう。
const myage = 25;
if (myage >= 20) {
  console.log("I am", name, ". I am", myage, "years old");
} else {
  console.log("I am ", name, ". I am young");
}

// 練習問題 5:
// 姓と名をそれぞれ変数に入れ、連結してフルネームを作成し、「私の名前は〇〇です。」という形でコンソールに表示してみましょう。

const firstname = "gore",
  lastname = "musu1";
name = firstname + lastname;
console.log("I am", name, ". I am", myage, "years old");
