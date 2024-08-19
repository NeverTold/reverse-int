module.exports = function reverse (n) {
  var int = String(Math.abs(n));
  var result = "";
  for (i=0; i < int.length; i++){
    result = int[i]+result;
  }
  return Number(result);
}
