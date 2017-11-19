


function login() {
	var uname = document.querySelector("#uname").value;
	var pwd = document.querySelector("#pwd").value;
	if(uname=="admin" && pwd=="admin"){
		/*alert("you are loggedin");*/
		window.location = "wall.html";
			
		}
	else{
		alert("oops..!!")
	}

}

/*
var xhttp = new XMLHttpRequest();
xhttp.open("GET",users.json,true);
xhttp.send();
*/