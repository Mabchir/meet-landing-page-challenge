$(document).ready(function () {
  if ($(window).width() > 900) {
    $(".firstpart").insertAfter(".icon1");
  }
  $(window).resize(function () {
    if ($(window).width() <= 900) {
      $(".firstpart").insertAfter(".bubbleImg");
    } else {
      $(".firstpart").insertAfter(".icon1");
    }
  });
});
