$(function () {
  var containerRight = $(".container-right").html();
  $(window).on("load resize", function () {
    if ($(window).width() <= 600) {
      $(".mobile-cardDiv").html(containerRight);
    } else {
      $(".mobile-cardDiv").empty();
    }
  });
});
