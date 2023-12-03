var genderRadios = document.getElementsByName('genderch');
var gender;
var age;


document.querySelector('#resultwindow').style = 'display: none';


function checkdiscount() {
  
  document.querySelector('#prediscountswindow').style = 'display: none';
  document.querySelector('#resultwindow').style = 'display: block';

  age = document.querySelector('#ageinput').value;


  for (var i = 0; i < genderRadios.length; i++) {
    
    if (genderRadios[i].checked) {
      gender = genderRadios[i].value;
      
      break;

    }
  }
  
  if (age < 5) {
    document.querySelector('#applieddiscount').innerText = 'Ticket is free for you';
  } else if (age > 5 && age <= 8) {
    document.querySelector('#applieddiscount').innerText = 'Half Ticket is applicable.';
  } else if (age > 65) {
    document.querySelector('#applieddiscount').innerText = '70% Discount is applicable';
  } else if (gender === 'female') {
    document.querySelector('#applieddiscount').innerText = '50% Discount on Ticket is applicable.';
  } else {
    document.querySelector('#applieddiscount').innerText = 'No Scheme is applicable';
  }



}