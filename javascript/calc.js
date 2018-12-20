let str = "";
let i = 0;
let j = 1;
let product = 0;
let factor1 = 1;
let factor2 = 0;
let counter = 1;

function button0() {
  let p = document.getElementById("display");
  str += "0";
  p.innerHTML = str;
}

function button1() {
  let p = document.getElementById("display");
  str += "1";
  p.innerHTML = str;
}

function button2() {
  let p = document.getElementById("display");
  str += "2";
  p.innerHTML = str;
}

function button3() {
  let p = document.getElementById("display");
  str += "3";
  p.innerHTML = str;
}

function button4() {
  let p = document.getElementById("display");
  str += "4";
  p.innerHTML = str;
}

function button5() {
  let p = document.getElementById("display");
  str += "5";
  p.innerHTML = str;
}

function button6() {
  let p = document.getElementById("display");
  str += "6";
  p.innerHTML = str;
}

function button7() {
  let p = document.getElementById("display");
  str += "7";
  p.innerHTML = str;
}

function button8() {
  let p = document.getElementById("display");
  str += "8";
  p.innerHTML = str;
}

function button9() {
  let p = document.getElementById("display");
  str += "9";
  p.innerHTML = str;
}

function add() {
  let p = document.getElementById("display");
  factor1 = Number(str);
  p.innerHTML = str;
  str = "";
  i = 1;
}

function subtract() {
  let p = document.getElementById("display");
  factor1 = Number(str);
  p.innerHTML = str;
  str = "";
  i = 2;
}

function multiply() {
  let p = document.getElementById("display");
    factor1 = Number(str);
    p.innerHTML = str;
    str = "";
    i = 3;
}

function divide() {
  let p = document.getElementById("display");
  factor1 = Number(str);
  p.innerHTML = str;
  str = "";
  i = 4;
}

function equal() {
  let p = document.getElementById("display");
  switch (i) {
    case 1:
      factor2 = Number(str);
      product = (factor1 + factor2);
      p.innerHTML = product;
      factor1 = product;
      str = "";
      break;
    case 2:
      factor2 = Number(str);
      product = (factor1 - factor2);
      p.innerHTML = product;
      str = "";
      break;
    case 3:
      factor2 = Number(str);
      product = (factor1 * factor2);
      p.innerHTML = product;
      str = "";
      break;
    case 4:
      factor2 = Number(str);
      product = (factor1 / factor2);
      p.innerHTML = product;
      str = "";
      break;
    default:
      p.innerHTML = str;
      break;
  }
}

function allClear() {
  let p = document.getElementById("display");
  let str = 0;
  p.innerHTML = str;
  let i = 0;
  let j = 1;
  let product = 0;
  let factor1 = 1;
  let factor2 = 0;
  let counter = 1;
  str = "";
}

function positiveAndNegative() {
  let p = document.getElementById("display");
  str = (str*(-1));
  p.innerHTML = str;
}

function decimal() {
  let p = document.getElementById("display");
  str += ".";
  p.innerHTML = str;
}

function percent() {
  let p = document.getElementById("display");
  if (factor1 == 1) {
    str = (Number(str)/100); //
    p.innerHTML = str;
    str = "";
  } else {
    percent = (Number(str)/100); //.3
    str = (factor1 * percent) //30
    switch (i) {
      case 1:
        factor2 = str;
        product = (factor1 + factor2);
        p.innerHTML = product;
        factor1 = product;
        str = "";
        break;
      case 2:
        factor2 = str; //30
        product = (factor1 - factor2);
        p.innerHTML = product;
        str = "";
        break;
      case 3:
        factor2 = str;
        product = (factor1 * factor2);
        p.innerHTML = product;
        str = "";
        break;
      case 4:
        factor2 = str;
        product = (factor1 / factor2);
        p.innerHTML = product;
        str = "";
        break;
      default:
        p.innerHTML = str;
        break;
    }
  }
}
