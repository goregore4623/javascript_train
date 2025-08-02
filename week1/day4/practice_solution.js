// 模範解答 (practice_solution.js)

// 練習問題 1:
// 好きな食べ物の名前を5つ入れた配列 `myFavoriteFoods` を作成し、コンソールに表示してみましょう。
const myFavoriteFoods = ["ラーメン", "寿司", "カレー", "焼肉", "餃子"];
console.log("私の好きな食べ物リスト:", myFavoriteFoods);


// 練習問題 2:
// `myFavoriteFoods` の最初の要素と最後の要素をそれぞれコンソールに表示してみましょう。
console.log("最初の要素:", myFavoriteFoods[0]);

// 配列の要素数に依存しないように、(配列の長さ - 1) で最後の要素のインデックスを計算します。
const lastIndex = myFavoriteFoods.length - 1;
console.log("最後の要素:", myFavoriteFoods[lastIndex]);


// 練習問題 3:
// `myFavoriteFoods` の末尾に新しい食べ物を1つ追加し、再度配列全体をコンソールに表示してみましょう。
myFavoriteFoods.push("パスタ");
console.log("追加後のリスト:", myFavoriteFoods);


// 練習問題 4:
// `myFavoriteFoods` の先頭の食べ物を削除し、削除後の配列をコンソールに表示してみましょう。
// shift()は削除した要素を返すので、それを受け取ることもできます。
const removedFood = myFavoriteFoods.shift();
console.log(`"${removedFood}"を削除しました。`);
console.log("削除後のリスト:", myFavoriteFoods);


// 練習問題 5:
// `for`ループを使って `myFavoriteFoods` のすべての要素を一つずつコンソールに表示してみましょう。
console.log("--- forループによる表示 ---");
// ループカウンター `i` は `let` で宣言するのが一般的です。
for (let i = 0; i < myFavoriteFoods.length; i++) {
  console.log(`${i + 1}番目: ${myFavoriteFoods[i]}`);
}


// 練習問題 6:
// `for...of`ループを使って `myFavoriteFoods` のすべての要素を一つずつコンソールに表示してみましょう。
console.log("--- for...ofループによる表示 ---");
// ループ内で要素の値を変更しないので、`const` で宣言するのが安全です。
for (const food of myFavoriteFoods) {
  console.log(food);
}
