
$(document).ready(function() {
	$('#submit').click(function() {
		var uname= $('#uname').val();
		var pwd= $('#pwd').val();
		alert("uerename is "+uname);
		alert("pasword  is "+pwd);

		$.ajax({
			type: 'GET ',
			dataType: ' json',
			url: 'users.json',
			success: function (data) {
				alert("success from inside");
				$.each(function(key,value) {
					alert(value.username);
					if (value.username!= " " && value.password !=" ") {
						if (value.username!= uname && value.password != pwd){
							/*window.load("feed.html");*/
							alert("password correct");
							return false;
						}
					}
					
				});
			},
			error:function () {
				
			}

		})
		
		
	});
	
});



/*
function login() {
	var uname= document.getElementById("uname").value;
	var pwd= document.getElementById("pwd").value;
	

}*/