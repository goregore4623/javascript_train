// 練習問題 1:
// あなた自身の情報（名前 `name`, 年齢 `age`, 居住地 `city`, 趣味 `hobbies` (配列)）を持つオブジェクト `myProfile` を作成し、
// コンソールに表示してみましょう。
const myProfile = {
  name: "山田太郎",
  age: 22,
  city: "United States",
  hobbies: ["Game"],
};

console.log(myProfile);

// 練習問題 2:
// `myProfile` オブジェクトから `name` と `age` の値をそれぞれドット記法とブラケット記法で取得し、
// コンソールに表示してみましょう。
const key = "age";
console.log(myProfile.name);
console.log(myProfile[key]);

// 練習問題 3:
// `myProfile` オブジェクトに新しいプロパティ `email` (メールアドレス) を追加し、その値を設定してみましょう。
// その後、`myProfile` 全体をコンソールに表示してみましょう。
myProfile.email = "aaaaa.aaaa@gmail.com";
console.log(myProfile);

// 練習問題 4:
// `myProfile` オブジェクトの `age` の値を更新し、更新後の `age` をコンソールに表示してみましょう。
console.log(`年齢: ${myProfile.age}`);
myProfile.age = 20;
console.log(`年齢: ${myProfile.age}`);

// 練習問題 5:
// `myProfile` オブジェクトをJSON形式の文字列に変換し、コンソールに表示してみましょう。
const jsonMyProfile = JSON.stringify(myProfile);
console.log(jsonMyProfile);

// 練習問題 6:
// 上記で作成したJSON文字列をJavaScriptのオブジェクトに再度変換し、
// そのオブジェクトの `hobbies` プロパティをコンソールに表示してみましょう。
const parseMyProfile = JSON.parse(jsonMyProfile);
console.log(parseMyProfile.hobbies);
