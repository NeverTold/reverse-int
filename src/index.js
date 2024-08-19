module.exports = function reverse (n) {
  var int = Sting(n);
  var result = "";
  for (i=0; i < int.length; i++){
    result = int[i]+result;
  }
  return Number(result);
}
