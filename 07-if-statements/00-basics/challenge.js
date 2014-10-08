module.exports.favoriteNumber = function(favoriteNumber, guessNumber) {
   if (guessNumber > favoriteNumber)
      return ("Too high");
    else if (guessNumber === favoriteNumber)
      return ("You got it!");
    else 
      return ("Too low");
};

module.exports.checkLock = function (a, b, c, d) {
  if (((a == 3) || (a == 5) || (a == 7)) && (b === 2) && ((5 <= c) && (c <= 100))
       && ((d < 9) || (d > 20)))
    return ("correct");
  else
    return ("incorrect");

};

module.exports.canIGet = function (item, money) {
   if (item === 'MacBook Air') 
     if (money >= 999)
        return true;
     else
        return false;
   else if (item === 'MacBook Pro')
      if (money >= 1299)
        return true;
      else
        return false;
   else if (item === "Mac Pro")
      if (money >= 2499)
        return true;
      else
        return false; 
    else if (item === "Apple Sticker")
      if (money >= 1)
        return true;
      else
        return false; 
    else
      return false;  /* item is none of the above */
};