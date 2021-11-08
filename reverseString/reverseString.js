function reverseString(str){
  let arr = str.split('');
  arr = arr.reverse();
  str = arr.join('');
  return str
}
module.exports= reverseString