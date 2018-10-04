function getRandomString() {
    alert(randomString(document.getElementById("rString").value)); //send an alert with the generated string
}

var randomString = function randomString(inputString) { 
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; //list of avaliable chars
	var stringLength = 8; //password length
	var random = ""; //init random string
	for (var i=0; i<stringLength; i++) { //append for as long as the stringLength
		var rnum = Math.floor(Math.random(inputString) * (chars.length - 1)); //get a random num from the chars
		random += chars.charAt(rnum); //random equals itself plus random char
	}
    return random //return the random string
}