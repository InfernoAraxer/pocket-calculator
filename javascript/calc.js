let str = ""; // Place holder for the string
let product = ""; // Product place holder for operations
let v = 0; //Used to indicate whether equals as hit last so it can reset
let x = 1; //Used to indicate whether equals was click twice in a row so the number being display is becing added, sutracted, multiplied, or divided more than once.
let y = 0; //Used as an indicator so there wouldn't be 2 decimals in a number being displayed
let r = 1; //Used as an indicator to see whether a factor 1 exists
let i = 0; //Used to indicate what was clicked last
let h = 0; //Used to hold that if ever an operation is clicked first then it won't break
let q = 0; //Used in comma conversion so it knows where the second comma is going to be placed
let s = 0; //Used to indicate what operation is clicked in the equals function
let a = [0, 0]; // Used to hold the parts of the string in comma conversion
let m = 0; //Holder for comma conversion if the number is negative
let z = 0; //Holder for comma conversion if the number has a decimal
let o = 0; //Used to indicate whether the number displayed is a factor or product for Negation and percent
let factor = []; //Array to hold factors
let operations = []; //Array to hold the operations
let products = []; //Array to hold the products to be displayed
let l = 0; //Place holder to progress the arrays shown in the three above
let j = ["+", "-", "*", "/"]; // Operations to be placed in the operations array
let k = 0; //Used to indicate that an operation needs to be place in the operation array
let side; //Used as random placeholder to store full equation when eval is going to be used
let n = 0; //used as place holder to get strings and numbers in the factor, and operation arrays to be place into the side placeholder
let c = ""; //Holder to display numbers when converted into scientific and/or commas
let f = 1; //Used to add parentheses around negative numbers so things like 5 - (-) 5 won't break

//Converts number into scientific notation if necessary
function convert(input) {
  input = Number(input);
  return(input.toPrecision(3));
}

