let $jQ = jQuery.noConflict();

$jQ(".image a:gt(0)").hide();

setInterval(function () {
  $jQ(".image a:first-child")
    .fadeOut(1000)
    .next("a")
    .fadeIn(1000)
    .end()
    .appendTo(".image");
}, 3000);
