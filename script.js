$(document).ready(function() {
    // 按鈕1: 調整字體與顏色
    $("#btnFontColor").click(function() {
      $("#student-info").css({
        "font-size": "20px",
        "color": "blue"
      });
    });
  
    // 按鈕2: 調整大頭照
    $("#btnAdjustProfile").click(function() {
      $("#profile-pic").css({
        "border-radius": "50%",
        "border": "4px solid red"
      });
    });
  
    // 按鈕3: 換圖
    $("#btnChangePhoto").click(function() {
      $("#profile-pic").attr("src", "lifestyle.jpg");
    });
  
    // 按鈕4: 動畫切換
    $("#btnAnimate").click(function() {
      $("#profile-pic").fadeOut(500, function() {
        $(this).attr("src", "selfie.jpg").fadeIn(500);
      });
    });
  });
  