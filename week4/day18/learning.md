## Day 18: ポートフォリオサイトの設計とHTML/CSSの準備

### 学習内容

この日は、ポートフォリオサイトの全体的な構造を考え、HTMLとCSSを使って基本的なレイアウトとデザインを準備します。まだJavaScriptによる動的な要素は含めず、静的なWebページとして作成します。

1.  **ポートフォリオサイトの構成要素を考える**
    一般的なポートフォリオサイトには、以下のセクションが含まれます。
    *   **ヘッダー (Header):** ナビゲーション（自己紹介、スキル、プロジェクト、連絡先などへのリンク）、ロゴ、名前。
    *   **ヒーローセクション (Hero Section):** サイト訪問者が最初に目にする部分。自己紹介、キャッチフレーズ、写真など。
    *   **自己紹介 (About Me):** 経歴、スキル、興味、個性などを詳しく説明。
    *   **スキル (Skills):** 習得している技術やツールをリストアップ。
    *   **プロジェクト (Projects):** これまでの成果物を紹介。各プロジェクトのタイトル、説明、画像、リンクなど。
    *   **連絡先 (Contact):** メールアドレス、SNSリンク、お問い合わせフォームなど。
    *   **フッター (Footer):** 著作権表示、プライバシーポリシーへのリンクなど。

2.  **シンプルなHTML構造の作成**
    *   上記の構成要素を基に、セマンティックなHTML5タグ（`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`など）を使用して基本的な構造を構築します。
    *   各セクションには、CSSでスタイリングしやすいように適切な`id`や`class`を付与します。
    ```html
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Portfolio</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav>
                <!-- ナビゲーションリンク -->
            </nav>
        </header>
        <main>
            <section id="hero">
                <!-- ヒーローセクションの内容 -->
            </section>
            <section id="about">
                <!-- 自己紹介の内容 -->
            </section>
            <section id="skills">
                <!-- スキルの内容 -->
            </section>
            <section id="projects">
                <!-- プロジェクト一覧のコンテナ -->
            </section>
            <section id="contact">
                <!-- 連絡先の内容 -->
            </section>
        </main>
        <footer>
            <!-- フッターの内容 -->
        </footer>
    </body>
    </html>
    ```

3.  **基本的なCSSでのスタイリング (レイアウト, フォント, 色など)**
    *   `style.css`ファイルを作成し、HTML要素に基本的なスタイルを適用します。
    *   **リセットCSS:** ブラウザ間の表示の差異をなくすために、簡単なリセットCSSを適用すると良いでしょう。
    *   **フォント:** `font-family`, `font-size`, `line-height`など。
    *   **色:** `color`, `background-color`など。
    *   **レイアウト:** `display: flex`や`grid`を使った基本的なセクションの配置、`margin`, `padding`など。
    *   **レスポンシブ対応:** 簡単なメディアクエリ (`@media`) を使って、モバイルフレンドリーなデザインの基礎を考えます。

### 練習問題

`index.html`と`style.css`ファイルを開き、以下の問題に取り組んでください。

1.  `index.html`に、上記「ポートフォリオサイトの構成要素」を参考に、ヘッダー、ヒーローセクション、自己紹介、スキル、プロジェクト、連絡先、フッターの各セクションをセマンティックなHTMLタグで作成してください。
    *   各セクションには適切な`id`を付与してください (例: `id="hero"`, `id="about"`, `id="skills"`, `id="projects"`, `id="contact"`)。
    *   ナビゲーションには、各セクションへのアンカーリンク (`<a>`タグ) を含めてください。
2.  `style.css`に、以下の基本的なスタイルを適用してください。
    *   `body`に基本的なフォント (`font-family`), `line-height`, `margin`を設定。
    *   各セクション (`<section>`) に`padding`と`margin-bottom`を設定し、セクション間の余白を確保。
    *   ヘッダー (`<header>`) に`background-color`, `color`, `padding`を設定し、ナビゲーション (`<nav>`) をFlexboxで配置してリンクを横並びに。
    *   ヒーローセクション (`#hero`) に`text-align: center`, `padding`, `background-color`を設定。
    *   プロジェクトセクション (`#projects`) のタイトル (`<h2>`) を中央揃えに。
3.  (応用) モバイルデバイスでの表示を考慮し、簡単なメディアクエリを追加してみましょう。例えば、画面幅が小さい場合にナビゲーションの表示方法を変更したり、セクションの`padding`を調整したりしてみてください。
