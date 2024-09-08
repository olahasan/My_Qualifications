====>>>> https://codepen.io/olahasan/pen/gOeEJGq
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-086-to-093/


//first question

// html 
//* <div id="elzero" class="element" name="js">JavaScript</div> */

//js
console.log(document.getElementById("elzero"));
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);

console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div")[0]);

console.log(document.querySelector(".element"));
console.log(document.querySelectorAll(".element")[0]);

console.log(document.querySelector("#elzero"));
console.log(document.querySelectorAll("#elzero")[0]);

console.log(document.querySelector("[name ='js']"));
console.log(document.querySelectorAll("[name ='js']")[0]);

console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.firstElementChild);


// let ola1 = document.getElementById("elzero");
// console.log(ola1);

// let ola2 = document.getElementsByClassName("element")[0];
// console.log(ola2);

// let ola3 = document.getElementsByTagName("div")[0];
// console.log(ola3);

// let ola4 = document.querySelector(".element");
// console.log(ola4);

// let ola5 = document.querySelectorAll(".element")[0];
// console.log(ola5);

// let ola6 = document.querySelector("#elzero");
// console.log(ola6);

// let ola7 = document.querySelectorAll("#elzero")[0];
// console.log(ola7);

// let ola8 = document.querySelector("[name ='js']");
// console.log(ola8);

// let ola9 = document.querySelectorAll("[name ='js']")[0];
// console.log(ola9);

// let ola10 = document.getElementsByName("js")[0];
// console.log(ola10);

// let ola11 = document.getElementsByTagName("div")[0];
// console.log(ola11);

// let ola12 = document.body.children[0];
// console.log(ola12);

// let ola13 = document.body.firstElementChild;
// console.log(ola13);

// let ola14 = document.body.childNodes[1];
// console.log(ola14);

// let ola15 = document.querySelector("div");
// console.log(ola15);

// let ola16 = document.querySelectorAll("div")[0];
// console.log(ola16);

////////////////////////////////////////////////////////////////////////////////
//second question

// html

<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>
<div>
  <img decoding="async" src="#" alt="" />
</div>




//js      
      // <div>
      //   <img src="#" alt="" class="update"/>
      // </div>

let ola = document.querySelectorAll(".update");

console.log(ola);


for(let i = 0; i <ola.length; i++){
  ola[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  ola[i].alt = " Elzero Logo";
console.log(ola[i]); 
}

// other slotion
console.log(document.images[0].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
console.log(document.images[0].alt="Elzero Logo")

  // if it was like this 
// <div>
//   <img decoding="async" src="#" alt="" />
// </div>

// select themlike this

// let ola = document.querySelectorAll("[decoding= async]");
////////////////////////////////////////////////////////////////////////////////

//third question

// html
<form action="">
  <input type="number" name="dollar" placeholder="USD Dollar" />
  <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
</form>


//js
let myInput = document.querySelector("[name='dollar']");
let myDiv = document.querySelector("[class='result']");

myInput.oninput = function(){
  myDiv.innerHTML = `{${myInput.value}} USD Dollar = {${(myInput.value*15.6).toFixed(2)}}Egyptian Pound`
}

console.log(myInput);
console.log(myDiv);
////////////////////////////////////////////////////////////////////////////////­­­­
//fourth question

// html
<!-- السؤال الرابع -->
  <div class="one" title="two">Two</div>
  <div class="two" title="one">One</div>

// js
let one =document.querySelector("[class='one']");
let two =document.querySelector("[class='two']");

one.title =one.className;
two.title =two.className;

one.textContent = one.title;
two.textContent = two.title+ " "+two.attributes.length;

console.log(one);
console.log(two);
////////////////////////////////////////////////////////////////////////////////
//fifth question

// html
 <img src="#" alt="One" />
  <img src="#" />
  <img src="#" alt="Three" />
  <img src="#" />
  <img src="#" />

// js
   let img =document.getElementsByTagName("img");

for(let i =0; i<img.length; i++){
  
 if(img[i].hasAttribute("alt")){
  img[i].alt = "old"
 }else{
  img[i].alt = "new"
 }
  console.log(img[i]);
}

//other way
let pic = document.querySelectorAll("img");

for (var i = 0; i < pic.length; i++) {
  if (pic[i].hasAttribute("alt")) {
    pic[i].setAttribute("alt", "old");
  } else {
    pic[i].setAttribute("alt", "elzero new");
  }
}

