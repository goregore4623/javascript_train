// 練習問題 1:
// ある変数（年齢）が20以上なら"成人です"、19以下0以上なら"未成年です"、それ以外なら"無効な値です"と表示する`if`文を書いてみましょう。
// Information
const age = 20;
if (age >= 20) {
  console.log("成人です");
} else if (age <= 19 && age >= 0) {
  console.log("未成年です");
} else {
  console.log("無効な値です");
}

// 練習問題 2:
// 信号の色を保持する変数（例: "red", "yellow", "green"）を用意し、
// その色に応じて"止まれ", "注意", "進め"と表示する`switch`文を書いてみましょう。
const signal_color = "red";
switch (SingleColor) {
  case "red":
    console.log("止まれ");
    break;
  case "yellow":
    console.log("注意");
    break;
  case "green":
    console.log("進め");
    break;
}

// 練習問題 3:
// `for`文を使って、1から100までの数値のうち、3の倍数の時だけ「3の倍数です！」と表示し、
// それ以外の数値はそのまま表示してみましょう。
let num;
for (num = 1; num <= 100; num++) {
  if (num % 3 == 0) {
    console.log(`数値: ${num}は3の倍数です!`);
  } else {
    console.log(`数値: ${num}`);
  }
}

// 練習問題 4:
// `for`文を使い、1から100まで足した合計値を計算して表示してみましょう。
let sum = 0;
for (num = 1; num <= 100; num++) {
  sum += num;
}
console.log(`合計値: ${sum}`);

// 練習問題 5:
// `while`文を使って、変数`count`が5になるまで「Count: [countの値]」と表示し続けるプログラムを書いてみましょう。
let count = 0;
while (count < 5) {
  count += 1;
  console.log(`Count: ${count}`);
}
