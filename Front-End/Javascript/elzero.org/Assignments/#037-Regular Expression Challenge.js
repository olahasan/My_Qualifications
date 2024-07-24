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
