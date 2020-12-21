//Functions

var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nozyce, to wygrywasz!');


  var playerMove, playerInput;
  playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Wpisana odpowiedź to: ' + playerInput);
  if (playerInput == '1') {
    playerMove = 'kamień';
  } else {
    playerMove = 'nieznany ruch';
  }
  printMessage('Twój ruch: ' + playerMove);
  if (playerInput == '2') {
    playerMove = 'papier';
  } else {
    playerMove = 'nieznany ruch';
  }
  printMessage('Twój ruch: ' + playerMove);
  if (playerInput == '3') {
    playerMove = 'nozyce';
  } else {
    playerMove = 'nieznany ruch';
  }
  printMessage('Twój ruch: ' + playerMove);