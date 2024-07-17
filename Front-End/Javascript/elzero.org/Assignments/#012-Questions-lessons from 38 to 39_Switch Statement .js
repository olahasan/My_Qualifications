====>>>> https://codepen.io/olahasan/pen/poLYvQz
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-038-to-039/


//first question

// 1
let day = "   friday  ";

switch(day){
    default:
        console.log(day.trim().charAt(0).toUpperCase() + day.trim().slice(1));   
}

// 2
let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"
switch(day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
}

// 3
let day = "Monday";
// let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"
switch(day){
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
}

// 4
let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"
switch(day){
    case "Tuesday" :
        console.log("From 10:00 AM To 6:00 PM");
        break;
}

// 5
let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"
switch(day){
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
          break;
}

// 6
let day = "World";
// Output => "Its Not A Valid Day"
switch(day){
    default:
        console.log("Its Not A Valid Day");
          break;
}
///////////////////////////////////////////////////////////////

let day = "Saturday";

switch(day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
        
    case "Monday":
    case "Thursday":
            console.log("From 10:00 AM To 5:00 PM");
            break;

    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;

    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
          break;

    default:
      console.log("Its Not A Valid Day");

}


