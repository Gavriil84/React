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

  // divタグにアペンド
  div.appendChild(li);

  // uncompleted list add
  document.getElementById("uncompleted-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", (e) => {
  onClickAdd();
});
