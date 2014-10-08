module.exports.reversePlusOne = function(textArray) {
   var arrayLen = textArray.length;
   var varRight;
   var newArray = [];

   while (arrayLen >= 1) {
       varRight = textArray.pop();
       newArray.push(varRight);
       arrayLen --;
   } 
   newArray.unshift(1);
   return (newArray);
};

module.exports.plusesEverywhere = function(textArray) {
   var newStr = "";
   var newArray = [];
   var varRight = "";
   var arrayLen = textArray.length;

   while (arrayLen > 0)
   {
      varRight = textArray.shift();
      newArray.push(varRight);
      
      if (arrayLen > 1)
         newArray.push("+");     
      arrayLen --;
   }
   
   newStr = newArray.toString().replace(",","");
   return (newStr.replace(/,/g, ''));
};

module.exports.arrayQuantityPlusOne = undefined;