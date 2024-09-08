function convert(minutes) {
  if(typeof minutes !== "number"){
      return "Sorry, should enter a number.";
  }else{
  	  return minutes * 60;
  }
}
