// 模範解答 (practice_solution.js)

// 練習問題 1:
// 2つの数値を引数として受け取り、その合計を返す（`return`する）関数を作成し、
// 呼び出して結果をコンソールに表示してみましょう。

// 関数宣言で作成
function calculateSum(num1, num2) {
  return num1 + num2;
}

// 関数を呼び出し、結果を変数に格納
const result1 = calculateSum(10, 20);
console.log(`合計値: ${result1}`); // 出力: 合計値: 30


// 練習問題 2:
// 税抜価格を引数として受け取り、消費税（10%）込みの価格を返す関数を作成し、使ってみましょう。

// 関数式で作成
// 引数名を price とすることで、特定の外部変数に依存しない、より汎用的な関数になります。
const calculatePriceWithTax = function(price, taxRate = 0.1) {
  // Math.floor() を使うと小数点以下を切り捨てにできます。
  const priceWithTax = Math.floor(price * (1 + taxRate));
  return priceWithTax;
};

const result2 = calculatePriceWithTax(1500);
console.log(`税込価格: ${result2}円`); // 出力: 税込価格: 1650円

const result3 = calculatePriceWithTax(1500, 0.08); // 税率8%で計算
console.log(`税込価格（8%）: ${result3}円`); // 出力: 税込価格（8%）: 1620円


// 練習問題 3:
// 引数として文字列を受け取り、その文字列の末尾に「!!!」を追加して返す関数を作成し、
// 呼び出して結果をコンソールに表示してみましょう。

// アロー関数（省略記法）で作成
// 処理が1行でreturnするだけなので、{}とreturnを省略できます。
const addExclamation = (text) => text + '!!!';

const result4 = addExclamation("Hello, World");
console.log(result4); // 出力: Hello, World!!!


// 練習問題 4:
// 引数として`name`と`age`を受け取り、「私の名前は[name]で、年齢は[age]歳です。」という文字列を返す関数を作成し、
// 呼び出してみましょう。

// アロー関数（省略記法）で作成
// 関数名は「何をするか」が分かるように動詞から始めると良いです (例: create, get, set)
const createIntroduction = (name, age) => `私の名前は${name}で、年齢は${age}歳です。`;

const introduction = createIntroduction("鈴木一郎", 30);
console.log(introduction); // 出力: 私の名前は鈴木一郎で、年齢は30歳です。


// 練習問題 5:
// 関数内で宣言された変数が、関数外からアクセスできないことを`console.log()`を使って確認してみましょう。

function scopeTest() {
  // この変数は scopeTest 関数のスコープ内でのみ有効
  const innerVariable = "関数の中の変数";
  console.log(innerVariable); // 関数内からはアクセスできる
}

scopeTest(); // "関数の中の変数" と出力される

// ここからが確認の本番です
try {
  // 関数スコープの外から innerVariable にアクセスしようとするとエラーが発生します。
  console.log(innerVariable);
} catch (error) {
  // tryブロックで発生したエラーをcatchブロックで捕捉します。
  // これにより、プログラム全体が停止するのを防ぎます。
  console.log("--- エラーが発生しました ---");
  console.log("やはり、関数の外からはアクセスできませんでした。");
  // errorオブジェクトにはエラーに関する詳細な情報が含まれています。
  console.log("エラー内容:", error.message);
}

console.log("try...catchのおかげで、エラーの後もプログラムは続行されます。");
