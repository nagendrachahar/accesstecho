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

function getData(arr){
	console.log(arr);
	
	var main = "";
	for(var i = 0; i < arr.length; i++){
		 main += '<div>'+
			'<img id="image" src="' + arr[i].filepath + " " + '" width="200px" height="200px">'+
			'<p>FIRSTNAME : <span class="firstname">'+ arr[i].firstname +'</span></p>'+
			'<p>LASTNAME : <span class="lastname">'+ arr[i].lastname +'</span></p>'+
			'<p>ID : <span class="id">'+ arr[i].id +'</span></p>'+
			'</div>';
	}

	document.getElementById("main").innerHTML = main;
}