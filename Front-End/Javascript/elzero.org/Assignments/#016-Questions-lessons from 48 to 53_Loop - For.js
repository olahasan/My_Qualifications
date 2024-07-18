====>>>> https://codepen.io/olahasan/pen/wvmOKNr?editors=0110
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-048-to-053/


//first question

let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i<=end; i+=start){
  if(i == exclude){
    continue;
  }
  console.log(i);
}
////////////////////////////////////////////////////////////////////////////////
//second question

let start = 10;
let end = 0;
let stop = 3;

for(let i = start; i>end; i--){
  // console.log(i);

  if(i < stop){
    break;
  }
  if(i < start){
    console.log(`${0}${i}`);
  }else{  console.log(i);
  }
}

//another way
for(let i = start ; i >= stop; i--){
  if(i < start){
    console.log(`0${i}`);

  }else{
    console.log(i);
  }

}
////////////////////////////////////////////////////////////////////////////////
//third question

let start = 1;
let end = 6;
let breaker = 2;

for(let i = start; i<=end; i++){
  console.log(i);
  for(let j = breaker; j<end; j+=2){
    console.log("--"+j);}
}


//another way

for(let i = start ; i<=end; i++){
console.log(i);

for(let i = breaker; i<=breaker*2; i+=breaker){
  console.log(`--${i}`);
}

}
////////////////////////////////////////////////////////////////////////////////­­­­
//fourth question

let index = 10;
let jump = 2;
let end = 0;

let i = 10
i>0
for(; ; ){

  if(i == 2){
    break;
  }
  console.log(i);
  i-=2;
  
}


//onther way

for(let i = 10; i>=4; i-=2){

  console.log(i);
}

let i = 10;
for(; ; ){
  console.log(i);
  

if(i === 4){
  break;
}
i-=2

 
}

Other way

let i=10
for(; ;){
  console.log(i)
  i-=2
  if(i<4){
    break;
  }
}

////////////////////////////////////////////////////////////////////////////////
//fifth question

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i=friends.length-friends.length;  i<friends.length;  i++ ){
  if(friends[i][friends.length-friends.length] === letter.toUpperCase()){
    continue;
  }
   console.log(`"${i+(friends.length-friends.length+1)} ${"=>"} ${friends[i]}"`);
  
}

//another way

for(let i = 0; i<friends.length; i++){
  if(friends[i][0] === "a".toUpperCase()){
    continue;
  }
  console.log(`" ${i}=>${friends[i]}"`);
}


// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

////////////////////////////////////////////////////////////////////////////////
//sixth question

let start = 0;
let swappedName = "elZerO";
let swappedNameDone = "";

for(let i = start; i<swappedName.length; i++){
  // console.log(swappedName)
  // console.log(swappedName[i])
    if(swappedName[i] === swappedName[i].toUpperCase()){
      swappedNameDone +=
      swappedName[i].toLowerCase();
    }
    else{
      swappedNameDone +=
      swappedName[i].toUpperCase()
    }

}

console.log( swappedNameDone);

// Output
"ELzERo"

////////////////////////////////////////////////////////////////////////////////
//seventh question

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i=1; i<mix.length; i++){
  if(typeof mix[i] === "string"){
    continue;
  }
  console.log(mix[i]);
}

//لو مش عايزه أكتب أرقام
// for(let i=start+ +true; i<mix.length; i++){
//   if(typeof mix[i] === "string"){
//     continue;
//   }else{
//   console.log(mix[i]);
// }
// }
// Output
2
3
4

Other way
mix.shift()
console.log(mix)
for(let i=0; i<mix.length;i++){
  if(typeof mix[i]==='string'){
continue;
  }else{
    console.log(mix[i])

  }
}
