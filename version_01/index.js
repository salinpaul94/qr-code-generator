const qrCodeApi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = `${qrCodeApi}${qrText.value}`;
    qrImage.alt = `${qrText.value} qr code`;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
  }
}