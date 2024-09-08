====>>>> https://codepen.io/olahasan/pen/RwMvXjj
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-033-to-037/


first question

let num = 9; //you can change the value of num (9 / 20 / 110)
if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(` 0${num}`);
} else if (num >= 100) {
  console.log(num);
}
////////////////////////////////////////////////////////////////////////////////
second question

let num1 = 9;
let str = "9";
let str2 = "20";

// 1
// السطر الأول إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني
if(num1 == str){
    console.log(`"${"{num1}"} Is The Same Value As ${"{str}"}"`);
}

// 2
// السطر الثاني إذا كانت قيمة المتغير الأول هي نفس قيمة المتغير الثاني ولكن النوع مختلف
if(num1 == str && num1 !== str && typeof num1 != typeof str){
    console.log(`"${"{num1}"} Is The Same Value As ${"{str}"} But Not The Same Type"`);
}

//3
// السطر الثالث إذا كانت قيمة المتغير الأول ليست نفس قيمة المتغير الثالث وليست ايضا نفس النوع
if(num1 != str2  && typeof num1 != typeof str2){
    console.log(`"${"{num1}"} Is Not The Same Value Or The Same Type As ${"{str2}"}"`);
}

//4
// السطر الرابع إذا كانت قيمة المتغير الثاني لا تساوي المتغير الثالث ولكنهم نفس النوع
if(str != str2 && typeof str == typeof str2 ){
    console.log(`"${"{str}"} Is The Same Type As ${"{str2}"} But Not The Same Value"`);
}

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
////////////////////////////////////////////////////////////////////////////////
third question

let num1 = 10;
let num2 = 30;
let num3 = "30";

// 1
// السطر الأول تأكد أن المتغير الثالث أكبر من الأول ولا يساوي الثاني في النوع
if((num3 > num1) && (num3 !== num2) ){
    console.log(`"${num3} Is Larger Than ${num1} And Type string Not The Same Type As number"`)
}

//2
// السطر الثاني تأكد أن المتغير الثالث أكبر من الأول ومساوي للثاني في القيمة ولا يساوي الثاني في النوع
if((num3 > num1) && (num3 == num2) && (num3 !== num2)){
    console.log(`"${num3} Is Larger Than ${num1} And Value Is The Same As ${num3} And Type string Not The Same Type As number"
    `);
}

// 3
// السطر الثالث تأكد أن قيمة المتغير الثالث لا تساوي الأول من ناحية القيمة والنوع ولا تساوي الثاني من ناحية النوع
if((num3 !== num1) && (num3 !== num2)){
    console.log(`"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    `)
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

////////////////////////////////////////////////////////////////////////////////
fourth question

let num1 = 10;
let num2 = 5;
let num3 = 10;
let num4 = 36;

//or
let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;

// or
let num1 = 19;
let num2 = 9;
let num3 = 19;
let num4 = 50;
