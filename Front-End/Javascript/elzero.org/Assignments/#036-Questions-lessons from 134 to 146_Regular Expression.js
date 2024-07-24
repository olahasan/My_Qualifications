====>>>> https://codepen.io/olahasan/pen/mdxgbeK?editors=1010
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-134-to-146/


//first question

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/\d{4}:\w{2}(?:8):\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig));

////////////////////////////////////////////////////////////////////////////////

//second question

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(specialNames.match(/Os(\d{2,4})?O/ig))
// Output
// ['Os10O', 'OsO', 'Os100O']

////////////////////////////////////////////////////////////////////////////////

//third question

// السؤال الثالث
let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig));

////////////////////////////////////////////////////////////////////////////////
­­­­
//fourth question

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/ open pattern 

https?:\/\/

https? start with https - may be not found
: then foun :
\ scape operator
/ slash for website
\ scape operator
/ slash for website

(?:[-\w]+\.)?
  
? normal sign
: normal sign
[-\w]+ -\w (- letters or nums)one or more
\. normal sign
? may be not found

([-\w]+)\.\w+
  
([-\w]+) - sign ((- letters or nums)one or more)
\. normal signs
\w+ ((- letters or nums)one or more)

(?:\.\w+)?\/?.*

? may be not found
: normal sign
\. normal sign
\w+ ((- letters or nums)one or more)
? may be not found
\ scape operator
/ slash for website
? may be not found
. normal sign
* zero or more

/i

/ end pattern
i unsensetive letters

////////////////////////////////////////////////////////////////////////////////

//fifth question

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /25\/?\s?-?\s?10?\/?\s?-?\s?(1982|82)$/ig;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

////////////////////////////////////////////////////////////////////////////////

//sixth question "challenge"

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:?(\/\/)?(www.)?)?elzero.org(:\d{4}\/\w{8}.\w{3}\?\w{2}=\d{3}\&\w{3}=\w{6})?/ig;
let re = /(https?:?(\/\/)?(www.)?)?\w{6}.\w{3}(:\d{4}\/\w{8}.\w{3}\?\w{2}=\d{3}\&\w{3}=\w{6})?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
