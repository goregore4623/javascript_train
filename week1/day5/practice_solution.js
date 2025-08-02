// 模範解答 (practice_solution.js)

// 練習問題 1:
// あなた自身の情報（名前 `name`, 年齢 `age`, 居住地 `city`, 趣味 `hobbies` (配列)）を持つオブジェクト `myProfile` を作成し、
// コンソールに表示してみましょう。
const myProfile = {
  name: "鈴木次郎",
  age: 25,
  city: "東京",
  // 趣味は複数あることを想定し、配列で定義します。
  hobbies: ["プログラミング", "音楽鑑賞", "旅行"],
};

console.log("私のプロフィール:", myProfile);


// 練習問題 2:
// `myProfile` オブジェクトから `name` と `age` の値をそれぞれドット記法とブラケット記法で取得し、
// コンソールに表示してみましょう。

// ドット記法
console.log("名前 (ドット記法):", myProfile.name);

// ブラケット記法
// プロパティ名を文字列で指定します。
console.log("年齢 (ブラケット記法):", myProfile["age"]);

// 変数を使ってアクセスすることもできます。
const keyForCity = "city";
console.log("居住地 (ブラケット記法):", myProfile[keyForCity]);


// 練習問題 3:
// `myProfile` オブジェクトに新しいプロパティ `email` (メールアドレス) を追加し、その値を設定してみましょう。
// その後、`myProfile` 全体をコンソールに表示してみましょう。
myProfile.email = "jiro.suzuki@example.com";
console.log("Email追加後:", myProfile);


// 練習問題 4:
// `myProfile` オブジェクトの `age` の値を更新し、更新後の `age` をコンソールに表示してみましょう。
console.log(`更新前の年齢: ${myProfile.age}`);

// ageは数値なので、数値で更新するのが適切です。
myProfile.age = 26;

console.log(`更新後の年齢: ${myProfile.age}`);


// 練習問題 5:
// `myProfile` オブジェクトをJSON形式の文字列に変換し、コンソールに表示してみましょう。
const jsonString = JSON.stringify(myProfile);
console.log("JSON文字列:", jsonString);


// 練習問題 6:
// 上記で作成したJSON文字列をJavaScriptのオブジェクトに再度変換し、
// そのオブジェクトの `hobbies` プロパティをコンソールに表示してみましょう。
const parsedObject = JSON.parse(jsonString);

// 変換後のオブジェクトからプロパティにアクセスできます。
console.log("再変換後のオブジェクトの趣味:", parsedObject.hobbies);

// 配列なので、さらにインデックスでアクセスすることも可能です。
console.log("趣味の1つ目:", parsedObject.hobbies[0]);
