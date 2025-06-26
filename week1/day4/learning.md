## Day 4: 配列

### 学習内容

1.  **配列の作成と要素へのアクセス (インデックス)**
    *   **配列 (Array):** 複数の値を順序付けて格納できるデータ構造です。リストのようなものです。
    *   配列の要素には、0から始まるインデックス (添字) を使ってアクセスします。
    ```javascript
    const fruits = ["apple", "banana", "cherry"];
    console.log(fruits[0]); // "apple"
    console.log(fruits[1]); // "banana"
    ```
    *   `length`プロパティで配列の要素数を取得できます。
    ```javascript
    console.log(fruits.length); // 3
    ```

2.  **配列の基本的な操作**
    *   **`push()`:** 配列の末尾に要素を追加します。
        ```javascript
        fruits.push("grape"); // ["apple", "banana", "cherry", "grape"]
        ```
    *   **`pop()`:** 配列の末尾から要素を削除し、その要素を返します。
        ```javascript
        const lastFruit = fruits.pop(); // "grape" (fruitsは ["apple", "banana", "cherry"] になる)
        ```
    *   **`shift()`:** 配列の先頭から要素を削除し、その要素を返します。
        ```javascript
        const firstFruit = fruits.shift(); // "apple" (fruitsは ["banana", "cherry"] になる)
        ```
    *   **`unshift()`:** 配列の先頭に要素を追加します。
        ```javascript
        fruits.unshift("orange"); // ["orange", "banana", "cherry"]
        ```
    *   **`splice()`:** 配列の任意の位置から要素を追加、削除、置換します。
        ```javascript
        // インデックス1から1つの要素を削除し、"kiwi"を追加
        fruits.splice(1, 1, "kiwi"); // ["apple", "kiwi", "cherry"]
        ```
    *   **`slice()`:** 配列の一部を新しい配列として返します。元の配列は変更されません。
        ```javascript
        const citrus = fruits.slice(0, 2); // ["apple", "banana"]
        ```

3.  **`for`ループを使った配列の反復処理**
    *   配列のすべての要素にアクセスするために、`for`ループがよく使われます。
    ```javascript
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    ```
    *   **`for...of`文 (ES6):** 配列の要素を直接取り出して反復処理を行う、より簡潔な方法です。
    ```javascript
    for (const fruit of fruits) {
        console.log(fruit);
    }
    ```

### 練習問題

`practice.js`ファイルを開き、以下の問題に取り組んでください。

1.  好きな食べ物の名前を5つ入れた配列 `myFavoriteFoods` を作成し、コンソールに表示してみましょう。
2.  `myFavoriteFoods` の最初の要素と最後の要素をそれぞれコンソールに表示してみましょう。
3.  `myFavoriteFoods` の末尾に新しい食べ物を1つ追加し、再度配列全体をコンソールに表示してみましょう。
4.  `myFavoriteFoods` の先頭の食べ物を削除し、削除後の配列をコンソールに表示してみましょう。
5.  `for`ループを使って `myFavoriteFoods` のすべての要素を一つずつコンソールに表示してみましょう。
6.  `for...of`ループを使って `myFavoriteFoods` のすべての要素を一つずつコンソールに表示してみましょう。
