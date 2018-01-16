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

function iLoveTheBeatles(number) {
  var newarray = [];
  do{
    newarray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return newarray;
}