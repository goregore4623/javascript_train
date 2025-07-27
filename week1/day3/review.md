## Day 3 課題レビュー

Day3の課題、お疲れ様でした！
関数宣言、関数式、アロー関数と、3つの書き方をすべて使いこなせていて素晴らしいです。引数や戻り値の概念もしっかり理解されていますね。

今回も、より実践的なコードに近づけるためのポイントをいくつかレビューします。

---

### 練習問題 1: 合計を返す関数

```javascript
// Your Code
const x = 1,
  y = 2;
let sum;
function returnSum(x, y) {
  return x + y;
}
sum = returnSum(x, y);
console.log(`合計値: ${sum}`);
```

**レビュー:**
*   **完璧です！** 関数の定義、呼び出し、戻り値の受け取り、すべて正しくできています。
*   **命名規則:** 関数名 `returnSum` は「合計を返す」という動詞から始まっており、何をする関数か分かりやすくて良いです。一般的には `calculateSum` (合計を計算する) や `getSum` (合計を取得する) のような名前もよく使われます。
*   **改善案:** グローバルに変数を宣言するのではなく、関数を呼び出す際に直接値を渡す方が、関数が独立して再利用しやすくなります。

```javascript
// よりシンプルな書き方の例
function calculateSum(num1, num2) {
  return num1 + num2;
}
const result = calculateSum(5, 10); // 直接値を渡す
console.log(`合計値: ${result}`);
```

---

### 練習問題 2: 税込価格を計算する関数

```javascript
// Your Code
const nonTaxPrice = 100;
const taxRate = 0.1;

const includeTaxPrice = function (nonTaxPrice, taxRate = 0.1) {
  return Math.round(nonTaxPrice * (1 + taxRate));
};
console.log(`税込金額: ${includeTaxPrice(nonTaxPrice, taxRate)}`);
```

**レビュー:**
*   **OK:** 関数式を正しく使えています。引数のデフォルト値 (`taxRate = 0.1`) を設定できている点も素晴らしいです！
*   **命名規則:** 変数名 `nonTaxPrice` (税抜き価格) と関数名 `includeTaxPrice` (税込価格) は、どちらもキャメルケースで分かりやすいです。
*   **注意点:** 関数の引数名 (`nonTaxPrice`) と、グローバルスコープで宣言した変数名 (`nonTaxPrice`) が同じになっています。JavaScriptではスコープが異なるため問題なく動作しますが、意図しない挙動を避けるため、引数名はより汎用的な名前（例: `price`）にするのが一般的です。これにより、関数が特定の外部変数に依存しているという誤解を減らせます。

---

### 練習問題 3 & 4: 文字列を操作する関数

```javascript
// Your Code (問題3)
const message = "Hello World";
const addExclamation = (message) => {
  return message + "!!!";
};
console.log(addExclamation(message));

// Your Code (問題4)
const name = "山田太郎",
  age = 20;
const introduction = (name, age) => {
  return `私の名前は${name}で、年齢は${age}歳です。`;
};
console.log(introduction(name, age));
```

**レビュー:**
*   **完璧です！** アロー関数を正しく使えています。テンプレートリテラルも活用できており、非常に読みやすいコードです。
*   **改善案 (省略記法):** アロー関数では、処理が1行で`return`するだけの場合、`{}` と `return` を省略できます。これはモダンなJavaScriptで頻繁に使われる書き方なので、ぜひ覚えてみてください。

```javascript
// 問題3の省略記法
const addExclamation = (message) => message + '!!!';

// 問題4の省略記法
const createIntroduction = (name, age) => `私の名前は${name}で、年齢は${age}歳です。`;
```
*   **命名規則:** 問題4の関数名を `introduction` (自己紹介) から `createIntroduction` (自己紹介文を作成する) のように動詞から始めると、この関数が「文字列を生成する」ものであることがより明確になります。

---

### 練習問題 5: スコープの確認

```javascript
// Your Code
const test = "アクセス確認";
const accessCheck = (test) => {
  let nonAccess = "access deny";
  return test + nonAccess;
};

console.log(nonAccess); //アクセスできないことを確認
```

**レビュー:**
*   **OK:** 素晴らしい試みです！狙い通り、`console.log(nonAccess)` の行で `ReferenceError: nonAccess is not defined` というエラーが発生し、関数スコープ（正確にはブロックスコープ）が機能していることを確認できたはずです。
*   **改善案:** このコードはエラーで停止してしまうため、他の問題のコードも実行されなくなってしまいます。コメントアウトするか、`try...catch`構文を使ってエラーを捕捉すると、プログラムを停止させずにスコープの確認ができます。

```javascript
// try...catch を使った例
function scopeTest() {
  const innerVar = "これは関数の中の変数です";
  console.log(innerVar); // これはOK
}

scopeTest();

try {
  console.log(innerVar); // ここでエラーが発生する
} catch (error) {
  console.error("案の定、関数スコープの外からはアクセスできませんでした！");
  console.error(error); // エラーオブジェクトの詳細を表示
}
```

---

### まとめ

Day3の課題は、JavaScriptの非常に重要な「関数」の概念をしっかり掴めていることがわかる素晴らしい内容でした。特に、3種類の書き方をすべて試している点が意欲的で良いですね。

今回のレビューで触れた**「引数名とグローバル変数名の重複を避ける」「アロー関数の省略記法」「エラーハンドリング」**といった点は、よりプロフェッショナルなコードを書くための次のステップです。ぜひ意識してみてください。
