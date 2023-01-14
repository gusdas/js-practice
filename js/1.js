function previewFile() {
  const preview = document.querySelector("#previewImage");
  const file = document.querySelector("#imageSelector").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
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
  document.querySelector(".background").className = "background show";
}

function popupClose() {
  document.querySelector(".background").className = "background";
}
