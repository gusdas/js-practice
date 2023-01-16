function previewFile() {
  const preview = document.querySelector("#previewImage");
  const file = document.querySelector("#imageSelector").files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  });

  if (file) {
    reader.readAsDataURL(file);
  }
}

function show() {
  document.querySelector(".background").className = "background show";
}

function popupClose() {
  document.querySelector(".background").className = "background";
}

//1. 쿼리셀렉터
let a = document.querySelectorAll("P.test")[1].innerHTML;
console.log(a);

let b = document
  .querySelectorAll("ul.testUl")[0]
  .querySelectorAll("li")[1].innerText;
console.log(b);

let c = document
  .querySelectorAll("ul.testUl")[1]
  .querySelectorAll("li")[2].innerText;
console.log(c);

//4. API 객체 컨트롤

const API = [
  { userId: 1, id: 1, title: "밥 먹기", completed: false },
  { userId: 1, id: 2, title: "공부 하기", completed: false },
  { userId: 1, id: 3, title: "커피 마시기", completed: true },
  { userId: 1, id: 4, title: "씻기", completed: true },
  { userId: 1, id: 5, title: "잠 자기", completed: false },
];

const setAPIElements = () => {
  const objectParent = document.querySelector("#objectParent");

  objectParent.innerHTML = console.log();
};
