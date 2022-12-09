let display = document.getElementById('display');
let input = document.getElementsByTagName('input');
let button = document.getElementsByTagName('button');
let time = document.getElementById('time');
let disBlock = document.getElementById('disBlock');
let disBD = document.getElementById('disBD');
let creditBlock = document.getElementById('postCredit');
let credit = document.getElementById('credit');
let about = document.getElementById('about');
disBlock.style.display = 'none';
creditBlock.style.display = 'none';
let dob = new Date(),
  today = new Date(),
  calTime;
function samay() {
  let d = new Date();
  time.innerHTML =
    d.getHours() +
    ' Hours, ' +
    d.getMinutes() +
    ' Minutes, ' +
    d.getSeconds() +
    ' Seconds Old';
}
function calculate() {
  disBlock.style.display = 'block';
  creditBlock.style.display = 'block';
  credit.innerHTML = 'Thank You For Visiting<br>';
  let x = input[1].value.split('-');
  dob.setDate(x[2]);
  dob.setMonth(x[1] - 1);
  dob.setFullYear(x[0]);
  let year, month, day, HBD;
  day = (function () {
    if (today.getDate() > dob.getDate()) {
      return today.getDate() - dob.getDate() - 1;
    } else if (today.getDate() == dob.getDate()) {
      return today.getDate() - dob.getDate();
    } else {
      let calDate = new Date(dob.getFullYear(), dob.getMonth() + 1, 0);
      return today.getDate() + calDate.getDate() - dob.getDate() - 1;
    }
  })();
  month = (function () {
    if (today.getMonth() >= dob.getMonth()) {
      if (today.getDate() >= dob.getDate()) {
        return today.getMonth() - dob.getMonth();
      } else {
        if (today.getMonth() - 1 >= dob.getMonth()) {
          return today.getMonth() - 1 - dob.getMonth();
        } else {
          return today.getMonth() - 1 + 12 - dob.getMonth();
        }
      }
    } else {
      if (today.getDate() >= dob.getDate()) {
        return today.getMonth() + 12 - dob.getMonth();
      } else {
        return today.getMonth() - 1 + 12 - dob.getMonth();
      }
    }
  })();
  year = (function () {
    if (dob.getMonth() == today.getMonth()) {
      if (dob.getDate() > today.getDate()) {
        return today.getFullYear() - 1 - dob.getFullYear();
      } else {
        return today.getFullYear() - dob.getFullYear();
      }
    } else {
      if (dob.getMonth() > today.getMonth()) {
        return today.getFullYear() - 1 - dob.getFullYear();
      } else {
        return today.getFullYear() - dob.getFullYear();
      }
    }
  })();
  HBD = (function () {
    if (today.getMonth() == dob.getMonth()) {
      if (today.getDate() == dob.getDate()) {
        disBD.innerHTML = "OMG it's your Birthday<br>Happy Birthday To You<br>";
      } else {
        disBD.innerHTML = '';
      }
    } else {
      disBD.innerHTML = '';
    }
  })();
  display.innerHTML =
    'Hi Dear ' +
    input[0].value +
    ', <br/>You are ' +
    year +
    ' Years, ' +
    month +
    ' Months, ' +
    day +
    ' Days, ';
  calTime = setInterval(samay, 1000);
}
button[0].onclick = calculate;
function reset() {
  input[0].focus();
  display.innerHTML = '';
  time.innerHTML = null;
  clearInterval(calTime);
  disBlock.style.display = 'none';
  creditBlock.style.display = 'none';
}
button[1].onclick = reset;
