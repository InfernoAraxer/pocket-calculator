let str = "";
let product = "";
let v = 0;
let x = 1;
let y = 0;
let r = 1;
let w = 0;
let i = 0;
let h = 0;
let q = 0;
let a = [0, 0];
let m = 0;
let z = 0;
let o = 0;
let factor = [];
let operations = [];
let products = [];
let l = 0;
let j = ["+", "-", "*", "/"];
let k = 0;
let side;
let n = 0;

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

function convert(input) {

  input = Number(input);
  return(input.toPrecision(3));

}

//Eval()
//toPrecision(<number of sigfigs for exponential>)


function commas(input) {
    if (input % 1 != 0) {
      input = input.toString();
      a = input.split(".");
      z = 1;
    } else {
      input = input.toString();
      a[0] = input;
    }
    if (a[0] < 0) {
      a[0] = Number(a[0]);
      a[0] = (a[0] * -1);
      a[0] = a[0].toString();
      m = 1;
    }
    if (a[0].length > 3) {
      q = a[0].length % 3;
      if (a[0].length > 6) {
        switch (a[0].length % 3) {
          case 0:
            a[0] = [a[0].slice(0, 6), ",", a[0].slice(6)].join('');
            break;
          case 1:
            a[0] = [a[0].slice(0, 4), ",", a[0].slice(4)].join('');
            break;
          case 2:
            a[0] = [a[0].slice(0, 5), ",", a[0].slice(5)].join('');
            break;
          default:
            break;
        }
      }
      switch (q) {
        case 0:
          a[0] = [a[0].slice(0, 3), ",", a[0].slice(3)].join('');
          break;
        case 1:
          a[0] = [a[0].slice(0, 1), ",", a[0].slice(1)].join('');
          break;
        case 2:
          a[0] = [a[0].slice(0, 2), ",", a[0].slice(2)].join('');
          break;
        default:
          break;
      }
  }
  let x = a[0];
  input = a[0];
  if (z == 1) a[0] = x + "." + a[1], input = a[0];
  if (m == 1) input = "-" + a[0];
  z = 0;
  m = 0;
  a = ["", ""];
  return(input);
}

function button0() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += 0;
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    str = "";
  } else if (v > 0) {
    let p = document.getElementById("display");
    str += "0";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button1() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "1";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "1";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button2() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "2";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "2";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button3() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "3";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "3";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button4() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "4";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "4";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button5() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "5";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "5";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button6() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "6";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "6";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button7() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "7";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "7";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button8() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "8";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "8";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function button9() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    l = 0;
    k = 0;
    side = 0;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    w = 0;
    h = 1;
    let p = document.getElementById("display");
    str += "9";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    v++;
  } else {
    let p = document.getElementById("display");
    str += "9";
    if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
    if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
    let u = commas(str);
    p.innerHTML = u;
    w++;
    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      l++;
    }
  }
}

function add() {
  switch (h) {
    case 0:
      break;
    case 1:
      s = 1;
      if (r < 2) {
        let p = document.getElementById("display");
        factor[l] = Number(str);
        let u = commas(str);
        p.innerHTML = u;
        str = "";
        r++;
        x = 1;
        v = 1;
        o = 0;
        k = 1;

      } else {
        let p = document.getElementById("display");
        if (x < 2) equal();

        side = factor[0];
        let n = 0;
        for (let b = 0; b < operations.length; b++) {
          side += operations[n] + factor[n+1];
          n++;
        }
          product = eval(side);

        let u = commas(product);
        if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
        p.innerHTML = u;
        str = "";
        x = 1;
        o = 0;
        k = 1;
        v = 1;
      }
      s = 0;
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
      s = 2;
      if (r < 2) {
        let p = document.getElementById("display");
        factor[l] = Number(str);
        let u = commas(str);
        p.innerHTML = u;
        str = "";
        r++;
        v = 1;
        o = 0;
        k = 1;
        x = 1;

      } else {
        let p = document.getElementById("display");
        if (x < 2) equal();
        side = factor[0];
        let n = 0;
        for (let b = 0; b < operations.length; b++) {
          side += operations[n] + factor[n+1];
          n++;
        }
        product = eval(side);
        let u = commas(product);
        if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
        p.innerHTML = u;
        str = "";
        x = 1;
        o = 0;
        k = 1;
        v = 1;
      }
      s = 0;
      i = 2;
  }
}

