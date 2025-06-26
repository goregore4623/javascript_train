## Day 10: 非同期処理の基本

### 学習内容

1.  **非同期処理とは何か (同期処理との違い)**
    *   **同期処理:** コードが上から順に実行され、ある処理が完了するまで次の処理は開始されません。時間がかかる処理があると、その間プログラム全体が停止してしまいます (ブロッキング)。
    *   **非同期処理:** 時間のかかる処理（例: ネットワーク通信、ファイルの読み書き）をバックグラウンドで実行し、その処理が完了するのを待たずに次の処理に進みます。処理が完了したら、コールバック関数などで結果を通知します。これにより、プログラムが停止することなく、ユーザーインターフェースがフリーズするのを防ぐことができます (ノンブロッキング)。

2.  **`setTimeout`, `setInterval`**
    *   **`setTimeout(関数, 遅延時間)`:** 指定した遅延時間（ミリ秒）の後に、一度だけ関数を実行します。
        ```javascript
        console.log("開始");
        setTimeout(() => {
            console.log("2秒後に実行されました");
        }, 2000); // 2000ミリ秒 = 2秒
        console.log("終了");
        // 出力順: 開始 -> 終了 -> 2秒後に実行されました
        ```
    *   **`setInterval(関数, 間隔時間)`:** 指定した間隔時間（ミリ秒）ごとに、繰り返し関数を実行します。
        ```javascript
        let count = 0;
        const intervalId = setInterval(() => {
            console.log("Count: " + count++);
            if (count === 5) {
                clearInterval(intervalId); // 繰り返しを停止
            }
        }, 1000); // 1秒ごとに実行
        ```
        *   `clearInterval()`を使って繰り返しを停止できます。

3.  **Promiseの基本 (Pending, Fulfilled, Rejected)**
    *   Promiseは、非同期処理の最終的な完了（または失敗）とその結果の値を表すオブジェクトです。
    *   非同期処理の複雑なコールバックのネスト（コールバック地獄）を避けるために導入されました。
    *   **Promiseの状態:**
        *   **Pending (保留):** 初期状態。非同期処理がまだ完了していない。
        *   **Fulfilled (成功):** 非同期処理が成功し、結果が利用可能になった。
        *   **Rejected (失敗):** 非同期処理が失敗し、エラーが発生した。
    *   **`new Promise((resolve, reject) => { ... })`:** Promiseオブジェクトを作成します。
        *   `resolve`: 処理が成功した場合に呼び出す関数。
        *   `reject`: 処理が失敗した場合に呼び出す関数。
    *   **`then()`:** Promiseが成功 (Fulfilled) したときに実行される処理を登録します。
    *   **`catch()`:** Promiseが失敗 (Rejected) したときに実行される処理を登録します。
    *   **`finally()`:** Promiseが成功または失敗のどちらであっても、最終的に実行される処理を登録します。
        ```javascript
        const myPromise = new Promise((resolve, reject) => {
            const success = true;
            if (success) {
                setTimeout(() => resolve("データ取得成功！"), 1000);
            } else {
                setTimeout(() => reject("データ取得失敗..."), 1000);
            }
        });

        myPromise
            .then(message => {
                console.log(message); // "データ取得成功！"
            })
            .catch(error => {
                console.error(error); // "データ取得失敗..."
            })
            .finally(() => {
                console.log("処理が完了しました。");
            });
        ```

4.  **`fetch` APIの基本 (外部APIからのデータ取得)**
    *   `fetch` APIは、ネットワークリソース（通常はAPIエンドポイント）を取得するためのモダンなインターフェースです。Promiseベースで動作します。
    *   デフォルトではGETリクエストを送信します。
    ```javascript
    fetch('https://jsonplaceholder.typicode.com/todos/1') // ダミーAPIのURL
        .then(response => response.json()) // レスポンスをJSONとして解析
        .then(data => console.log(data)) // 解析されたデータをコンソールに出力
        .catch(error => console.error('Fetch error:', error));
    ```

### 練習問題

`practice.js`ファイルを開き、以下の問題に取り組んでください。

1.  `setTimeout`を使って、5秒後に「Hello after 5 seconds!」というメッセージをコンソールに表示してみましょう。
2.  `setInterval`を使って、1秒ごとに「Tick!」と表示し、5回表示されたら停止するプログラムを書いてみましょう。
3.  Promiseを作成し、2秒後に成功 (`resolve`) して「Promise resolved!」というメッセージを返すようにしてみましょう。`then()`を使ってそのメッセージを受け取り、コンソールに表示してください。
4.  Promiseを作成し、1秒後に失敗 (`reject`) して「Promise rejected!」というエラーメッセージを返すようにしてみましょう。`catch()`を使ってそのエラーメッセージを受け取り、コンソールに表示してください。
5.  `fetch` APIを使って、以下のダミーAPIからユーザーデータを取得し、コンソールに表示してみましょう。
    `https://jsonplaceholder.typicode.com/users/1`
    取得したデータの中から、ユーザーの名前 (`name`) とメールアドレス (`email`) だけを抽出して表示してください。
