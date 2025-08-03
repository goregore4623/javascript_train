## Day 7 課題レビュー

### 全体的な評価
完璧です！DOM要素のテキスト、属性、スタイル、クラスのすべてを正しく操作できています。JavaScriptを使ってWebページの見た目を自由自在に変更する、というWeb開発の楽しさの中核部分を体験できたのではないでしょうか。

### 良かった点
*   すべての問題の要件を正確に満たしています。
*   特に問題4と問題5で、同じ要素 (`id="message"`) を取得するために、一度取得した変数 `elementPassage` を再利用できており、効率的で良いコードです。
*   問題5で、クラス変更の前後の`classList`をコンソールに出力して、変更が正しく行われたかを確認する手順を踏んでいる点が素晴らしいです。これはデバッグの基本であり、非常に重要な習慣です。

### 補足: `style`プロパティと`classList`の使い分け

今回の課題では、`style`プロパティを使って直接CSSを変更しました。これは手軽で便利な方法ですが、実際の開発では、**CSSの変更は`classList`を使ってクラスを付け外しする方法がより推奨されます。**

**理由:**
1.  **関心の分離:** HTMLは構造、CSSは見た目、JavaScriptは動作、という役割分担が明確になります。JavaScriptにCSSのコード（`color: "red"`など）が混ざるのを防ぎ、コードの見通しが良くなります。
2.  **再利用性:** CSSクラスは、他の要素にも簡単に再利用できます。
3.  **メンテナンス性:** デザインの変更が必要になった場合、CSSファイルだけを修正すればよく、JavaScriptのコードを触る必要がありません。

**例:**
```javascript
// styleプロパティを使う方法
element.style.color = "red";
element.style.backgroundColor = "lightyellow";
element.style.fontSize = "24px";
```

```css
/* classListを使う方法（CSS側） */
.special-style {
  color: red;
  background-color: lightyellow;
  font-size: 24px;
}
```

```javascript
// classListを使う方法（JS側）
element.classList.add('special-style');
```

このように、`classList`を使うと、JavaScriptは「どのクラスを付けるか」だけを管理すればよくなり、コードがスッキリします。今後の開発では、この方法を意識してみてください。

--- 

今回の課題は完璧でした。この調子で、次はユーザーのアクションをきっかけに処理を実行する「イベント処理」に進んでいきましょう！
