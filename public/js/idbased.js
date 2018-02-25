var xmlhttp = new XMLHttpRequest();
var url = "data/input.txt";

xmlhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200){
		console.log(this.responseText);
		obj = JSON.parse(this.responseText);
        getData();
		
	}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
var idurl = "data/id.txt";

xmlhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200){
		console.log(this.responseText);
		id = JSON.parse(this.responseText);
	    getData();
		
	}
};
xmlhttp.open("GET", idurl, true);
xmlhttp.send();



function getData(){
	document.getElementsByClassName("cover")[0].style.backgroundImage = "url(" + obj[id - 1].coverPhotopath + ")";
	document.getElementById("profilePicture").src = obj[id - 1].profilePath;
	document.getElementsByClassName("name")[0].innerHTML += obj[id - 1].name;
	document.getElementsByClassName("email")[0].innerHTML += obj[id - 1].emailid;
	document.getElementsByClassName("id")[0].innerHTML += obj[id - 1].id;
	document.getElementsByClassName("about")[0].innerHTML += obj[id - 1].about;
	document.getElementsByTagName("body")[0].style.backgroundColor = obj[id - 1].backgroundColor;
	
}