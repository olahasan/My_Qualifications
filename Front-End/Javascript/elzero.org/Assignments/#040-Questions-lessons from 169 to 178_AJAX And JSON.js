====>>>> https://codepen.io/olahasan/pen/qBowWPV?editors=1010
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-169-to-178/


//first question
//create a Json file with name "articles.json" and put inside it this code:

  [
    {
      "id" : 1 ,
      "author": "AAA",
      "age" : 27,
      "section" :"pychology",
      "title" : "love",
      "content" : "love"
    },

    {
      "id" : 2 ,
      "author": "BBB",
      "age" : 28,
      "section" :"physics",
      "title" : "hate",
      "content" : "hate"
    },

    {
      "id" : 3 ,
      "author": "CCC",
      "age" : 29,
      "section" :"biology",
      "title" : "bio",
      "content" : "bio"
    },
        
    {
      "id" : 4 ,
      "author": "DDD",
      "age" : 30,
      "section" :"chemistry",
      "title" : "chem",
      "content" : "chem"
    },    

    {
      "id" : 5 ,
      "author": "EEE",
      "age" : 31,
      "section" :"arabic",
      "title" : "ara",
      "content" : "ara"
    }    
]



////////////////////////////////////////////////////////////////////////////////
//second question

let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send()
// console.log(req);

req.onreadystatechange = function(){
    // console.log(req.readyState);
    // console.log(req.status);
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
    }
}

req.onloadend = function(){
    if(this.readyState === 4 && this.status === 200){
        console.log("JSON Object Content Here");
        console.log("Data Loaded");
    }
}
////////////////////////////////////////////////////////////////////////////////
//third question

let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();
// console.log(req);

req.onreadystatechange = function () {
  // console.log(req.readyState);
  // console.log(req.status);
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(req.responseText);

    for (let i = 0; i < mainData.length; i++) {
      mainData[i].section = "All";
    }
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);
    
    console.log(mainData);
    console.log(updatedData);
  }
};
////////////////////////////////////////////////////////////////////////////////­­­­
//fourth question

let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);

    let div = document.createElement("div");
    div.id = "data";

    for (let i = 0; i < mainData.length; i++) {
      let data = document.createElement("div");

      let title = document.createElement("h2");
      let titleText = document.createTextNode(mainData[i].title);
      title.appendChild(titleText);
      data.appendChild(title);

      let body = document.createElement("p");
      let bodyText = document.createTextNode(mainData[i].content);
      body.appendChild(bodyText);
      data.appendChild(body);

      let author = document.createElement("p");
      let authorText = document.createTextNode(`Author: ${mainData[i].author}`);
      author.appendChild(authorText);
      data.appendChild(author);

      let section = document.createElement("p");
      let sectionText = document.createTextNode(
        `Category: ${mainData[i].section}`
      );
      section.appendChild(sectionText);
      data.appendChild(section);

      div.appendChild(data);
    }

    document.body.appendChild(div);
  }
};
