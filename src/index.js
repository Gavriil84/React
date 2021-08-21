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

// map, filterを使った配列の処理

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
