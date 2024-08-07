import $jQ from "jquery";

export function Carousel() {
  $jQ(".image a:gt(0)").hide();
  const intervals = setInterval(function () {
    $jQ(".image a:first-child")
      .fadeOut(1000)
      .next("a")
      .fadeIn(2000)
      .end()
      .appendTo(".image");
  }, 4000);
  return () => clearInterval(intervals);
}
