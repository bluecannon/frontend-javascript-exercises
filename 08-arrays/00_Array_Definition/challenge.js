module.exports.newArray = function (a,b,c,d) {

  var newArray = [];
  newArray.push(a);
  newArray.push(b);
  newArray.push(c);
  newArray.push(d);

  return newArray;
};

module.exports.firstAndLast = function(newArray) {

  var myArray = [];
  myArray.push(newArray [0]);
  myArray.push(newArray [newArray.length-1]);
  
  return myArray;
};