//Convers number into commas if necessary
function commas(input) {
    input = input.toString();

    if (input.indexOf(".") > -1) {
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

//Types 0
function button0() {
  if (v == 0) {
    f = 1;
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
    h = 1;
    let p = document.getElementById("display");
    str += 0;

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    str = "";

  } else if (v > 0) {
    let p = document.getElementById("display");
    f = 1;
    str += "0";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      y = 0;;
      k = 0;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 1
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
    f = 1;
    h = 1;
    let p = document.getElementById("display");
    str += "1";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    f = 1;
    str += "1";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      y = 0;;
      k = 0;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 2
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
    f = 1;
    r = 1;
    h = 1;
    let p = document.getElementById("display");
    str += "2";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    f = 1;
    str += "2";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      y = 0;;
      k = 0;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 3
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
    f = 1;
    x = 1;
    y = 0;
    r = 1;
    h = 1;
    let p = document.getElementById("display");
    str += "3";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    str += "3";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    f = 1;
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      y = 0;;
      l++;
      if ((operations[0] == ("+" || "-")) && (operations[1] == ("+" || "-"))) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 4
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
    f = 1;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    h = 1;
    let p = document.getElementById("display");
    str += "4";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    f = 1;
    str += "4";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      y = 0;;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 5
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
    f = 1;
    n = 0;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    h = 1;
    let p = document.getElementById("display");
    str += "5";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    f = 1;
    str += "5";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      y = 0;;
      k = 0;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 6
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
    f = 1;
    str = "";
    i = 0;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    h = 1;
    let p = document.getElementById("display");
    str += "6";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    f = 1;
    str += "6";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      y = 0;;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 7
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
    f = 1;
    h = 1;
    let p = document.getElementById("display");
    str += "7";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    f = 1;
    str += "7";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      y = 0;;
      k = 0;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 8
function button8() {
  if (v == 0) {
    q = 0;
    o = 0;
    factor = [];
    operations = [];
    products = [];
    f = 1;
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
    h = 1;
    let p = document.getElementById("display");
    str += "8";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    f = 1;
    str += "8";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      y = 0;;
      k = 0;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Types 9
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
    f = 1;
    product = "";
    x = 1;
    y = 0;
    r = 1;
    h = 1;
    let p = document.getElementById("display");
    str += "9";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;
    v++;

  } else {
    let p = document.getElementById("display");
    f = 1;
    str += "9";

    if (str % 1 != 0 && str.length > 10) {
      if (str > 0) {
        str = str.substring(0,10);
      } else {
        str = str.substring(0,11);
      }
    }

    if (str % 1 == 0 && str.length > 9) {
      if (str > 0) {
        str = str.substring(0,9);
      } else {
        str = str.substring(0,10);
      }
    }

    let u = commas(str);
    p.innerHTML = u;

    if (k == 1) {
      operations[l] = j[i-1];
      k = 0;
      y = 0;;
      l++;
      if (operations[0] == ("+" || "-") && operations[1] == ("+" || "-")) {
        factor = [product]
        operations.pop();
        l--;
      }
    }
  }
}

//Adds Numbers
function add() {
  switch (h) {
    case 0:
      break;

    case 1:
      s = 1;

      if (f == 1 && str < 0) {
        str = "( " + str + " )";
        f++;
      }

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

//Subtracts Numbers
function subtract() {
  switch (h) {
    case 0:
      break;
    case 1:
      s = 2;

    if (f == 1 && str < 0) {
      str = "(" + str + ")";
      f++;
    }

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

//Multiplies Numbers
function multiply() {
  switch (h) {
    case 0:
      break;

    case 1:
      s = 3;

      if (f == 1 && str < 0) {
        str = "(" + str + ")";
        f++;
      }

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

        side = factor[0];
        let n = 0;
        for (let b = 0; b < operations.length; b++) {
          side += operations[n] + factor[n+1];
          n++;
        }
        product = eval(side);

        let u = (products[1]) ? commas(products[l]) : product;
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

//Divides Numbers
function divide() {
  switch (h) {

    case 0:
      break;

    case 1:
      s = 4;

      if (f == 1 && str < 0) {
        str = "(" + str + ")";
        f++;
      }

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

        side = factor[0];
        let n = 0;
        for (let b = 0; b < operations.length; b++) {
          side += operations[n] + factor[n+1];
          n++;
        }
        product = eval(side);

        let u = (products[1]) ? commas(products[l]) : product;
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
          h = 1;
          if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
          if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
          p.innerHTML = "Error";
          v++;
        }
      }
      i = 4;
      s = 0;
  }
}

//Adds a decimal if one isn't present already
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
      let u = commas(str);
      p.innerHTML = u + 0;

      v++;
    }
  }
}

//
function equal() {
  switch (h) {
    case 0:
      break;

    case 1:
      let p = document.getElementById("display");

      switch (i) {
        //Addition counterpart of equals
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
            factor = [factor[0], factor[1]]
            }

            let u = commas(product);
            product = product.toString();
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;
            str = "";
            x++;
            v = 0;
            o = 1;
            y = 1;
          } else {
            product = (factor[l] + factor[l+1]);
            product = product.toString();
            let u = commas(product);
            product = product.toString();
            if (product > 999999999 || product < -999999999 || (product % 1 == 0 && product.length > 10) || product.length > 10) u = convert(product);
            p.innerHTML = u;
            product = Number(product);
            factor[l] = product;
            str = "";
            v = 0;
            o = 1;
            x++;
            y = 1;
          }
          break;
        // Subtraction Counterpart for equal Function
        case 2:

          if (f == 1 && str < 0) {
            str = "(" + str + ")";
            f++;
          }

            if (x < 2) {

            if (str && f == 1) {
              factor[l] = Number(str);
            } else {
              factor[l] = str;
            }

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
            operations = []
            factor = [factor[0], factor[1]]
            }

            let u = commas(product);
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;
            str = "";
            v = 0;
            o = 1;
            x++;
            y = 1;
          } else {
            product = (factor[l] - factor[l+1]);
            product = product.toString();
            let u = commas(product);
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;
            product = Number(product);
            factor[l] = product;
            str = "";
            v = 0;
            x++;
            o = 1;
            y = 1;
          }
          break;
        //Multiplication Counterpart for Equal Function
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
              operations = []
              factor = [factor[0], factor[1]]
              }


              product = (product) ? product.toString() : factor[l];
              products[l] = (product) ? product.toString() : factor[l];
              let u = commas(product);
              if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
              p.innerHTML = u;
              str = "";
              o = 1;
              v = 0;
              x++;
              y = 1;
          } else {
            product = (factor[l] * factor[l+1]);
            product = product.toString();
            let u = commas(product);
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;
            product = Number(product);
            factor[l] = product;
            str = "";
            v = 0;
            o = 1;
            x++;
            y = 1;
          }
          break;
        //Division Counterpart for the Equal function
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
            operations = []
            factor = [factor[0], factor[1]]
            }

            product = (product) ? product.toString() : factor[l];
            products[l] = (product) ? product.toString() : factor[l];

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
              h = 1;
              if (str % 1 != 0 && str.length > 10) str = str.substring(0,10);
              if (str % 1 == 0 && str.length > 9) str = str.substring(0,9);
              p.innerHTML = "Error";
              v++;

            } else {
              let u = commas(product);
              if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
              p.innerHTML = u;
              product = Number(product);
              products[l] = product.toString();
              str = "";
              v = 0;
              o = 1;
              x++;
              y = 1;
            }

          } else {
            product = (factor[l] / factor[l+1]);
            product = product.toString();
            let u = commas(product);
            if (product > 999999999 || product < -999999999 || product.length > 10) u = convert(product);
            p.innerHTML = u;
            product = Number(product);
            factor[l] = product;
            str = "";
            v = 0;
            o = 1;
            x++;
            y = 1;
          }
          break;
        default:
          p.innerHTML = str;
          break;
    }
  }
}

//Clears the Calculator
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

//multiplies the number by -1 and if the number is a product then the calculator will sort of reset
function positiveAndNegative() {
  let p = document.getElementById("display");
  switch (o) {
    case 0:
      str = Number(str);
      str = (str*(-1));
      str = str.toString();
      let u = commas(str);
      if (str > 999999999 || str < -999999999 || str.length > 10) u = convert(str);
      p.innerHTML = u;
      str = str.toString();
      break;
    case 1:
      product = Number(product);
      product = (product * (-1));
      product = product.toString();
      c = commas(product);
      if (product > 999999999 || product < -999999999 || product.length > 10) c = convert(product);
      p.innerHTML = c;
      product = product.toString();
      l = 0
      factor[l] = product;
      operations = []
      o = 1;
      v = 0;
      break;
    default:
      break;
  }
}

//Just divides by 100 but if it's a product, the next number clicked would kind of reset the calculator
function percent() {
  let p = document.getElementById("display");
  switch (o) {
    case 0:
      str = Number(str);
      str = (str / (100));
      str = str.toString();
      let u = commas(str);
      if (str > 999999999 || str < -999999999 || str.length > 10) u = convert(str);
      p.innerHTML = u;
      break;
    case 1:
      product = Number(product);
      product = (product * (0.01));
      product = product.toString();
      let c = commas(product);
      if (product > 999999999 || product < -999999999 || product.length > 10) c = convert(product);
      p.innerHTML = c;
      l = 0;
      factor[l] = product;
      operations = [];
      o = 1;
      v = 0;
      break;
    default:
      break;
  }
}
