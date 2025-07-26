## Day 1 練習問題の添削

`practice.js`のコード、拝見しました。素晴らしいスタートです！変数宣言 (`const`, `let`) やコンソールへの出力など、基本的な概念をしっかり理解されていますね。

以下に、各問題についてのフィードバックと、より良いコードにするためのヒントをまとめました。

---

### **問題1: 円周率の定義**

**あなたのコード:**
```javascript
const pi = 3.14;
console.log(pi);
```
**フィードバック:**
完璧です！`const`を使って再代入できない定数を定義できています。

---

### **問題2: 名前の再代入**

**あなたのコード:**
```javascript
let name = 'goregore';
name = 'goremusu';
console.log(name);
```
**フィードバック:**
こちらも素晴らしいです！`let`で変数を定義し、正しく再代入できています。
問題の意図をより正確に反映するには、最初の名前を一度表示してから、再代入後に再度表示すると、値の変化がより分かりやすくなります。

```javascript
let name = 'goregore';
console.log(name); // 最初の名前を表示
name = 'goremusu';
console.log(name); // 再代入後の名前を表示
```

---

### **問題3: 算術演算**

**あなたのコード:**
```javascript
const right = 10, left = 3;
let answer = right +left;
console.log('答え:',answer);
```
**フィードバック:**
足し算は正しくできています！ただ、問題では「加算、減算、乗算、除算、剰余」の**すべて**の結果を表示することが求められていました。以下のように、すべての計算結果を表示すると満点です。

```javascript
const right = 10, left = 3;
console.log('加算:', right + left);
console.log('減算:', right - left);
console.log('乗算:', right * left);
console.log('除算:', right / left);
console.log('剰余:', right % left);
```
このように、都度計算して表示することもできます。

---

### **問題4: 年齢判定**

**あなたのコード:**
```javascript
const myage=25;
if (myage>=20){
    console.log('I am',name,'. I am',myage,'years old')
}
else{
    console.log('I am ',name,'. I am young')
}
```
**フィードバック:**
`if...else`文を使った条件分岐、素晴らしいです！これは次のステップ（Day 2）で学ぶ内容を先取りできていて、とても良いですね。

ただ、この問題では「判定結果（`true` or `false`）をコンソールに表示」することが求められていました。JavaScriptでは、比較演算 (`myage >= 20`) 自体が`true`か`false`の値を返すので、それを直接`console.log`で表示するのが最もシンプルな解答になります。

```javascript
const myage = 25;
console.log(myage >= 20); // これで `true` が表示されます
```

---

### **問題5: 文字列の連結**

**あなたのコード:**
```javascript
const firstname = 'gore', lastname = 'musu1';
name = firstname + lastname; 
console.log('I am',name,'. I am',myage,'years old')
```
**フィードバック:**
姓と名を`+`演算子で連結できていますね。正解です！

問題で求められていた「私の名前は〇〇です。」という形式で表示すると、さらに良くなります。
また、JavaScriptには**テンプレートリテラル**という、文字列の中に変数を埋め込むための便利な書き方があります。今後のためにぜひ覚えてみてください。

```javascript
const firstName = 'gore';
const lastName = 'musu1';
const fullName = firstName + lastName;

// テンプレートリテラルを使った書き方
console.log(`私の名前は${fullName}です。`);
```
` `` ` (バッククォート)で囲み、`${}`の中に変数を書くことで、より直感的に文字列を組み立てることができます。

---

### **まとめ**

全体的に非常によくできています。特に、Day2で学ぶ`if`文をすでに使えている点には驚きました。この調子で進めれば、すぐに上達します。

次のステップに進む前に、`practice_solution.js`ファイルに模範解答を記載しましたので、ぜひ見比べてみてください。
