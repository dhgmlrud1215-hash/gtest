const itemList = [];
const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
    const item = document.querySelector("#item").value;
    if (item != null) {
        itemList.push(item); // itemList 배열의 끝에 item 변수 값 추가
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList() {
    let list = "<ul>"; //목록을 시작하는 <ul> 태그 저장
    for (let i=0; i<itemList.length; i++) { //배열 요소마다 반복
        list += "<li>" + itemList[i] +
        "<span class = 'close' id=" + i + ">X</span></li>"; // 요소와 삭제버튼을 <li>~</li>로 묶음
    }
    list  += "</ul>"; // 목록을 끝내는 </ul> 태그 저장
    document.querySelector('#itemList').innerHTML = list;
    const remove = document.querySelectorAll(".close");
    for (let i = 0; i <remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    const id = this.getAttribute("id"); // id의 속성(배열 0,1,2)을 가져옴
    litemList.splice(id,1); // id부터 1개 삭제
    showList();
    // 삭제한 걸 제외하고 다시 배열 돌려야 해서 호출함
}