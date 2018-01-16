function theBeatlesPlay (musicians, instruments) {
  var newarray = [];
  for (var i = 0; i < musicians.length; i++) {
    newarray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newarray;
}

function johnLennonFacts(array) {
  var newarray = [];
  while (array.length > 0 ){
  newarray.push(array[0] + "!!!");
  array.shift();
  }
return newarray;
}

function iLoveTheBeatles(number){
  var newarray = [];
  
  do{
    newarray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  
  return newarray;
  
}


/// var bio = " is the co-founder and editress-in-chief of The Huffington Post";
/// console.log(entrepreneurs[2] + bio);


//var entrepreneurs = ["Elizabeth Holmes", "Laurene Powell Jobs", "Arianna Huffington"];
 
// the line below will print the string "Elizabeth Holmes"
//console.log(entrepreneurs[0]);
 
// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
//var bio = " is the co-founder and editress-in-chief of The Huffington Post";
//console.log(entrepreneurs[2] + bio);
 
// the line below will return undefined
//entrepreneurs[9];