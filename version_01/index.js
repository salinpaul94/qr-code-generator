const qrCodeApi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  qrImage.src = `${qrCodeApi}${qrText.value}`;
  qrImage.alt = `${qrText.value} qr code`;
}