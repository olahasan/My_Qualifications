====>>>> https://codepen.io/olahasan/pen/xxWeKYX
====>>>>­­ https://elzero.org/javascript-bootcamp-assignments-lesson-from-179-to-188/


//first question

//this is "articles.json" file
[
  {
    "userId": 10,
    "title": "Article Title Number 1",
    "description": "Article Description Number 1"
  },
  {
    "userId": 5,
    "title": "Article Title Number 2",
    "description": "Article Description Number 2"
  },
  {
    "userId": 5,
    "title": "Article Title Number 3",
    "description": "Article Description Number 3"
  },
  {
    "userId": 5,
    "title": "Article Title Number 4",
    "description": "Article Description Number 4"
  },
  {
    "userId": 5,
    "title": "Article Title Number 5",
    "description": "Article Description Number 5"
  },
  {
    "userId": 5,
    "title": "Article Title Number 6",
    "description": "Article Description Number 6"
  },
  {
    "userId": 25,
    "title": "Article Title Number 7",
    "description": "Article Description Number 7"
  },
  {
    "userId": 25,
    "title": "Article Title Number 8",
    "description": "Article Description Number 8"
  },
  {
    "userId": 15,
    "title": "Article Title Number 9",
    "description": "Article Description Number 9"
  },
  {
    "userId": 15,
    "title": "Article Title Number 10",
    "description": "Article Description Number 10"
  }
]
//////////////////////////////////////////////////////
//this is main.js file

function getData(apiLink) {
  return new Promise((rresolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        rresolve(JSON.parse(myRequest.responseText));
        //console.log(JSON.parse(myRequest.responseText));
      } else {
        reject(Error("failed to load"));
        //console.log(Error("failed to load"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
}

getData("articles.JSON")
  .then((full) => {
    full.length = 5;
    return full;
  })
  .then((part) => {
    //console.log(part);
    for (let i = 0; i < part.length; i++) {
      // console.log(part[i].title);
      let divEle = document.createElement("div");
      let headingEle = document.createElement("h3");
      let paragraphEle = document.createElement("p");

      divEle.appendChild(headingEle);
      divEle.appendChild(paragraphEle);

      let headingEleText = document.createTextNode(part[i].title);
      let paragraphEleText = document.createTextNode(part[i].description);

      headingEle.appendChild(headingEleText);
      paragraphEle.appendChild(paragraphEleText);

      document.body.appendChild(divEle);
    }
  })
  .catch((err) => {
    console.log(err);
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//second question

//this is "articles.json" file
[
  {
    "userId": 10,
    "title": "Article Title Number 1",
    "description": "Article Description Number 1"
  },
  {
    "userId": 5,
    "title": "Article Title Number 2",
    "description": "Article Description Number 2"
  },
  {
    "userId": 5,
    "title": "Article Title Number 3",
    "description": "Article Description Number 3"
  },
  {
    "userId": 5,
    "title": "Article Title Number 4",
    "description": "Article Description Number 4"
  },
  {
    "userId": 5,
    "title": "Article Title Number 5",
    "description": "Article Description Number 5"
  },
  {
    "userId": 5,
    "title": "Article Title Number 6",
    "description": "Article Description Number 6"
  },
  {
    "userId": 25,
    "title": "Article Title Number 7",
    "description": "Article Description Number 7"
  },
  {
    "userId": 25,
    "title": "Article Title Number 8",
    "description": "Article Description Number 8"
  },
  {
    "userId": 15,
    "title": "Article Title Number 9",
    "description": "Article Description Number 9"
  },
  {
    "userId": 15,
    "title": "Article Title Number 10",
    "description": "Article Description Number 10"
  }
]
//////////////////////////////////////////////////////
//this is main.js file using fetch


function getData(apiLink) {
  return fetch(apiLink)
    .then((result) => {
      let myData = result.json();
      console.log(myData);
      return myData;
    })
    .then((someResult) => {
      someResult.length = 5;
      console.log(someResult);
      return someResult;
    })
    .then((onlyFive) => {
      for (let i = 0; i < onlyFive.length; i++) {
        console.log(onlyFive[i].title);
        let divEle = document.createElement("div");
        let headingEle = document.createElement("h3");
        let paragraphEle = document.createElement("p");

        divEle.appendChild(headingEle);
        divEle.appendChild(paragraphEle);

        let headingEleText = document.createTextNode(onlyFive[i].title);
        let paragraphEleText = document.createTextNode(onlyFive[i].description);

        headingEle.appendChild(headingEleText);
        paragraphEle.appendChild(paragraphEleText);

        document.body.appendChild(divEle);
      }
    });
}

getData("articles.JSON");
