//Functions

 {   
var buttonRock, buttonPaper, buttonScissors;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
  

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);


var playerMove, playerInput;

console.log('Wpisana odpowiedź to: ' + playerInput);
  
function getMoveName(moveId) {
    if (moveId == '1') {
        return 'kamień';
    } else if (moveId == '2'){
        return 'papier';
    } else if (moveId == '3'){
        return 'nozyce';
    } else {
        return 'nieznay ruch'
    }
}
  
playerMove = getMoveName(playerInput);

computerMove = getMoveName(randomNumber);
console.log('Ruch komputera:' + computerMove);
}


function displayResult(computerMove, playerMove){
    printMessage('Zagrałem' + computerMove + ', a ty ' + playerMove);
if (playerMove == 'kamień' && computerMove == 'papier') {
    printMessage('Wygrywa komputer');
} else if (playerMove == 'papier' && computerMove == 'nozyce') {
    printMessage('Wygrywa komputer');
} else if (playerMove == 'nozyce' && computerMove == 'kamień') {
    printMessage('Wygrywa komputer');
} else if (playerMove == computerMove) {
    printMessage('Remis');
} else if (playerMove == 'nozyce' && 'Nieznany ruch') {
    printMessage('Bledny ruch');
} else {
    printMessage('Wygral gracz')
}
}


 
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nozyce'); });
}