function multiply() {

  switch (h) {
    case 0:
      break;
    case 1:
      s = 3;
      if (r < 2) {
        let p = document.getElementById("display");
        factor[l] = Number(str);
        let u = commas(str);
        p.innerHTML = u;
        str = "";
        x = 1;
        o = 0;
        v = 1;
        k = 1;
        r++;
      } else {
        let p = document.getElementById("display");
        if (x < 2) equal(); // lol
        let u = commas(product);
        if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
        p.innerHTML = u;
        str = "";
        x = 1;
        o = 0;
        k = 1;
        v = 1;
      }
      s = 0;
      i = 3;
  }
}

function divide() {

  switch (h) {
    case 0:
      break;
    case 1:
      s = 4;
      if (r < 2) {
        let p = document.getElementById("display");
        factor[l] = Number(str);
        let u = commas(str);
        p.innerHTML = u;
        str = "";
        x = 1;
        o = 0;
        v = 1;
        k = 1;
        r++;
      } else {
        let p = document.getElementById("display");
        if (x < 2) equal();
        let u = commas(product);
        if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
        p.innerHTML = u;
        str = "";
        x = 1;
        o = 0;
        k = 1;
        v = 1;
        if (!isFinite(product)) {
          let p = document.getElementById("display");
          q = 0;
          o = 0;
          factor = [];
          operations = [];
          products = [];
          l = 0;
          k = 0;
          side = 0;
          n = 0;
          str = "";
          i = 0;
          product = "";
          x = 1;
          y = 0;
          r = 1;
          w = 0;
          h = 1;
          if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
          if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
          p.innerHTML = "Error";
          w++;
          v++;
        }
      }
      i = 4;
      s = 0;
  }
}

