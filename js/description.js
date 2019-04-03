$(document).ready(function() {
  $(".flex-item").click(function(option) {
    var buttonPressed = ($(this).text());

    $(".flex-item").each(function(index) {
      $(this).removeClass("active");
    })

    $(this).addClass("active");

    $(".panel").each(function(index) {

      var firstWordEnd = $(this).text().trim().indexOf(" ");
      var firstWord = $(this).text().trim().substring("0", firstWordEnd);

      if (buttonPressed.trim() !== (firstWord.trim())) {
        $(this).css("display", "none");
      } else {
        $(this).css("display", "");

      }
    })

  });
})
