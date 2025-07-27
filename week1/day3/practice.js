// 練習問題 1:
// 2つの数値を引数として受け取り、その合計を返す（`return`する）関数を作成し、
// 呼び出して結果をコンソールに表示してみましょう。
let sum;
function returnSum(x, y) {
  return x + y;
}
sum = returnSum(1, 2);
console.log(`合計値: ${sum}`);

// 練習問題 2:
// 税抜価格を引数として受け取り、消費税（10%）込みの価格を返す関数を作成し、使ってみましょう。

// 定数に関数を格納して実行する方法
const includeTaxPrice = function (nonTaxPrice, taxRate = 0.1) {
  //デフォルト値の定義
  return Math.round(nonTaxPrice * (1 + taxRate));
};
console.log(`税込金額: ${includeTaxPrice(100, 0.1)}`);

// 練習問題 3:
// 引数として文字列を受け取り、その文字列の末尾に「!!!」を追加して返す関数を作成し、
// 呼び出して結果をコンソールに表示してみましょう。
const addExclamation = (message) => message + "!!!"; // returnだけなら省略できる
console.log(addExclamation("Hello World"));

// 練習問題 4:
// 引数として`name`と`age`を受け取り、「私の名前は[name]で、年齢は[age]歳です。」という文字列を返す関数を作成し、
// 呼び出してみましょう。
const introduction = (name, age) => {
  return `私の名前は${name}で、年齢は${age}歳です。`;
};
console.log(introduction("山田太郎", 20));

// 練習問題 5:
// 関数内で宣言された変数が、関数外からアクセスできないことを`console.log()`を使って確認してみましょう。
const test = "アクセス確認";
const accessCheck = (test) => {
  let nonAccess = "access deny";
  return test + nonAccess;
};

try {
  console.log(nonAccess); //アクセスできないことを確認
} catch (error) {
  console.log("Access Deny");
  console.log(error);
}
