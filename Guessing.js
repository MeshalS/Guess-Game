let guessChoices = document.getElementById('guess-choices');
let guessCounter = document.getElementById('guess-counter');
let guessIndicator = document.getElementById('guess-indicator');
let guessForm = document.getElementById('guess-form');
let guessNumberInput = document.getElementById('guess-number-input');
let againButn= document.getElementById('play-againButn');



let randomNumber = makeRandomNumber();
let guessingTries = 1;

console.log('Random Number IS: ', randomNumber);

guessForm.addEventListener('submit', function (event) {
	event.preventDefault();
	let guessNumber = event.target.guess_number.value;
	guessNumberInput.value = '';

	renderGuessCounter(5 - guessingTries);
	compareInput(guessNumber)

	if (guessingTries == 5) {
		alert('You Are Done.');
	} else {
		// Compare Numbers
		if (guessNumber == randomNumber) {
			alert('Win');
		} else {
			let litElement = document.createElement('li');
			litElement.innerText = guessNumber;
			guessChoices.innerHTML += litElement.outerHTML;
			// guessChoices.innerHTML += `<li>${guessNumber}</li>`;
			alert('Wrong Guessing Number, try again.');
			guessingTries++;
		}
	}
});

// num => 4 3 2 5
function renderGuessCounter(num) {
	guessCounter.innerText = `${num} Guess Remaining,`;
}

function makeRandomNumber() {
	// Math.random => range (0 -> 1)
	let randomNumber = Math.floor(Math.random() * 100) + 1;
	return randomNumber;
}
function playagin(){
	guessingTries = 1;
	randomNumber = makeRandomNumber();
	guessChoices.innerHTML ='';
	renderGuessCounter(5 - guessingTries);
}
againButn.addEventListener('click', function (event) {
	playagin()
})

function compareInput(num){
if(num>=randomNumber-10 && num<=randomNumber+10  ){
	guessIndicator.innerText='you are very close'

}else {
	guessIndicator.innerText='you are very  away'

}

}

// // function sum(num,nume2){

// 	return num*ume2
// }

// function solution(str){

// 	let newString='';
	
// 	for (var i = str.length - 1; i >= 0; i--) { 
// 		  newString += str[i]; // or newString = newString + str[i];
// 	  }
//   return  newString;
//   }