function decimal() {
  if (y < 1 && str % 1 == 0 && str.length < 10) {
    y++;
    let p = document.getElementById("display");
    if (!str) {
      str = ".";
      str = "0" + str;
      p.innerHTML = str + 0;
      v++;
      h = 1;
    } else {
      str += ".";
      p.innerHTML = str + 0;
      w++;
      v++;
    }
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
            if (str) factor[l] = Number(str);
            product = factor[l-1] + factor[l];
            if (s == 3 || s == 4) product = factor[l];
            if (str) products[l] = product.toString();

            if (s == 3 || s == 4) {
              factor[l] = product;
            }

            if (s == 0) {
            side = factor[0];
            let n = 0;
              for (let b = 0; b < operations.length; b++) {
                side += operations[n] + factor[n+1];
                n++;
              }
            product = eval(side);
            l = 0;
            factor[l] = product;
            operations = []
            }

            let u = commas(product);
            product = product.toString();
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;

            str = "";
            x++;
            v = 0;
            o = 1;
          } else {
            product = (factor[l] + factor[l-1]);
            product = product.toString();
            let u = commas(product);
            product = product.toString();
            if (product > 999999999 || product < -999999999 || (product % 1 == 0 && product.length > 10) || product.length > 10) u = convert(product);
            p.innerHTML = u;
            product = Number(product);
            factor[l-1] = product;
            str = "";
            v = 0;
            o = 1;
            x++;
          }
          break;
        case 2:
          if (x < 2) {
            if (str) factor[l] = Number(str);
            product = factor[l-1] - factor[l];
            if (s == 3 || s == 4) product = factor[l];
            if (str) products[l] = product.toString();

            if (s == 3 || s == 4) {
              factor[l] = product;
            }

            if (s == 0) {
            side = factor[0];
            let n = 0;
              for (let b = 0; b < operations.length; b++) {
                side += operations[n] + factor[n+1];
                n++;
              }
            product = eval(side);
            l = 0;
            factor[l] = product;
            operations = [];
            }

            let u = commas(product);
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;

            str = "";
            v = 0;
            o = 1;
            x++;
          } else {
            product = (factor[l-1] - factor[l]);
            product = product.toString();
            let u = commas(product);
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;
            product = Number(product);
            factor[l-1] = product;
            str = "";
            v = 0;
            x++;
            o = 1;
          }
          break;
        case 3:
          if (x < 2) {
            if (str) factor[l] = Number(str);
            if (s == 3 || s == 4) product = (factor[l-1] * factor[l]);

            if ((operations[0] != "+" || operations[0] != "-")) {
              side = factor[1];
              let n = 1;
              for (let b = 1; b < operations.length; b++) {
                side += operations[n] + factor[n+1];
                n++;
              }
              product = eval(side);
            }

            if (s == 0) {
            side = factor[0];
            let n = 0;
              for (let b = 0; b < operations.length; b++) {
                side += operations[n] + factor[n+1];
                n++;
              }
            product = eval(side);
            l = 0;
            factor[l] = product;
            }
            products[l] = product.toString();
              let u = commas(product);
              if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
              p.innerHTML = u;
              product = Number(product);
              products[l] = product.toString();
              str = "";
              o = 1;
              v = 0;
              x++;

          } else {
            product = (factor[l] * factor[l-1]);
            product = product.toString();
            let u = commas(product);
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;
            product = Number(product);
            factor[l-1] = product;
            str = "";
            v = 0;
            o = 1;
            x++;
          }
          break;
        case 4:
          if (x < 2) {
            if (str.length != 0) factor[l] = Number(str);
            if (s == 3 || s == 4) product = (factor[l-1] / factor[l]);

            if ((operations[0] != "+" || operations[0] != "-")) {
              side = factor[1];
              let n = 1;
              for (let b = 1; b < operations.length; b++) {
                side += operations[n] + factor[n+1];
                n++;
              }
              product = eval(side);
            }

            if (s == 0) {
            side = factor[0];
            let n = 0;
              for (let b = 0; b < operations.length; b++) {
                side += operations[n] + factor[n+1];
                n++;
              }
            product = eval(side);
            l = 0;
            factor[l] = product;
            }
            console.log(!isFinite(product), product,side)
            if (!isFinite(product)) {
              let p = document.getElementById("display");
              q = 0;
              o = 0;
              factor = [];
              operations = [];
              products = [];
              l = 0;
              k = 0;
              side = 0;
              n = 0;
              str = "";
              i = 0;
              product = "";
              x = 1;
              y = 0;
              r = 1;
              w = 0;
              h = 1;
              if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
              if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
              p.innerHTML = "Error";
              w++;
              v++;
            } else {
              products[l] = product.toString();
              let u = commas(product);
              if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
              p.innerHTML = u;
              product = Number(product);
              products[l] = product.toString();
              str = "";
              v = 0;
              o = 1;
              x++;
            }

          } else {
            product = (factor[l-1] / factor[l]);
            product = product.toString();
            let u = commas(product);
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;
            product = Number(product);
            factor[l-1] = product;
            str = "";
            v = 0;
            o = 1;
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
  p.innerHTML = 0;
  str = "";
  i = 0;
  v = 0;
  x = 1;
  y = 0;
  r = 1;
  w = 0;
  h = 0;
  q = 0;
  o = 0;
  factor = [];
  operations = [];
  products = [];
  l = 0;
  k = 0;
  side = 0;
  n = 0;
}

//fix later
function positiveAndNegative() {
  let p = document.getElementById("display");
  switch (o) {
    case 0:
      str = (str*(-1));
      p.innerHTML = commas(str);
      str = str.toString();
    case 1:
      str = (product * (-1));
      let x = commas(str);
      p.innerHTML = x;
      str = str.toString();
      o = 0;
    default:
      break;
  }
}

//fix a little more
function percent() {
  let p = document.getElementById("display");
  if (!factor[l]) {
    str = Number(str);
    str = str/100;
    let u = str;
    if (str > 999 || str < -999) u = commas(str);
    str = str.toString();
    if (str > 999999999 || str < -999999999 || str.length > 10) u = convert(str);
    p.innerHTML = u;
    v = 0;
  } else if (x < 2) {
    percent = (Number(str)/100);
    factor[l-1] = Number(factor[l-1] * percent);
    if (x < 2) equal();
    let u = commas(product);
    str = str.toString();
    if (str > 999999999 || str < -999999999 || str.length > 10) u = convert(str);
    p.innerHTML = u;
    factor[l-1] = Number(product);
    str = "";
    x++;
    v = 0;
  } else {
    let p = document.getElementById("display");
    if (x < 2) equal();
    let u = commas(product);
    str = str.toString();
    if (str > 999999999 || str < -999999999 || str.length > 10) u = convert(str);
    p.innerHTML = u;
    str = "";
    x = 1;
    v = 1;
  }
}

//Need to Have or fix

// Chaining Operations you need order of Operations
//Percantage + Negation Chain
//Fix 0 ransome 0s befroe products or factors
//max number limit (negaton)

/*
Powers x2, x3, and xy)
Roots (√x, 3√x, and y√x)
Factorial (x!)
Constants (π)
Trigonometry (sin, cos, and tan)
*/
