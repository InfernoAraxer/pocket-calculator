let str = "";
let i = 0;
let j = 1;
let product = 0;
let factor1 = 1;
let factor2 = 0;
let counter = 1;
let x = 1;
let y = 0;
let z = 1;

function convert() {
  if (product > 1) {
    product = product/(10 ** (product.length - 1));
    product = product.toString();
    let parts = product.split(".");
    console.log(parts[1], parts[0]);
    parts[1] = parts[1]/(10 ** (parts[1].length));
    let x = Number(parts[1]);
    parts[1] = x.toFixed(5);
    console.log(parts[1]);
    product = parts[0] + parts[1] + "e+" + (product.length - 1);
    console.log(product);
    product = Number(product);
  } else {
    product = product*(10 ** (product.length + 1));
    let parts = []
    parts = product.slice(".");
    parts[1] = parts[1].toFixed(5);
    product = parts[0] + "." + parts[2] + "e-" + (product.length + 1);
  }
}

function button0() {
  let p = document.getElementById("display");
  str += "0";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button1() {
  let p = document.getElementById("display");
  str += "1";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button2() {
  let p = document.getElementById("display");
  str += "2";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button3() {
  let p = document.getElementById("display");
  str += "3";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button4() {
  let p = document.getElementById("display");
  str += "4";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button5() {
  let p = document.getElementById("display");
  str += "5";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button6() {
  let p = document.getElementById("display");
  str += "6";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button7() {
  let p = document.getElementById("display");
  str += "7";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button8() {
  let p = document.getElementById("display");
  str += "8";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function button9() {
  let p = document.getElementById("display");
  str += "9";
  if(str.length > 10) str = str.substring(0,10);
  p.innerHTML = str;
}

function add() {
  if (z < 2) {
    let p = document.getElementById("display");
    factor1 = Number(str);
    p.innerHTML = str;
    str = "";
    z++;
    x = 1;
  } else {
    let p = document.getElementById("display");
    if (x < 2) equal();
    p.innerHTML = product;
    str = "";
    x = 1;
  }
  i = 1;
}

function subtract() {
  if (z < 2) {
    let p = document.getElementById("display");
    factor1 = Number(str);
    p.innerHTML = str;
    str = "";
    z++;
    x = 1;
  } else {
    let p = document.getElementById("display");
    if (x < 2) equal();
    p.innerHTML = product;
    str = "";
    x = 1;
  }
  i = 2;
}

function multiply() {

  if (z < 2) {
    let p = document.getElementById("display");
    factor1 = Number(str);
    p.innerHTML = str;
    str = "";
    z++;
    x = 1;
  } else {
    let p = document.getElementById("display");
    if (x < 2) equal();
    p.innerHTML = product;
    str = "";
    x = 1;
  }
  i = 3;
}

function divide() {

  if (z < 2) {
    let p = document.getElementById("display");
    factor1 = Number(str);
    p.innerHTML = str;
    str = "";
    z++;
    x = 1;
  } else {
    let p = document.getElementById("display");
    if (x < 2) equal();
    p.innerHTML = product;
    str = "";
    x = 1;
  }
  i = 4;
}

function decimal() {
  if (y < 1 && str % 1 == 0 && str.length < 10) {
    y++
    let p = document.getElementById("display");
    str += ".";
    p.innerHTML = str;
  }
}

// fix
function equal() {
  let p = document.getElementById("display");
  switch (i) {
    case 1:
      if (x < 2) {
        factor2 = Number(str);
        product = (factor1 + factor2);
        product = product.toString();
        p.innerHTML = product;
        product = Number(product);
        factor1 = product;
        str = "";
        x++;
      } else {
        product = (factor1 + factor2);
        product = product.toString();
        p.innerHTML = product;
        product = Number(product);
        factor1 = product;
        str = "";
        x++;
      }
      break;
    case 2:
      if (x < 2) {
        factor2 = Number(str);
        product = (factor1 - factor2);
        product = product.toString();
        p.innerHTML = product;
        product = Number(product);
        factor1 = product;
        str = "";
        x++;
      } else {
        product = (factor1 - factor2);
        product = product.toString();
        p.innerHTML = product;
        product = Number(product);
        factor1 = product;
        str = "";
        x++;
      }
      break;
    case 3:
    if (x < 2) {
      factor2 = Number(str);
      product = (factor1 * factor2);
      product = product.toString();
      p.innerHTML = product;
      product = Number(product);
      factor1 = product;
      str = "";
      x++;
    } else {
      product = (factor1 * factor2);
      product = product.toString();
      p.innerHTML = product;
      product = Number(product);
      factor1 = product;
      str = "";
      x++;
    }
      break;
    case 4:
    if (x < 2) {
      factor2 = Number(str);
      product = (factor1 / factor2);
      product = product.toString();
      p.innerHTML = product;
      product = Number(product);
      factor1 = product;
      str = "";
      x++;
    } else {
      product = (factor1 / factor2);
      product = product.toString();
      p.innerHTML = product;
      product = Number(product);
      factor1 = product;
      str = "";
      x++;
    }
      break;
    default:
      p.innerHTML = str;
      break;
  }
}
//fix
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
  str = 0;
}
//fix
function positiveAndNegative() {
  let p = document.getElementById("display");
  str = (str*(-1));
  p.innerHTML = str;
}
//fix
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

//Need to Have or fix
//Commas
//Exponential or scientific notation
//Error when clicking one of the operations first and in general
//Fix 0 spam
//Chained operations - Test it more later
//Maybe positive and Negative
//All Clear
/*
Powers x2, x3, and xy)
Roots (√x, 3√x, and y√x)
Factorial (x!)
Constants (π)
Trigonometry (sin, cos, and tan)
*/
