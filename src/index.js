//  スプレッド構文 ...

// 配列の展開
const arr1 = [1, 2];
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

map, filterを使った配列の処理;

const nameArr = ["田中", "山田", "下田"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

const nameArr1 = nameArr.map((name) => {
  return name;
});
console.log(nameArr1);

nameArr.map((name, index) => {
  console.log(`${index + 1}番目は${name}です`);
});

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "下田") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);

// 三項演算子
// ある条件　？　条件がtrueの時 ：　条件がfalseの時

const val1 = 1 < 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 50));

// 論理演算子の本当の意味を知ろう

const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}

if (flag1 && flag2) {
  console.log("1も2はtrueになります");
}

// ||　は左側がfalseなら右側を返す
// nullはfalse判定されるから文字列が返される
const num = null;
const fee = num || "金額未定です";
console.log(fee);

// &&　は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
