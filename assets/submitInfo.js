$(document).ready( function() {
  $('#submit_button').click( function() {
    var valid = true;
    $("form div").attr("style", "" );
    $.each( [
      "name",
      "email",
      // "telephone",
      "comments",
    ], function( idx, name ) {
      var value = $("#"+name+"_input").val();
      if( value == "" ) {
	$("#"+name+"_label").attr("style", "color:#ff5555;");
	valid = false;
      }
    } );
    if( valid ) {
      $("#buy_button").attr('disabled', '');
      setTimeout( function(){
      $.ajax({
	type: 'POST',
	url: '/cgi-bin/contact.php',
	data: $("form").serialize(),
	error:function( jqXHR, textStatus, errorThrown ) {
	  $("#contact_error")
	    .attr("style","display:block;")
	    .text( "There was an error connecting to our server.  Please try again later, or contact us via email or telephone. (" + textStatus + " : " + ( errorThrown ? errorThrown : "Unknown" ) + ")" );
	},
	success:function( data, textStatus, jqXHR ) {
	  $("#buy_button").removeAttr('disabled', '');
	  var result = jQuery.parseJSON( data );
	  if( result.result == "success" ) {
	    $.each( [
	      "name",
	      "email",
	      "telephone",
	      "comments",
	      "item",
	    ], function( idx, name ) {
	      $("#"+name+"_input").val("");
	    } );
	    $("#contact_error").attr("style","display:none;");
	  }
	  else {
	    $("#contact_error")
	      .attr("style","display:block;")
	      .text( "Unable to submit." + ( result.message ? result.message : "" ) );
	  }
	  
	},
      });
      }, 1);
    }
    else {
      $("#contact_error")
	.attr("style","display:block;")
	.text( "Please fill in required fields." );
    }
    return false;
  });
});

