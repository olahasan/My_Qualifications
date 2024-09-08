  function checkStatus(a, b, c) {

  if(typeof a === "string" && typeof b === "number" && typeof c === "boolean"){
    console.log(`"Hello ${a}, Your Age Is ${b},You Are Available For Hire"`);

  } else if(typeof a === "number" && typeof b === "string" && typeof c === "boolean"){
    console.log(`"Hello ${b}, Your Age Is ${a},You Are Available For Hire"`);
    
  } else if( a === true  && typeof b === "number" && typeof c === "string"){
    console.log(`"Hello ${c}, Your Age Is ${b},You Are Available For Hire"`);
  }else if( a === false  && typeof b === "string" && typeof c === "number"){
    console.log(`"Hello ${b}, Your Age Is ${c},You Are Not Available For Hire"`);
  }
}

// Needed Output
checkStatus("Osama", 38, true); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true);
 // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama");
 // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38);
 // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//other solution
function checkStatus(a, b, c) {
  // Your Code Here
  if(typeof a === "string" && typeof b === "number"  && typeof c === "boolean"){
    if(typeof c === "boolean" && c === true){
      console.log(`"Hello ${a}, Your Age Is ${b}, You Are Available For Hire"`)
    }else{
    console.log(`"Hello ${a}, Your Age Is ${b}, You Are not Available For Hire"`)

    }
  }else if(typeof a === "number" && typeof b === "string"  && typeof c === "boolean"){
    if(typeof c === "boolean" && c === true){
      console.log(`"Hello ${b}, Your Age Is ${a}, You Are Available For Hire"`)
    }else{
    console.log(`"Hello ${b}, Your Age Is ${a}, You Are not Available For Hire"`)
    }
  }else if(typeof a === "boolean" && typeof b === "number"  && typeof c === "string"){
    if(typeof a === "boolean" && a === true){
      console.log(`"Hello ${c}, Your Age Is ${b}, You Are Available For Hire"`)
    }else{
      console.log(`"Hello ${c}, Your Age Is ${b}, You Are not Available For Hire"`)
      }
  }else if(typeof a === "boolean" && typeof b === "string"  && typeof c === "number"){
    if(typeof a === "boolean" && a === false){
      console.log(`"Hello ${b}, Your Age Is ${c}, You Are  not Available For Hire"`)
    }else{
      console.log(`"Hello ${b}, Your Age Is ${c}, You Are  Available For Hire"`)
      }
  }

} 


 
// وطريقه  منظمه أكثر لكتابه if
function checkStatus(a, b, c) {
  // Your Code Here
  if(typeof a === "boolean"){
     if(a === true && typeof b === "number" && typeof c === "string"){ 
    console.log(`"Hello ${c}, Your Age Is ${b},You Are Available For Hire"`);
    }else{
      console.log(`"Hello ${b}, Your Age Is ${c},You Are Not Available For Hire"`);
     }
     
  }else{
    if(typeof c === "boolean" && typeof a === "string" && typeof b === "number" ){
      console.log(`"Hello ${a}, Your Age Is ${b},You Are Available For Hire"`);
    }else if(typeof c === "boolean" && typeof b === "string" && typeof a === "number"){
          console.log(`"Hello ${b}, Your Age Is ${a},You Are Available For Hire"`);
    }
  }

}

// Needed Output
checkStatus("Osama", 38, true); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true);
 // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama");
 // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38);
 // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

