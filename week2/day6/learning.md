## Day 6: DOMの基本と要素の選択

### 学習内容

1.  **DOM (Document Object Model) とは何か**
    *   DOMは、HTMLやXMLドキュメントのプログラミングインターフェースです。
    *   Webページをツリー構造のオブジェクトとして表現し、JavaScriptからその構造、スタイル、コンテンツにアクセスし、変更することを可能にします。
    *   ブラウザがHTMLを読み込むと、その内容を解析してDOMツリーを構築します。

2.  **HTML要素の選択**
    JavaScriptからHTML要素を操作するためには、まずその要素を選択（取得）する必要があります。
    *   **`document.getElementById()`:** 指定された`id`属性を持つ要素を1つ取得します。`id`はHTML内で一意であるべきです。
        ```javascript
        const myElement = document.getElementById('myId');
        ```
    *   **`document.querySelector()`:** 指定されたCSSセレクタに一致する最初の要素を1つ取得します。
        ```javascript
        const firstParagraph = document.querySelector('p'); // 最初の<p>タグ
        const myClassElement = document.querySelector('.myClass'); // クラスがmyClassの最初の要素
        ```
    *   **`document.querySelectorAll()`:** 指定されたCSSセレクタに一致するすべての要素をNodeList (配列のようなオブジェクト) として取得します。
        ```javascript
        const allParagraphs = document.querySelectorAll('p'); // すべての<p>タグ
        const allClassElements = document.querySelectorAll('.myClass'); // クラスがmyClassのすべての要素
        ```

3.  **HTMLファイルとJavaScriptファイルの連携**
    *   JavaScriptコードをHTMLファイルに読み込む方法はいくつかあります。
    *   **`<script>`タグ:**
        *   HTMLファイル内に直接JavaScriptコードを記述する場合。
            ```html
            <script>
                console.log("Hello from inline script!");
            </script>
            ```
        *   外部のJavaScriptファイルを読み込む場合。`src`属性にファイルパスを指定します。
            ```html
            <script src="./practice.js"></script>
            ```
    *   **`<script>`タグの配置場所:**
        *   通常、外部JavaScriptファイルはHTMLの`</body>`タグの直前に配置することが推奨されます。これは、HTMLの解析とDOMの構築が完了してからJavaScriptが実行されるようにするためです。これにより、JavaScriptがHTML要素にアクセスしようとしたときに、まだ要素が存在しないというエラーを防ぐことができます。

### 練習問題

`index.html`と`practice.js`ファイルを開き、以下の問題に取り組んでください。

1.  `index.html`に`id="main-title"`を持つ`<h1>`タグと、`class="paragraph"`を持つ`<p>`タグを3つ作成してください。
2.  `practice.js`で、`id="main-title"`を持つ要素を`getElementById`で取得し、コンソールに出力してみましょう。
3.  `class="paragraph"`を持つ最初の要素を`querySelector`で取得し、コンソールに出力してみましょう。
4.  `class="paragraph"`を持つすべての要素を`querySelectorAll`で取得し、コンソールに出力してみましょう。取得したNodeListの`length`プロパティも表示してみましょう。
5.  `practice.js`が`index.html`から正しく読み込まれていることを確認するため、`practice.js`の先頭に`console.log("JavaScript is loaded!");`を追加し、ブラウザのコンソールで確認してみましょう。
