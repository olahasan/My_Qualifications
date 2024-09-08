let promise = new Promise(function (resolve, reject) {
  setTimeout( ()=> {
    resolve("hello world");
  }, 1000);
});
