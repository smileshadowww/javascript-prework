
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

    function getMoveName(argMoveId) {
      console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Wybierz jeden z podanych numerów/zagrań, spróbujmy jeszcze raz!');
        return 'kamień';
      }
    }

    function displayResult(argPlayerMove, argComputerMove) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
      } else {
        printMessage('Przegrywasz :(');
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

    const playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

const buttonscissors = document.getElementById('button-scissors');
buttonscissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
const buttonpaper = document.getElementById('button-paper');
buttonpaper.addEventListener('click', function(){ buttonClicked('papier'); });
const buttonrock = document.getElementById('button-rock');
buttonrock.addEventListener('click', function(){ buttonClicked('kamień'); });
