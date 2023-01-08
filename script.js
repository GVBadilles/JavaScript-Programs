const keys = {
	upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	lowerCase: "abcdefghijklmnopqrstuvwxyz",
	number: "0123456789",
	symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
	}

const getKey = [
	function upperCase() {
		return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
	},
	function lowerCase() {
		return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
	},
	function number() {
		return keys.number[Math.floor(Math.random() * keys.number.length)];
	},
	function symbol() {
		return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
	},
	];
	
function createPassword() {
	const upper = document.getElementById("upperCase").checked;
	const lower = document.getElementById("lowerCase").checked;
	const number = document.getElementById("number").checked;
	const symbol = document.getElementById("symbol").checked;
	
	if (upper + lower + number + symbol === 0) {
		alert("No inclusions selected");
		return;
	}
	const passwordBox = document.getElementById("passwordBox");
	const length = document.getElementById("length");
	let password = "";
	while (length.value > password.length) {
		let keyToAdd = getKey[Math.floor(Math.random() *getKey.length)];
		let isChecked = document.getElementById(keyToAdd.name).checked;
		if (isChecked) {
			password += keyToAdd();
		}
	}
	passwordBox.innerHTML = password;
}

function copyPassword() {
	const textarea = document.createElement("textarea");
	const password = document.getElementById("passwordBox").innerText;
	if (!password) {
		return;
	}
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	alert("Password copied to clipboard");
}

window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
		clearInterval(Interval);
  }
  
  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  }
}

