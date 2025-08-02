## Day 4 課題レビュー

Day4の課題、お疲れ様でした！
配列の作成、要素へのアクセス、基本的なメソッド（`push`, `shift`）の使い方がしっかり身についていますね。`for`ループと`for...of`ループの違いも理解されており、素晴らしいです。

今回も、より実践的で堅牢なコードにするためのポイントをいくつかレビューします。

---

### 練習問題 2: 最後の要素へのアクセス

```javascript
// Your Code
console.log(myFavoriteFoods[0], myFavoriteFoods[4]);
```

**レビュー:**
*   **OK:** 最初の要素 `myFavoriteFoods[0]` と最後の要素 `myFavoriteFoods[4]` を正しく取得できています。
*   **改善案:** 最後の要素を取得する際に、`myFavoriteFoods[4]` のように直接インデックスを指定すると、配列の要素数が変わった場合にコードを修正する必要があります（ハードコーディング）。
*   配列の長さ (`length`) を使うと、要素数に依存しない柔軟なコードになります。配列の最後のインデックスは常に `配列.length - 1` になります。これを使うのが一般的です。

```javascript
// 改善案
console.log(myFavoriteFoods[myFavoriteFoods.length - 1]);
```
*   こうすることで、後から配列の要素数が変わっても、常に最後の要素を正しく取得できます。

---

### 練習問題 5: `for`ループ

```javascript
// Your Code
for (i = 0; i < myFavoriteFoods.length; i++) {
  console.log(myFavoriteFoods[i]);
}
```

**レビュー:**
*   **OK:** `for`ループのロジックは完璧です。
*   **改善案:** Day2のレビューでも触れましたが、ループカウンター変数 `i` を `let` で宣言するのが推奨されます。`let` を使わないとグローバル変数になってしまい、意図しないバグの原因になる可能性があります。

```javascript
// 改善案
for (let i = 0; i < myFavoriteFoods.length; i++) {
  console.log(myFavoriteFoods[i]);
}
```
*   これにより、変数 `i` のスコープが `for` ループ内に限定され、より安全なコードになります。

---

### 練習問題 6: `for...of`ループ

```javascript
// Your Code
for (const myFavoriteFood of myFavoriteFoods) {
  console.log(myFavoriteFood);
}
```

**レビュー:**
*   **完璧です！** `for...of` の構文を正しく理解し、使えています。
*   ループ内で要素の値を変更しない場合、`const` を使って変数を宣言するのは非常に良い習慣です。これにより、意図しない再代入を防ぐことができます。

---

### まとめ

配列の基本的な操作はほぼマスターできていますね。素晴らしいです！

今回のレビューで特に重要なのは、以下の2点です。

1.  **最後の要素へのアクセス:** `array.length - 1` を使うことで、配列の要素数に依存しない柔軟なコードを書くことができます。
2.  **ループ変数の宣言:** `for`ループでは `let` を使ってループカウンターを宣言する癖をつけましょう。

これらの点を意識すると、よりバグが少なく、メンテナンスしやすいコードを書けるようになります。
この調子でDay5も頑張ってください！
