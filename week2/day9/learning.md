## Day 9: フォームの操作と簡単なインタラクション

### 学習内容

1.  **フォーム要素の値の取得と設定**
    *   HTMLのフォーム要素（`<input>`, `<textarea>`, `<select>`など）からユーザーが入力した値を取得したり、JavaScriptから値を設定したりできます。
    *   **値の取得:** `value`プロパティを使用します。
        ```javascript
        const inputElement = document.getElementById('myInput');
        const inputValue = inputElement.value;
        console.log(inputValue);
        ```
    *   **値の設定:** `value`プロパティに新しい値を代入します。
        ```javascript
        inputElement.value = "新しい値";
        ```

2.  **フォームの送信イベント (`submit`) の阻止 (`event.preventDefault()`)**
    *   `<form>`要素には`submit`イベントがあります。通常、フォームが送信されるとページがリロードされます。
    *   JavaScriptでフォームの送信を制御したい場合、`event.preventDefault()`メソッドを使ってデフォルトの動作（ページのリロード）を阻止することができます。
        ```javascript
        const myForm = document.getElementById('myForm');
        myForm.addEventListener('submit', function(event) {
            event.preventDefault(); // デフォルトの送信動作を阻止
            console.log("フォームが送信されましたが、ページはリロードされません。");
            // ここでフォームのデータを処理する
        });
        ```

3.  **簡単なTODOリストアプリの作成 (追加・削除機能のみ)**
    *   これまでのDOM操作とイベント処理の知識を組み合わせて、簡単なTODOリストアプリを作成してみましょう。
    *   **基本的な流れ:**
        1.  入力フィールドと追加ボタンを用意する。
        2.  追加ボタンがクリックされたら、入力フィールドの値を取得する。
        3.  取得した値を元に新しいリストアイテム (例: `<li>`) を作成する。
        4.  作成したリストアイテムをTODOリストの`<ul>`要素に追加する。
        5.  入力フィールドをクリアする。
        6.  (応用) 各リストアイテムに削除ボタンを付け、クリックされたらそのアイテムを削除する。

### 練習問題

`index.html`と`practice.js`ファイルを開き、以下の問題に取り組んでください。

1.  `index.html`に、`id="todo-input"`を持つ`<input type="text">`要素、`id="add-button"`を持つ`<button>`要素、そして`id="todo-list"`を持つ空の`<ul>`要素を作成してください。
2.  `practice.js`で、`add-button`がクリックされたときに以下の処理を行うイベントリスナーを追加してください。
    *   `todo-input`の値を取得する。
    *   もし入力が空でなければ、新しい`<li>`要素を作成し、その`textContent`を入力値に設定する。
    *   作成した`<li>`要素を`todo-list` (`<ul>`) に追加する。
    *   `todo-input`の値を空にする。
3.  (応用) 追加された各`<li>`要素に、その項目を削除するためのボタン（例: `[x]`）を追加してみましょう。この削除ボタンがクリックされたら、対応する`<li>`要素がリストから削除されるように実装してください。
