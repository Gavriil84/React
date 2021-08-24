import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createUncompletedList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromUncompletedList = (target) => {
  document.getElementById("uncompleted-list").removeChild(target);
};

//未完了リストに追加する関数
const createUncompletedList = (text) => {
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button生成

  // complete btn
  const completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", (e) => {
    //押された完了ボタンの親タグ（div）を削除
    deleteFromUncompletedList(completeButton.parentNode);

    //完了リストに追加する
    const addTarget = completeButton.parentNode;

    //todo内容テキスト取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //btnタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "Back";

    backButton.addEventListener("click", (e) => {
      // 押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createUncompletedList(text);
    });

    //完了リストに追加
    document.getElementById("completed-list").appendChild(addTarget);

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
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

document.getElementById("add-button").addEventListener("click", (e) => {
  onClickAdd();
});
