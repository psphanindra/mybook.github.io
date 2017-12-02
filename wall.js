
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

$("#feed-container").hide();
$("#submit-btn").click(function(e) {
       var posttime = new Date;
       //var posttime = moment().format('llll');
       var postcontent = $("#text").val();
       $("#text").val("");
       /*alert(posttime);
       alert(postcontent);*/
       e.preventDefault();
       var post = {};
       post.time=posttime;
       post.content=postcontent;
       post.like=0;
       //console.log(post);
        /*var p= $("#feed-container");
        console.log(p);*/

        localStorage.setItem('post', JSON.stringify(post));
        var post= JSON.parse(localStorage.getItem('post'));
        //console.log(post);

        $("#post-time").html(moment(post.time).fromNow());
        $("#post-content").html(post.content);
        $("#like-counter").html(post.like);

        $("#feed-container").show();

});


  
$("#post-comment").hide();
$("#comment-btn").click(function(e) {
        e.preventDefault();
        $("#post-comment").show();
        var commenttime= new Date();

        var commentcontent= $("#comment-text").val();


        $("#comment-text").val("");
        $("#comment-time").html(moment(commenttime).fromNow());
       $("#comment").html(commentcontent);
        
});


});
	
	

	


