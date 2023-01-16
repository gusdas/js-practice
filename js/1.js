function previewFile() {
  const preview = document.querySelector('#previewImage');
  const file = document.querySelector('#imageSelector').files[0];
  const reader = new FileReader();

  reader.addEventListener(
    'load',
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

function show() {
  document.querySelector('.background').className = 'background show';
}

function popupClose() {
  document.querySelector('.background').className = 'background';
}

const create2DArray = (rows, columns) => {
  const arr = Array.from({ length: rows }, (v, i) => i);
  for (var i = 0; i < rows; i++) {
    arr[i] = Array.from({ length: columns }, (v, i) => i);
  }
  return arr;
};

const makeElement = () => {
  const ulParent = document.getElementById('ulParent');
  let arr = create2DArray(3, 4);
  arr.map((row, rowIdx) => {
    const newUL = document.createElement('ul');
    // newUL.setAttribute('id', 'ul' + rowIdx);
    newUL.innerText = rowIdx;
    ulParent.appendChild(newUL);
    row.map((col, colIdx) => {
      const newli = document.createElement('li');
      newli.innerText = col;
      // const liParent = document.getElementById('ul' + rowIdx);
      // liParent.appendChild(newli);
      newUL.appendChild(newli);
    });
  });
};

const API = [
  { userId: 1, id: 1, title: '밥 먹기', completed: false },
  { userId: 1, id: 2, title: '공부 하기', completed: false },
  { userId: 1, id: 3, title: '커피 마시기', completed: true },
  { userId: 1, id: 4, title: '씻기', completed: true },
  { userId: 1, id: 5, title: '잠 자기', completed: false },
];
