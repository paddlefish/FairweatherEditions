var slide_int;
$(document).ready( function() {
  var slide_pos=0;
  var slide_len = $(".slideshow>img").size() - 1;

/*
  if( ! loadedSlides[ 0 ] ) {
	  $(".slideshow_item").hide();
  }
  else {
	  $(".slideshow_item:gt(0)").hide();
  }
*/

  slide_int = setInterval( function() {
    var next_slide_pos = (slide_pos == slide_len ? 0 : (slide_pos + 1));
    var next_slide = $(".slideshow>img:eq(" + next_slide_pos + ")");

/*
    if( ! next_slide.find( "img" )[ 0 ].complete ) {
	    return;
    }
*/

    var slide_cur = $(".slideshow>img:eq(" + slide_pos + ")");
    slide_cur.fadeOut(2000);

    slide_pos = next_slide_pos;

    next_slide.fadeIn(2000);

  }, 5000);
} );
