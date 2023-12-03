let Value = 0;

let outText = '';


function add1Text() {
  outText = outText + '1';
  document.querySelector('#outputCal').innerText = outText;
}
function add2Text() {
  outText = outText + '2';
  document.querySelector('#outputCal').innerText = outText;
}
function add3Text() {
  outText = outText + '3';
  document.querySelector('#outputCal').innerText = outText;
}
function add4Text() {
  outText = outText + '4';
  document.querySelector('#outputCal').innerText = outText;
}
function add5Text() {
  outText = outText + '5';
  document.querySelector('#outputCal').innerText = outText;
}
function add6Text() {
  outText = outText + '6';
  document.querySelector('#outputCal').innerText = outText;
}
function add7Text() {
  outText = outText + '7';
  document.querySelector('#outputCal').innerText = outText;
}
function add8Text() {
  outText = outText + '8';
  document.querySelector('#outputCal').innerText = outText;
}
function add9Text() {
  outText = outText + '9';
  document.querySelector('#outputCal').innerText = outText;
}
function add0Text() {
  outText = outText + '0';
  document.querySelector('#outputCal').innerText = outText;
}
function addPoint() {
  outText = outText + '.';
  document.querySelector('#outputCal').innerText = outText;
}
function addPlus() {
  outText = outText + '+';
  document.querySelector('#outputCal').innerText = outText;
}

function addMinus() {
  outText = outText + '-';
  document.querySelector('#outputCal').innerText = outText;
}
function addMultiply() {
  outText = outText + '*';
  document.querySelector('#outputCal').innerText = outText;
}
function addDivide() {
  outText = outText + '/';
  document.querySelector('#outputCal').innerText = outText;
}

function addRoot() {
  outText = outText + '**0.5';
  document.querySelector('#outputCal').innerText = outText;
}

function addSquare() {
  outText = outText + '**';
  document.querySelector('#outputCal').innerText = outText;
}

function clearAll() {
  outText = '';
  document.querySelector('#outputCal').innerText = '0';
}

function evaluation() {
  let sol = eval(outText);
  document.querySelector('#outputCal').innerText = 'Ans: ' + sol;
}