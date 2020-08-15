function isUpperCase(word) 
{
    return word === word.toUpperCase();
}

function replacePreservingCaseOfReplacedwordFirstLetter(str, before, after) 
{
  let tempStr=isUpperCase([...before][0]);
  if (tempStr===true)
  {
      let tempAfter=[...after];
      tempAfter[0]=tempAfter[0].toUpperCase();
      let newAfter=tempAfter.join("");
      return str.replace(before,newAfter);
  }
  else
  {
      let newAfter=after.toLowerCase();
      return str.replace(before,newAfter);
  }
}

console.log(replacePreservingCaseOfReplacedwordFirstLetter("His name is Tom", "Tom", "john"));
