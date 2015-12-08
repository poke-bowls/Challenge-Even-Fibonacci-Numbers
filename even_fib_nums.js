/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};

function _sumFibs( maxFibValue ) {
  var a = 0,
      i = 1,
      b = 0,
      sum = 0;
  while (i <= maxFibValue) {
    if(b % 2 === 0) {
      sum += b;
    }
    b = a + i;
    a = i;
    i = b;
  }
  return sum;
}



// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};