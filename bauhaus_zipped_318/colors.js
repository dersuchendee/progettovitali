 jQuery(document).ready(function() {
  $("button").on("click", "#purple", function() {
    $('figcaption').css("color", "#6A91AD");
    $('.bg').css("background", "#8E2964");
    $('figcaption').css("font-size", "30px")

  });



  $("button").on("click", "#blue", function() {
    $('figcaption').css("color", "#F0EA52");
    $('.bg').css("background", "#6B9E3F");
    $('figcaption').css("font-size", "30px")
  });

  $("button").on("click", "#black", function() {
    $('figcaption').css("color", "  #0C0E0D");
    $('.bg').css("background", "#79A6CE");
    $('figcaption').css("font-family", "p22_bayer_fonetikregular");
    $('figcaption').css("font-size", "20px");
    $('figcaption').css("letter-spacing", "3px");
    $('figcaption').css("width", "100%")
  });

});