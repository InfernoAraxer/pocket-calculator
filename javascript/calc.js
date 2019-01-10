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
let q = 0;

/* let num = "040000.0000000";
num = Number(num);
num = num.toString();
console.log(num);
console.log(num.length);
let number = ".000004";
number = Number(number);
number = number.toString();
console.log(number);
console.log(number.length);
*/

function convert() {

  /*
  if (product > 1) {
    let length = product.length - 1;
    product = product/(10 ** length);
    product = product.toFixed(2);
    product = product*(10 ** length);
    product = product.toString();
    product = Number(product);
    product = product.toExponential();
  } else if (product < 1) {
    product = Number(product);
    console.log(product);
    product = product.toFixed(10);
    console.log(product);
    product = Number(product);
    product = product.toExponential();
  }
*/
}

//Eval()
//toPrecision(<number of decimals for exponential>)
let a;
let p;
let z;

function commas(input) {
  if (input % 1 != 0) {
    a = input.split(".");
    z = "1";
  }
  if (a[0] < 0) {
    a[0] = (a[0] * -1);
    p = 1
    a[0] = a[0].toString();
  }
loop2:
  if (a[0].length > 3) {
    if (a[0].length % 3 == 0) {
      q = 0;
      a[0] = [a[0].slice(0, 3), ",", a[0].slice(3)].join('');
      break loop2;
    }
    if (a[0].length % 3 == 1) {
      q = 1
      a[0] = [a[0].slice(0, 1), ",", a[0].slice(1)].join('');
      break loop2;
    }
    if (a[0].length % 3 == 2) {
      q = 2;
      a[0] = [a[0].slice(0, 2), ",", a[0].slice(2)].join('');
      break loop2;
    }
  }
loop3:
  if (a[0].length > 0) {
    if (q == 0) {
      a[0] = [a[0].slice(0, 7), ",", a[0].slice(7)].join('');
      break loop3;
    }
    if (q == 1) {
      a[0] = [a[0].slice(0, 8), ",", a[0].slice(8)].join('');
      break loop3;
    }
    if (q == 2) {
      a[0] = [a[0].slice(0, 9), ",", a[0].slice(9)].join('');
      break loop3;
    }
  }
  console.log(a[0]);
}
let b = "-1111114.555"
commas(b);


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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    str = "";
  } else if (v > 0) {
    let p = document.getElementById("display");
    str += "0";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "1";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "2";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "3";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "4";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "5";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "6";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "7";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    console.log(w);
    v++;
  } else {
    let p = document.getElementById("display");
    str += "8";
    if(str.length > 10) str = str.substring(0,9);
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
    if(str.length > 10) str = str.substring(0,9);
    p.innerHTML = str;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "9";
    if (str.length > 10) str = str.substring(0,9);
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
        if (product.length > 10) convert();
      } else {
        let p = document.getElementById("display");
        if (x < 2) equal();
        p.innerHTML = product;
        str = "";
        x = 1;
        v = 1;
        if (product.length > 10) convert();
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
        if (product.length > 10) convert();
      } else {
        let p = document.getElementById("display");
        if (x < 2) equal();
        p.innerHTML = product;
        str = "";
        x = 1;
        v = 1;
        if (product.length > 10) convert();
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
            product = product.toString();
            if (product.length > 10) convert();
            p.innerHTML = product;
            product = Number(product);
            factor1 = product;
            str = "";
            x++;
            v = 0;
          } else {
            product = (factor1 + factor2);
            product = product.toString();
            if (product.length > 10) convert();
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
            if (product.length > 10) convert();
            p.innerHTML = product;
            product = Number(product);
            factor1 = product;
            str = "";
            v = 0;
            x++;
          } else {
            product = (factor1 - factor2);
            product = product.toString();
            if (product.length > 10) convert();
            if (product.length > 10) convert();
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
            if (product.length > 10) convert();
            console.log(product);
            p.innerHTML = product;
            product = Number(product);
            factor1 = product;
            str = "";
            v = 0;
            x++;
          } else {
            product = (factor1 * factor2);
            product = product.toString();
            if (product.length > 10) convert();
            console.log(product);
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
            console.log(factor1);
            factor2 = Number(str);
            console.log(factor2);
            product = (factor1 / factor2);
            product = product.toString();
            if (product.length > 10) convert();
            console.log(product);
            p.innerHTML = product;
            product = Number(product);
            factor1 = product;
            str = "";
            v = 0;
            x++;
          } else {
            product = (factor1 / factor2);
            product = product.toString();
            if (product.length > 10) convert();
            console.log(product);
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
  str = (str*(-1));
  p.innerHTML = str;
  str = str.toString();
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
//Scientific notation in general
//Error when clicking one of the operations first and in general
// Chaining Operations you need order of Operations
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
