$(document).ready(function() {
  var bg = new Array();
  bg[0] = "url(img/models/bg1.jpg)";
  bg[1] = "url(img/models/bg2.jpg)";
  bg[2] = "url(img/models/bg3.jpg)";
  bg[3] = "url(img/models/bg4.jpg)";
  bg[4] = "url(img/models/bg5.jpg)";
  bg[5] = "url(img/models/bg6.jpg)";
  bg[6] = "url(img/models/bg7.jpg)";
  bg[7] = "url(img/models/bg8.jpg)";
  bg[8] = "url(img/models/bg9.jpg)";

  var i = 0;
  setInterval(function() {
    (i > 8) ? i = 0 : i++;
    $(".models_wrap").css("background-image", bg[i]);
  }, 7000);
});