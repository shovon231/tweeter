$(document).ready(function () {
  // --- our code goes here ---
  const counter = 140;
  $("#tweet-text").on("input", function () {
    let textVal = counter - $(this).val().length;
    let selectOutput = $("#tweet-text, .counter");
    $(selectOutput).text(textVal);
    if (textVal <= 0) {
      $(selectOutput).addClass("red");
    } else {
      $(selectOutput).removeClass("red");
      $(".displayError").css("visibility", "hidden");
    }
  });
});
