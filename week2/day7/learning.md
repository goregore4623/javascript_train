## Day 7: DOM要素の操作

### 学習内容

1.  **要素のテキスト内容の変更 (`textContent`, `innerHTML`)**
    *   **`textContent`:** 要素内のテキストコンテンツを取得または設定します。HTMLタグはエスケープされます。
        ```javascript
        const element = document.getElementById('myElement');
        element.textContent = "新しいテキスト";
        console.log(element.textContent);
        ```
    *   **`innerHTML`:** 要素内のHTMLコンテンツを取得または設定します。HTMLタグもそのまま解釈されます。
        ```javascript
        const element = document.getElementById('myElement');
        element.innerHTML = "<strong>新しいテキスト</strong>";
        console.log(element.innerHTML);
        ```
        *   **注意:** `innerHTML`は、ユーザーからの入力をそのまま設定するとXSS (クロスサイトスクリプティング) 攻撃のリスクがあるため、信頼できないコンテンツには使用しないように注意が必要です。

2.  **要素の属性の変更 (`setAttribute`, `getAttribute`)**
    *   **`setAttribute(name, value)`:** 要素の属性の値を設定します。属性が存在しない場合は新しく作成されます。
        ```javascript
        const image = document.getElementById('myImage');
        image.setAttribute('src', 'new_image.jpg');
        image.setAttribute('alt', '新しい画像');
        ```
    *   **`getAttribute(name)`:** 要素の指定された属性の値を取得します。
        ```javascript
        console.log(image.getAttribute('src'));
        ```

3.  **要素のスタイルの変更 (`style`プロパティ)**
    *   JavaScriptから直接要素のCSSスタイルを変更できます。CSSのプロパティ名はキャメルケース (例: `background-color` -> `backgroundColor`) に変換して使用します。
        ```javascript
        const element = document.getElementById('myElement');
        element.style.color = 'red';
        element.style.backgroundColor = 'lightblue';
        element.style.fontSize = '20px';
        ```

4.  **クラスの操作 (`classList`)**
    *   要素のCSSクラスを追加、削除、切り替えるための便利なプロパティです。
    *   **`classList.add()`:** クラスを追加します。
    *   **`classList.remove()`:** クラスを削除します。
    *   **`classList.toggle()`:** クラスが存在すれば削除し、存在しなければ追加します。
    *   **`classList.contains()`:** クラスが存在するかどうかをチェックします。
        ```javascript
        const element = document.getElementById('myElement');
        element.classList.add('highlight');
        element.classList.remove('default');
        element.classList.toggle('active'); // activeクラスがあれば削除、なければ追加
        if (element.classList.contains('highlight')) {
            console.log("highlightクラスがあります");
        }
        ```

### 練習問題

`index.html`と`practice.js`ファイルを開き、以下の問題に取り組んでください。

1.  `index.html`に`id="message"`を持つ`<p>`タグと、`id="my-image"`を持つ`<img>`タグを作成してください。`<img>`タグには適当な`src`と`alt`属性を設定してください。
2.  `practice.js`で、`id="message"`の`<p>`タグのテキスト内容を「JavaScriptで変更されました！」に変更してみましょう。
3.  `id="my-image"`の`<img>`タグの`src`属性を別の画像URL（例: `https://via.placeholder.com/150`）に変更し、`alt`属性を「新しい画像」に変更してみましょう。
4.  `id="message"`の`<p>`タグの文字色を赤色に、背景色を薄い黄色に、フォントサイズを24pxに変更してみましょう。
5.  `id="message"`の`<p>`タグに`highlight`というクラスを追加し、`default-text`というクラスを削除してみましょう。その後、`highlight`クラスが追加されているかコンソールで確認してみましょう。
