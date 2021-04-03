// TODO: fetch this from Instagram API
// @gcrsaldanha on Instagram, picture for testing purposes
// const pic_url = 'https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/74418006_2443680192590523_7063243180768131119_n.jpg?tp=1&_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_ohc=W3kzuCinCuAAX_M7dJK&edm=ABfd0MgAAAAA&ccb=7-4&oh=ede5674d7a5e3ed5469056f370d08b81&oe=608C6FF5&_nc_sid=7bff83'
const generateButton = document.getElementById("instagram-url");
generateButton.addEventListener("keydown", function (event) {
  if (event.key === 'Enter') {
    run(generateButton);
  }
});
const imgSize = 320;
const radius = imgSize/2;
const canvas = document.getElementById("border-picture");
const originalCanvas = document.getElementById("original-picture");
const ctx = canvas.getContext("2d");
const originalCtx = originalCanvas.getContext("2d");
ctx.width = ctx.height = originalCtx.width = originalCtx.height = imgSize;
const originalImg = new Image(imgSize, imgSize);
originalImg.crossOrigin="anonymous"

function run (element) {
  originalImg.src = element.value;
  originalImg.onload = function () {
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2);
    ctx.clip();
    ctx.closePath();

    ctx.drawImage(originalImg, 0, 0, imgSize, imgSize);
    originalCtx.drawImage(originalImg, 0, 0, imgSize, imgSize);

    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 24;
    ctx.strokeStyle = "#e66465";
    ctx.stroke();
    ctx.closePath()
  }
}

function downloadImg(el) {
  el.href = canvas.toDataURL("image/png");
}

function downloadOriginalImg(el) {
  el.href = originalCanvas.toDataURL("image/png");
}

function changeColor(el) {
  if (!originalImg.src) return;
  ctx.beginPath();
  ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
  ctx.lineWidth = 24;
  ctx.strokeStyle = el.value;
  ctx.stroke();
  ctx.closePath()
}

// Improvements!
// Gradient: http://jsfiddle.net/jkvqu0ms/3/
// https://www.instagram.com/USERNAME/?__a=1
// https://i.instagram.com/api/v1/users/USER_ID/info/
// https://stackoverflow.com/questions/50086945/how-to-get-instagram-profile-picture-via-api
