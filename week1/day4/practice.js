// 練習問題 1:
// 好きな食べ物の名前を5つ入れた配列 `myFavoriteFoods` を作成し、コンソールに表示してみましょう。
const myFavoriteFoods = ["Apple", "Banana", "Lemon", "Orange", "Grape"];
console.log(myFavoriteFoods);

// 練習問題 2:
// `myFavoriteFoods` の最初の要素と最後の要素をそれぞれコンソールに表示してみましょう。
console.log(myFavoriteFoods[0], myFavoriteFoods[myFavoriteFoods.length - 1]);

// 練習問題 3:
// `myFavoriteFoods` の末尾に新しい食べ物を1つ追加し、再度配列全体をコンソールに表示してみましょう。
myFavoriteFoods.push("Strawberry");
console.log(myFavoriteFoods);

// 練習問題 4:
// `myFavoriteFoods` の先頭の食べ物を削除し、削除後の配列をコンソールに表示してみましょう。
myFavoriteFoods.shift();
console.log(myFavoriteFoods);

// 練習問題 5:
// `for`ループを使って `myFavoriteFoods` のすべての要素を一つずつコンソールに表示してみましょう。
let i;
for (i = 0; i < myFavoriteFoods.length; i++) {
  console.log(myFavoriteFoods[i]);
}

// 練習問題 6:
// `for...of`ループを使って `myFavoriteFoods` のすべての要素を一つずつコンソールに表示してみましょう。
for (const myFavoriteFood of myFavoriteFoods) {
  console.log(myFavoriteFood);
}
