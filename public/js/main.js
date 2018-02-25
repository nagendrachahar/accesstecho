var xmlhttp = new XMLHttpRequest();
var url = "data/input.txt";

xmlhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200){
		console.log(this.responseText);
		var obj = JSON.parse(this.responseText);
		
		getData(obj);
	}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function getData(obj){
	console.log(obj.length);
	document.getElementsByClassName("cover")[0].style.backgroundImage = "url(" + obj[obj.length-1].coverPhotopath + ")";
	document.getElementById("profilePicture").src = obj[obj.length-1].profilePath;
	document.getElementsByClassName("name")[0].innerHTML = obj[obj.length-1].name;
	document.getElementsByClassName("email")[0].innerHTML += obj[obj.length-1].emailid;
	document.getElementsByClassName("id")[0].innerHTML += obj[obj.length-1].id;
	document.getElementsByClassName("about")[0].innerHTML += obj[obj.length-1].about;
	document.getElementsByTagName("body")[0].style.backgroundColor = obj[obj.length-1].backgroundColor;
	
}