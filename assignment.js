function checkMethod(str, number) {
  //for return string
  let returnString = '';
  //first convert the string to array
  let arr = str.split('');
  //by using the resduce method for created the object with key as a char and value as char count
  var result = arr.reduce(function (object, element) {
    return (object[element] = (object[element] || 0) + 1), object;
  }, {});

  // with the help of for loop, iterate object and check the value of object is greater then given integer param number or not
  for (const key in result) {
    if (number <= result[key]) {
      //if yes, the with help of repeat method of repeat the char as per the integer param, and cancat the last string.
      returnString = returnString.concat(key.repeat(number));
    } else {
      //else we print the key value count, and concat the last string
      returnString = returnString.concat(key.repeat(result[key]));
    }
  }
  //return the final result
  return returnString;
}

checkMethod('aaaaabbbefff', 2);
