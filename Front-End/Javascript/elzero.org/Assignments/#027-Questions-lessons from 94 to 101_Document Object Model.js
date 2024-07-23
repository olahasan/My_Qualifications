====>>>> https://codepen.io/olahasan/pen/PoRLvXr
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-094-to-101/


//first question
// html
 <body>
    <a class="open" href="https://google.com">Google</a>
    <a class="open" href="https://elzero.org">Elzero</a>
    <a class="not" href="https://facebook.com">Facebook</a>
    <a class="linked" href="https://linkedin.com">Elzero</a>
    <script src="main.js"></script>
  </body>


//js
<script>
        // let a = document.getElementsByTagName("a")
        let a = document.links
        window.onload = function(){

            for(let i = 0; i<a.length; i++){
                if(a[i].classList.contains("open") && a[i].textContent === "Elzero"){
                    a[i].click()
                    };
                console.log(a[i]);
            }
        }
        console.log(a);
    </script>



Other way 
 let links = document.links;

 for(let i=0; i<links.length; i++){
  if(links[i].classList.contains("open") && links[i].innerHTML==="Elzero" ){
    links[i].click()
  }
  // console.log(links[i])
 }
////////////////////////////////////////////////////////////////////////////////
//second question
////////////////////////////////////////////////////////////////////////////////
//third question

//html
<div class="our-element">Our Element</div>
<p>Paragraph</p>

// js
let myP = document.querySelector("p");

let myDiv = document.querySelector(".our-element");
let myStartDiv = myDiv.cloneNode();
let myEndDiv = myDiv.cloneNode();

console.log(myP.remove());

myStartDiv.classlist ="start";
myStartDiv.title = "Start Element";
myStartDiv.setAttribute("data-value","Start");
myStartDiv.textContent="Start";

console.log(myDiv);

console.log(myStartDiv);
console.log(myDiv.before (myStartDiv));

myEndDiv.class ="end";
myEndDiv.title = "End Element";
myEndDiv.setAttribute("data-value","End");
myEndDiv.textContent="End";

console.log(myEndDiv);
console.log(myDiv.after(myEndDiv));

////////////////////////////////////////////////////////////////////////////////­­­­
//fourth question

let myDiv = document.querySelector("div");
let myDivSpan = document.querySelector("div span");

console.log(myDiv); 
console.log(myDivSpan); 

console.log(myDiv.lastChild); 

console.log( myDiv.childNodes[4]);

console.log( myDivSpan.nextSibling.nextSibling.nextSibling);

//other solution
// let myDiv = document.getElementsByTagName("div")[0];
// let elzeroText = myDiv.childNodes[2].textContent.trim();

// console.log(elzeroText); // Output: "Elzero"


//another way
// let myDiv = document.getElementsByTagName("div")[0];
// console.log(myDiv.lastChild);
////////////////////////////////////////////////////////////////////////////////
//fifth question

// html
  <div>Element</div>
  <span>Element</span>
  <p>Element</p>
  <article>Element</article>
  <section>Element</section>

// js
let myTags = document.body.children;

for (let i = 0; i < myTags.length; i++) {
  myTags[i].onclick = function () {
    console.log(`This Is ${myTags[i].tagName}`);
  };
}

console.log(myTags);

