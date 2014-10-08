module.exports.formLetter = function(firstName, senderName, message) {

   var msg = firstName + "," + "\n\n" + message + "\n\n" + "Sincerely," + "\n" + senderName;
   return ("Hello" + " " + msg);
};


module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
   var strA = bigString.substring(startA, endA);
   var strB = bigString.substring(startB, endB);
   return (strA + strB);
 };


module.exports.findFirstMatch = function(text, searchString) {
  var idx = text.indexOf(searchString);
  return(idx);
};


module.exports.findLastMatch = function(text, searchString) {
  var idx = text.lastIndexOf(searchString);
  return(idx);
};


module.exports.substringBetweenMatches = function(text, searchString) {
  var idx1 = text.indexOf(searchString);
  var idx2 = text.lastIndexOf(searchString);

  idx1 = idx1 + searchString.length;
  var str = text.substring(idx1,idx2);
  return(str);
};
