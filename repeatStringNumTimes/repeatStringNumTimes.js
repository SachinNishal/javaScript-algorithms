function repeatStringNumTimes(str, num) 
{
  let repeatedString="";
  if (num<0)
  {
    return "";
  }
  else
  {
    for (let i=0;i<num;i++)
    {
      repeatedString=str+repeatedString;
    }
    return repeatedString;
  }
}

console.log(repeatStringNumTimes("abc", 3));
