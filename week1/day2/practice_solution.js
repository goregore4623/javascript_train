// 模範解答 (practice_solution.js)

// 練習問題 1:
// ある変数（年齢）が20以上なら"成人です"、19以下0以上なら"未成年です"、それ以外なら"無効な値です"と表示する`if`文を書いてみましょう。
const age = 20;

if (age >= 20) {
  console.log("成人です");
} else if (age >= 0 && age <= 19) { // `&&` を使って「0歳以上」かつ「19歳以下」という条件を表現します。
  console.log("未成年です");
} else {
  console.log("無効な値です");
}


// 練習問題 2:
// 信号の色を保持する変数（例: "red", "yellow", "green"）を用意し、
// その色に応じて"止まれ", "注意", "進め"と表示する`switch`文を書いてみましょう。

// JavaScriptでは変数名にキャメルケース(camelCase)を使うのが一般的です。
const signalColor = "red";

switch (signalColor) {
  case "red":
    console.log("止まれ");
    break; // breakを入れないと、後続のcaseも実行されてしまいます。
  case "yellow":
    console.log("注意");
    break;
  case "green":
    console.log("進め");
    break;
  default: // どのcaseにも一致しない場合の処理も書いておくと、より丁寧です。
    console.log("信号の色ではありません");
    break;
}


// 練習問題 3:
// `for`文を使って、1から100までの数値のうち、3の倍数の時だけ「3の倍数です！」と表示し、
// それ以外の数値はそのまま表示してみましょう。

// ループカウンターの変数は `let` で宣言し、スコープをループ内に限定するのが安全です。
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) { // 比較は `===` を使うのが推奨されます。
    console.log(`${i}は3の倍数です！`);
  } else {
    console.log(i);
  }
}


// 練習問題 4:
// `for`文を使い、1から100まで足した合計値を計算して表示してみましょう。
let totalSum = 0;
// こちらもループカウンターは `let` で宣言します。
for (let i = 1; i <= 100; i++) {
  totalSum += i; // `totalSum = totalSum + i` と同じ意味です。
}
console.log(`1から100までの合計値: ${totalSum}`);


// 練習問題 5:
// `while`文を使って、変数`count`が5になるまで「Count: [countの値]」と表示し続けるプログラムを書いてみましょう。
let count = 0;
while (count < 5) {
  // `count++` は `count = count + 1` や `count += 1` と同じ意味で、値を1増やします。
  count++;
  console.log(`Count: ${count}`);
}
// このコードだと1から5が表示されます。
// もし0から4を表示したい場合は、console.logの前にインクリメントします。
/*
let count = 0;
while (count < 5) {
  console.log(`Count: ${count}`);
  count++;
}
*/
