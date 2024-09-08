https://codepen.io/olahasan/pen/jOzdXjO
https://elzero.org/javascript-bootcamp-assignments-lesson-from-010-to-017/

// first question
var numberOne = 10 ;
var numberTwo = 20 ;

console.log(numberOne + ""+ numberTwo);
console.log(typeof(numberOne +""+ numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);

console.log(numberTwo + "\n" +numberOne);

console.log(`${numberTwo}
${numberOne}`);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// second question

 <body>
    <div id="elzero">object</div> 
    <script src="main.js"></script>
  </body>
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// third question

var a = "I'm In";
var b = "Love";
var c = "With";
var d = "JavaScript";

console.log("\`" + a + "\n" + "\\\\" + "\n" + b +  " "+ "\\\\" + " \"\"\" " + "\'\'\'" + "\n" + " ++" + " " + c +" " + "++" + "\n" + "\\\"\"\"\\\"\"\"" + "\n" + "\"\"" + d +"\"\"" + " \`"+"\`");

document.write("\`" + a + "<br>" + "\\\\" + "<br>" + b +  " "+ "\\\\" + " \"\"\" " + "\'\'\'" + "<br>" + " ++" + " " + c +" " + "++" + "<br>" + "\\\"\"\"\\\"\"\"" + "<br>" + "\"\"" + d +"\"\"" + " \`"+"\`");

console.log(` \`${a}
\\\\
${b} \\\\ """ '''
++ ${c} ++
\\"""\\"""
"" ${d} "" \`\` `);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fouth question
let a = 21;
let b = 20;

console.log("_"+a + "_" + b + a + "_"+ b + a + "_" + b + a + "_" + b + "_");
console.log("_"+a + "_" + b + ""+ a + "_"+ b + ""+ a + "_" + b + ""+ a + "_" + b + "_");
console.log("_" + (a + "_" + b ) + (a + "_" + b ) + (a + "_" + b ) + (a + "_" + b ) + "_");
console.log("_" + (a + "_" + b).repeat(4) + "_");
console.log("_" +(a + "_" + b).repeat(5)+ "_" );
console.log("_" +(a + "_" + b).repeat(6)+ "_" );
