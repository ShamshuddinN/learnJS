let userchoice = 'none';
let computernum = 0
let computerch = 'none';

document.querySelector('#resultpopup').style = 'display: none';

function batfun() {
  userchoice = 'bat';
  computerch = Math.random() * 3 ;

  document.querySelector('#resultpopup').style = 'display: inline-block';
    

  if (computerch > 1 && computerch < 2) {
    document.querySelector('#result').innerText = 'Winner is User';
    document.querySelector('#choiceslog').innerText = 'User chosen bat and Computer is chosen Ball';

  } else if (computerch > 2 && computerch < 3) {
    document.querySelector('#result').innerText = 'Winner is Computer';
    document.querySelector('#choiceslog').innerText = 'User chosen bat and Computer is chosen Stump';

  } else {
    document.querySelector('#result').innerText = 'It is a Draw!';
    document.querySelector('#choiceslog').innerText = `User chosen bat and Computer ${computerch} `;

  }

}

function ballfun() {
  userchoice = 'ball';
  computerch = Math.random() * 3 ;
  document.querySelector('#resultpopup').style = 'display: inline-block';

  if (computerch > 0 && computerch < 1) {
    document.querySelector('#result').innerText = 'Winner is Computer';
    document.querySelector('#choiceslog').innerText = 'User chosen Ball and Computer is chosen Bat';

  } else if (computerch > 2 && computerch < 3) {
    document.querySelector('#result').innerText = 'Winner is User';
    document.querySelector('#choiceslog').innerText = 'User chosen Ball and Computer is chosen Stump';

  } else {
    document.querySelector('#result').innerText = 'It is a Draw!';
    document.querySelector('#choiceslog').innerText = `User chosen Ball and Computer ${computerch} `;

  }
  
}

function stumpfun() {
  userchoice = 'stump';
  computerch = Math.random() * 3 ;
  document.querySelector('#resultpopup').style = 'display: inline-block';

  if (computerch > 0 && computerch < 1) {
    document.querySelector('#result').innerText = 'Winner is User';
    document.querySelector('#choiceslog').innerText = 'User chosen Stump and Computer is chosen Bat';

  } else if (computerch > 1 && computerch < 2) {
    document.querySelector('#result').innerText = 'Winner is Computer';
    document.querySelector('#choiceslog').innerText = 'User chosen Stump and Computer is chosen Ball';

  } else {
    document.querySelector('#result').innerText = 'It is a Draw!';
    document.querySelector('#choiceslog').innerText = `User chosen Stump and Computer ${computerch} `;

  }

}

