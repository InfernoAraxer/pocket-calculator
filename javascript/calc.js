let str = "";
let i = 0;
let j = 1;
let product = "";
let factor1 = "";
let factor2 = "";
let v = 0;
let x = 1;
let y = 0;
let r = 1;
let w = 0;


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
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += 0;
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    v++;
  } else if (w > 0) {
    let p = document.getElementById("display");
    str += "0";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button1() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "1";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "1";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button2() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "2";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "2";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button3() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "3";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "3";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button4() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "4";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "4";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button5() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "5";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "5";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button6() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "6";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "6";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button7() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "7";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "7";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button8() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = 0;
    let factor1 = 1;
    let factor2 = 0;
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "8";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "8";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function button9() {
  if (v == 0) {
    let i = 0;
    let j = 1;
    let product = "";
    let factor1 = "";
    let factor2 = "";
    let x = 1;
    let y = 0;
    let r = 1;
    let w = 0;
    let p = document.getElementById("display");
    str += "9";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
    console.log(product);// What is WRONG WITH THIS?
  } else {
    console.log(product);//RRANDOM STUFF OUT OF NOWHERE
    let p = document.getElementById("display");
    str += "9";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    console.log(product);
  }
}

function add() {
  if (r < 2) {
    console.log(factor1, str);
    let p = document.getElementById("display");
    factor1 = Number(str);
    console.log(str);
    p.innerHTML = str;
    str = "";
    r++;
    console.log(r);
    x = 1;
    v = 1;
  } else {
    let p = document.getElementById("display");
    if (x < 2) equal();
    p.innerHTML = product;
    str = "";
    x = 1;
    v = 1;
  }
  i = 1;
}

function subtract() {
  if (r < 2) {
    let p = document.getElementById("display");
    factor1 = Number(str);
    p.innerHTML = str;
    str = "";
    r++;
    console.log(x , r);
    v = 1;
    x = 1;
  } else {
    let p = document.getElementById("display");
    if (x < 2) equal();
    p.innerHTML = product;
    str = "";
    x = 1;
    v = 1;
  }
  i = 2;
}

function multiply() {

  if (r < 2) {
    let p = document.getElementById("display");
    factor1 = Number(str);
    console.log(str);
    p.innerHTML = str;
    str = "";
    x = 1;
    v = 1;
    r++;
    console.log(x , r);
  } else {
    console.log(x, r, product, str);
    let p = document.getElementById("display");
    console.log(product);
    if (x < 2) equal();
    console.log(product);
    p.innerHTML = product;
    str = "";
    x = 1;
    v = 1;
  }
  i = 3;
}

function divide() {
  if (r < 2) {
    let p = document.getElementById("display");
    factor1 = Number(str);
    p.innerHTML = str;
    str = "";
    x = 1;
    v = 1;
    r++;
    console.log(r);
  } else {
    let p = document.getElementById("display");
    if (x < 2) equal();
    p.innerHTML = product;
    str = "";
    x = 1;
    v = 1;
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

// fix?
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
        v = 0;
      } else {
        product = (factor1 + factor2);
        product = product.toString();
        p.innerHTML = product;
        product = Number(product);
        factor1 = product;
        str = "";
        v = 0;
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
        v = 0;
        x++;
      } else {
        product = (factor1 - factor2);
        product = product.toString();
        p.innerHTML = product;
        product = Number(product);
        factor1 = product;
        str = "";
        v = 0;
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
        v = 0;
        x++;
      } else {
        product = (factor1 * factor2);
        product = product.toString();
        p.innerHTML = product;
        product = Number(product);
        factor1 = product;
        str = "";
        v = 0;
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
        v = 0;
        x++;
      } else {
        product = (factor1 / factor2);
        product = product.toString();
        p.innerHTML = product;
        product = Number(product);
        factor1 = product;
        str = "";
        v = 0;
        x++;
      }
      break;
    default:
      p.innerHTML = str;
      break;
  }
}

function allClear() {
  let p = document.getElementById("display");
  let product = "";
  let factor1 = "";
  let factor2 = "";
  let str = 0;
  p.innerHTML = str;
  str = "";
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
  if (factor1 == 0) {
    str = (Number(str)/100); //
    p.innerHTML = str;
    str = "";
  } else {
    percent = (Number(str)/100); //.3
    str = (factor1 * percent) //30
    equal();
  }
}

//Need to Have or fix

//Commas
//Exponential or scientific notation
//Error when clicking one of the operations first and in general
//Chained operations - Test it more later
//Maybe positive and Negative with product
/*
Powers x2, x3, and xy)
Roots (√x, 3√x, and y√x)
Factorial (x!)
Constants (π)
Trigonometry (sin, cos, and tan)
*/
