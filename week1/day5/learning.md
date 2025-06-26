## Day 5: オブジェクトとJSON

### 学習内容

1.  **オブジェクトの作成 (プロパティと値)**
    *   **オブジェクト (Object):** キー (プロパティ名) と値のペアでデータを格納するデータ構造です。関連するデータをひとまとめにするのに使われます。
    *   波括弧 `{}` を使って作成します。
    ```javascript
    const person = {
        name: "山田太郎",
        age: 30,
        isStudent: false,
        hobbies: ["読書", "映画鑑賞"]
    };
    ```

2.  **プロパティへのアクセス (ドット記法, ブラケット記法)**
    *   **ドット記法 (Dot Notation):** 最も一般的なアクセス方法です。プロパティ名が有効なJavaScriptの識別子である場合に利用できます。
        ```javascript
        console.log(person.name); // "山田太郎"
        ```
    *   **ブラケット記法 (Bracket Notation):** プロパティ名が変数に含まれている場合や、プロパティ名にスペースや特殊文字が含まれる場合に使用します。
        ```javascript
        const key = "age";
        console.log(person[key]); // 30
        console.log(person["isStudent"]); // false
        ```

3.  **プロパティの追加・更新**
    *   新しいプロパティを追加したり、既存のプロパティの値を更新したりできます。
    ```javascript
    person.city = "東京"; // 新しいプロパティの追加
    person.age = 31; // 既存プロパティの更新
    ```

4.  **オブジェクトのメソッド**
    *   オブジェクトのプロパティの値として関数を定義することができます。これをメソッドと呼びます。
    ```javascript
    const calculator = {
        add: function(a, b) {
            return a + b;
        },
        subtract: (a, b) => a - b
    };
    console.log(calculator.add(5, 3)); // 8
    ```

5.  **JSON (JavaScript Object Notation) の基本**
    *   **JSON:** JavaScriptのオブジェクトの記法をベースにした、軽量なデータ交換フォーマットです。Web APIなどでデータの送受信によく使われます。
    *   キーは必ずダブルクォーテーション `""` で囲む必要があります。
    *   JavaScriptのオブジェクトと非常によく似ていますが、JSONはデータ形式であり、JavaScriptのコードではありません。
    *   **`JSON.stringify()`:** JavaScriptのオブジェクトをJSON形式の文字列に変換します。
    *   **`JSON.parse()`:** JSON形式の文字列をJavaScriptのオブジェクトに変換します。
    ```javascript
    const myObject = { name: "Alice", age: 25 };
    const jsonString = JSON.stringify(myObject);
    console.log(jsonString); // "{"name":"Alice","age":25}"

    const parsedObject = JSON.parse(jsonString);
    console.log(parsedObject.name); // "Alice"
    ```

### 練習問題

`practice.js`ファイルを開き、以下の問題に取り組んでください。

1.  あなた自身の情報（名前 `name`, 年齢 `age`, 居住地 `city`, 趣味 `hobbies` (配列)）を持つオブジェクト `myProfile` を作成し、コンソールに表示してみましょう。
2.  `myProfile` オブジェクトから `name` と `age` の値をそれぞれドット記法とブラケット記法で取得し、コンソールに表示してみましょう。
3.  `myProfile` オブジェクトに新しいプロパティ `email` (メールアドレス) を追加し、その値を設定してみましょう。その後、`myProfile` 全体をコンソールに表示してみましょう。
4.  `myProfile` オブジェクトの `age` の値を更新し、更新後の `age` をコンソールに表示してみましょう。
5.  `myProfile` オブジェクトをJSON形式の文字列に変換し、コンソールに表示してみましょう。
6.  上記で作成したJSON文字列をJavaScriptのオブジェクトに再度変換し、そのオブジェクトの `hobbies` プロパティをコンソールに表示してみましょう。
