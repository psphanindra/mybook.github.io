

"use strict";
$(document).ready(function() {
	var text_max = 240;
  $('#count_message').html(text_max + ' remaining');

  $('#text').keyup(function() {
  var text_length = $('#text').val().length;
  var text_remaining = text_max - text_length;
 
  $('#count_message').html(text_remaining + ' remaining');
  	 if(text_length > text_max ){
  		$('#submit-btn').attr('disabled', 'disabled');
  		$('#count_message').css('color', 'red');
  		}
  	 else{
  		$('#submit-btn').removeAttr('disabled', 'disabled');
  		$('#count_message').css('color', 'black');
  	}
  });

  

          var likecounter =$('#like-counter').html();
             /*alert(likecounter);*/

          /*alert(likecounter);*/
      $("#likebtn").click(function() {
        likecounter++;
        $("#like-counter").html(likecounter);

  });
   $('#create-comment').hide(); 
   //$('#create-comment').show();
   $('#cmtbtn').click(function() {
    //alert("yupp..");
    $('#create-comment').toggle(1000);

    
 
  });


});
	
