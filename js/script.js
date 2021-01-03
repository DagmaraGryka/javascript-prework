//Functions

  
 buttonRock = document.getElementById('button-rock');
 buttonPaper = document.getElementById('button-paper');
 buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty '); 

 
 const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);

  
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
  
const playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);

const computerMove = getMoveName(randomNumber);
console.log('Ruch komputera:' + computerMove);

displayResult(playerMove, computerMove);

function displayResult(computerMove, playerMove){
    printMessage('Zagrałem '+ computerMove + ', a ty ' + playerMove);

    if( computerMove == 'kamień' && playerMove == 'papier'){
        return 'Ty wygrywasz!';
    } else if ( computerMove == 'nożyczki' && playerMove == 'kamień'){
        return 'Ty wygrywasz!';
    } else if ( computerMove == 'papier' && playerMove == 'nożyczki'){
        return 'Ty wygrywasz!';
    } else if( computerMove == playerMove ){
        return 'Remis!';
    } else if( playerMove == 'nieznany ruch'){
        return 'Nieznany ruch!';
    } else {
        return 'Przegrałeś'} 

    }
}

buttonRock.addEventListener('click', function(){buttonClicked('kamień')});
buttonPaper.addEventListener('click', function(){buttonClicked('papier')});
buttonScissors.addEventListener('click', function(){buttonClicked('nozyce')}); 