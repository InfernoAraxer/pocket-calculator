let str = "";
let product = "";
let factor1 = "";
let factor2 = "";
let v = 0;
let x = 1;
let y = 0;
let r = 1;
let w = 0;
let i = 0;
let h = 0;

let num = "0.0000004";
let number = ".0000004";
console.log(num.length, number.length);

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
  console.log(w);
  if (v == 0) {
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    let p = document.getElementById("display");
    str += 0;
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    str = "";
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    y = 0;
    h = 1;
    r = 1;
    w = 0;
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    y = 0;
    h = 1;
    r = 1;
    w = 0;
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    y = 0;
    h = 1;
    r = 1;
    w = 0;
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    h = 1;
    y = 0;
    r = 1;
    w = 0;
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    y = 0;
    h = 1;
    r = 1;
    w = 0;
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    y = 0;
    h = 1;
    r = 1;
    w = 0;
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    y = 0;
    h = 1;
    r = 1;
    w = 0;
    let p = document.getElementById("display");
    str += "8";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    console.log(w);
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
    i = 0;
    product = "";
    factor1 = "";
    factor2 = "";
    x = 1;
    h = 1;
    y = 0;
    r = 1;
    w = 0;
    let p = document.getElementById("display");
    str += "9";
    if(str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "9";
    if (str.length > 10) str = str.substring(0,10);
    p.innerHTML = str;
    w++;
  }
}

function add() {
  switch (h) {
    case 0:
      break;
    case 1:
      if (r < 2) {
        let p = document.getElementById("display");
        factor1 = Number(str);
        p.innerHTML = str;
        str = "";
        r++;
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
    default:
      break;
  }
}

function subtract() {

  switch (h) {
    case 0:
      break;
    case 1:
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
}

function multiply() {

  switch (h) {
    case 0:
      break;
    case 1:
      if (r < 2) {
        let p = document.getElementById("display");
        factor1 = Number(str);
        p.innerHTML = str;
        str = "";
        x = 1;
        v = 1;
        r++;
      } else {
        let p = document.getElementById("display");
        if (x < 2) equal();
        p.innerHTML = product;
        str = "";
        x = 1;
        v = 1;
      }
      i = 3;
  }
}

function divide() {

  switch (h) {
    case 0:
      break;
    case 1:
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
}

function decimal() {
  if (y < 1 && str % 1 == 0 && str.length < 10) {
    y++
    let p = document.getElementById("display");
    str += ".";
    p.innerHTML = str;
    w++;
  }
}

// fix?
function equal() {
  switch (h) {
    case 0:
      break;
    case 1:
      let p = document.getElementById("display");
      switch (i) {
        case 1:
          if (x < 2) {
            factor2 = Number(str);
            product = (factor1 + factor2);
            if(product.length > 10) product = product.toExponential();
            product = product.toString();
            p.innerHTML = product;
            product = Number(product);
            factor1 = product;
            str = "";
            x++;
            v = 0;
          } else {
            product = (factor1 + factor2);
            if(product.length > 10) product = product.toExponential();
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
            if(product.length > 10) product = product.toExponential();
            product = product.toString();
            p.innerHTML = product;
            product = Number(product);
            factor1 = product;
            str = "";
            v = 0;
            x++;
          } else {
            product = (factor1 - factor2);
            if(product.length > 10) product = product.toExponential();
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
            if (product.length > 10) {
               product = Number(product);
               product = product.toExponential();
               //console.log(typeof(product));
               product = Number(product);
               console.log(product);
               product = product.toFixed(5);
               console.log(product);
               product = product.substring(0,10);
            }
            p.innerHTML = product;
            product = Number(product);
            factor1 = product;
            str = "";
            v = 0;
            x++;
          } else {
            product = (factor1 * factor2);
            product = product.toString();
            if(product.length > 10) product = product.toExponential();
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
            if(product.length > 10) product = product.toExponential();
            product = product.toString();
            p.innerHTML = product;
            product = Number(product);
            factor1 = product;
            str = "";
            v = 0;
            x++;
          } else {
            product = (factor1 / factor2);
            if(product.length > 10) product = product.toExponential();
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
}

function allClear() {
  let p = document.getElementById("display");
  product = "";
  factor1 = "";
  factor2 = "";
  //let str = 0;
  p.innerHTML = 0;
  str = "";
  i = 0;
  v = 0;
  x = 1;
  y = 0;
  r = 1;
  w = 0;
}

//fix
function positiveAndNegative() {
  let p = document.getElementById("display");
  str = Number(factor1);
  str = (str*(-1));
  p.innerHTML = str;
  str = toString(str);
  r = 1;
  v = 0;
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
    console.log(percent);
    product = (factor1 * percent);//30
    p.innerHTML = product;
    factor1 = Number(product);
    str = "";
    x++;
    v = 0;
  }
}

//Need to Have or fix

//Commas
//Exponential or scientific notation 2 decimal places
//Error when clicking one of the operations first and in general
//Chained operations - Test it more later
//Percantage + Negation Chain
//Fix 0
//Clicking 0 or a number after clicking equals on a string

/*
Powers x2, x3, and xy)
Roots (√x, 3√x, and y√x)
Factorial (x!)
Constants (π)
Trigonometry (sin, cos, and tan)
*/
