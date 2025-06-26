## Day 11: Node.jsの導入とnpm

### 学習内容

1.  **Node.jsとは何か、なぜバックエンドでJavaScriptを使うのか**
    *   **Node.js:** Google ChromeのJavaScriptエンジンV8をベースに構築されたJavaScriptの実行環境です。これにより、JavaScriptをブラウザの外（サーバーサイドやデスクトップアプリケーションなど）で実行できるようになりました。
    *   **なぜバックエンドでJavaScriptを使うのか:**
        *   **フルスタック開発:** フロントエンドとバックエンドで同じJavaScript言語を使用できるため、開発効率が向上し、学習コストも削減できます。
        *   **非同期I/O:** Node.jsはイベント駆動型で非同期I/Oに優れており、リアルタイムアプリケーションや高負荷なWebサービスに適しています。
        *   **豊富なエコシステム:** npm (Node Package Manager) を通じて、膨大な数のライブラリやフレームワークが利用可能です。

2.  **Node.jsのインストールと実行**
    *   **インストール:** Node.jsの公式サイト (nodejs.org) からインストーラーをダウンロードして実行するのが最も簡単です。または、バージョン管理ツール (例: `nvm` for Node Version Manager) を使用することも推奨されます。
    *   インストール後、ターミナル（コマンドプロンプト）で以下のコマンドを実行して、正しくインストールされたか確認できます。
        ```bash
        node -v
        npm -v
        ```
    *   **実行:** `.js`ファイルを`node`コマンドで実行します。
        ```bash
        node your_script.js
        ```

3.  **npm (Node Package Manager) の基本**
    *   **npm:** Node.jsのパッケージマネージャーです。世界中の開発者が作成したライブラリやツール（パッケージ）を簡単にインストール、管理、共有できます。
    *   **`npm init`:** 新しいNode.jsプロジェクトを開始する際に、`package.json`ファイルを作成します。このファイルには、プロジェクトのメタデータ（名前、バージョン、説明など）や依存関係が記述されます。
        ```bash
        npm init -y # -y オプションで質問にすべてyesと答える
        ```
    *   **`npm install <package-name>`:** 指定したパッケージをプロジェクトにインストールします。インストールされたパッケージは`node_modules`ディレクトリに保存され、`package.json`の`dependencies`に追加されます。
        ```bash
        npm install express
        ```
    *   **`npm install`:** `package.json`に記述されているすべての依存関係をインストールします。
    *   **`npm uninstall <package-name>`:** パッケージをアンインストールします。

4.  **モジュールのインポート/エクスポート (`require`/`module.exports`)**
    *   Node.jsでは、コードを複数のファイルに分割し、必要な部分だけを読み込む「モジュール」という仕組みがあります。
    *   **エクスポート (公開):** 他のファイルから利用したい変数、関数、オブジェクトなどを`module.exports`を使って公開します。
        ```javascript
        // myModule.js
        const greeting = "Hello";
        function sayHello(name) {
            return `${greeting}, ${name}!`
        }
        module.exports = {
            sayHello: sayHello,
            greeting: greeting
        };
        ```
    *   **インポート (読み込み):** 他のファイルで公開されたモジュールを`require()`を使って読み込みます。
        ```javascript
        // app.js
        const myModule = require('./myModule');
        console.log(myModule.sayHello("World")); // Hello, World!
        console.log(myModule.greeting); // Hello
        ```

### 練習問題

`practice.js`ファイルを開き、以下の問題に取り組んでください。

1.  Node.jsがインストールされているか確認し、バージョンをコンソールに表示してみましょう (`node -v`)。
2.  この`day11`ディレクトリ内で`npm init -y`を実行し、`package.json`ファイルが作成されることを確認してみましょう。
3.  `utils.js`という新しいファイルを作成し、その中に2つの数値を引数として受け取り、その合計を返す関数`add`を定義し、`module.exports`を使ってエクスポートしてください。
4.  `practice.js`で`utils.js`を`require`で読み込み、`add`関数を使って2つの数値を足し算し、結果をコンソールに表示してみましょう。
5.  `npm install lodash`を実行して、`lodash`という人気のあるユーティリティライブラリをインストールしてみましょう。インストール後、`package.json`の`dependencies`に`lodash`が追加されていることを確認してください。
