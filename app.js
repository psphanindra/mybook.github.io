
function login() {
	var uname= document.getElementById("uname").value;
	var pwd= document.getElementById("pwd").value;
	

	var logRequest= new XMLHttpRequest();
	logRequest.open("GET","users.json",true);
	logRequest.onload = function () {
		var userdata= JSON.parse(logRequest.response);
		/*console.log(userdata);
		var dat=JSON.stringify(userdata);
		console.log(dat);*/
		for(var i=0;i<userdata.length;i++){
			if(userdata[i].username == uname && userdata[i].password == pwd){
				window.location = "wall.html";
				break;

			}
			
		}
	};
	logRequest.send();

}





