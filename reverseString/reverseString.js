function reverseString(str) 
{
  var arr=new Array;
  for(var i=(str.length-1);i>=0;i--)
  {
      arr.push(str[i]);
  }
  return arr.join("");
}

console.log(reverseString("hello"));
