// TODO: fetch this from Instagram API
// This is my picture! :) @gcrsaldanha on Instagram
// const pic_url = 'https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/74418006_2443680192590523_7063243180768131119_n.jpg?tp=1&_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_ohc=W3kzuCinCuAAX_M7dJK&edm=ABfd0MgAAAAA&ccb=7-4&oh=ede5674d7a5e3ed5469056f370d08b81&oe=608C6FF5&_nc_sid=7bff83'
function run () {
  const pic_url = document.getElementById("instagram-url").value;
  const img_size = 320;
  const radius = 320/2;
  const canvas = document.getElementById("c1");
  const ctx = canvas.getContext("2d");
  ctx.width = img_size;
  ctx.height = img_size;
  const img = new Image(img_size, img_size);
  img.src = pic_url
  img.onload = function () {
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2);
    ctx.clip();
    ctx.closePath();

    ctx.drawImage(img, 0, 0, img_size, img_size);

    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 24;
    ctx.strokeStyle = "#cc9dec";
    ctx.stroke();
    ctx.closePath()
  }
}

// Improvements!
// Gradient: http://jsfiddle.net/jkvqu0ms/3/
// https://www.instagram.com/USERNAME/?__a=1
// https://i.instagram.com/api/v1/users/USER_ID/info/
// https://stackoverflow.com/questions/50086945/how-to-get-instagram-profile-picture-via-api
