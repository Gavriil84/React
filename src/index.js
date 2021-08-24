import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button生成

  // complete btn
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", (e) => {
    //押された完了ボタンの親タグ（div）を削除
    deleteFromUncompletedList(deleteButton.parentNode);
  });

  // delete btn
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", (e) => {
    //押された削除ボタンの親タグ（div）を削除
    deleteFromUncompletedList(deleteButton.parentNode);
  });

  // divタグにアペンド
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // uncompleted list add
  document.getElementById("uncompleted-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromUncompletedList = (target) => {
  document.getElementById("uncompleted-list").removeChild(target);
};

document.getElementById("add-button").addEventListener("click", (e) => {
  onClickAdd();
});
