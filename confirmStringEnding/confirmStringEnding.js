function confirmEnding(str, target) 
{
  if(str.substring(str.length-target.length)==target)
  {
    return true;
  }
  else
  {
    return false;
  }

}

console.log(confirmEnding("Bastian", "n"));
