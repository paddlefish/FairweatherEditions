var slide_int, slide_len, next_slide_now_fn, slide_pos;
next_slide_now_fn = function( delay ) {
  slide_int = setTimeout( function() {
    var next_slide_pos = (slide_pos == slide_len ? 0 : (slide_pos + 1));
    var next_slide = $(".slideshow>img:eq(" + next_slide_pos + ")");

    var slide_cur = $(".slideshow>img:eq(" + slide_pos + ")");
    $(".slideshow").css("background-image","url('" + slide_cur.attr('src') + "')");
    slide_cur.fadeOut(0);

    slide_pos = next_slide_pos;

    next_slide.fadeIn(2000, function() {
      next_slide_now_fn( 3000 );
      $(".slideshow").css("background-image","url('" + next_slide.attr('src') + "')");
    });

  }, delay ? delay : 5000);
}

$(document).ready( function() {
  slide_pos=0;
  slide_len = $(".slideshow>img").size() - 1;
  next_slide_now_fn();
} );
