// Changes text/color based on user input

var getInput = function(){
	var answer = document.getElementById("textInput").value;
	if(answer === '2'){
		document.getElementById("notification").style.backgroundColor = "green";
		document.getElementById("notificationHeader").innerHTML = "Success";
		document.getElementById("notificationText").innerHTML = "Correct Answer";
	}

	else{
		document.getElementById("notification").style.backgroundColor = "red";
		document.getElementById("notificationHeader").innerHTML = "Error";
		document.getElementById("notificationText").innerHTML = "Incorrect Answer";
	}
}