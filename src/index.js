module.exports = function reverse (n) {
  let result ='';
  let num = Math.abs(n).toString();
  for(let i = 0; i < num.length; i++){
    result += num[num.length-1-i]; 
  }
  return +result;
}
