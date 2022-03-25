//

$(document).ready(function () {
  if ($(window).width() > 800) {
    $(".firstpart").insertAfter(".icon1");
  }
  $(window).resize(function () {
    if ($(window).width() <= 800) {
      $(".firstpart").insertAfter(".bubbleImg");
    } else {
      $(".firstpart").insertAfter(".icon1");
    }
  });
});
