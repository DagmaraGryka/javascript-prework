//Functions


var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);


var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  
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
console.log('Ruch gracza:', playerMove);

computerMove = getMoveName(randomNumber);
console.log('Ruch komputera:', computerMove);

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