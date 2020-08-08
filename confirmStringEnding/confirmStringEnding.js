function confirmStringEnding(str, target) 
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

console.log(confirmStringEnding("Bastian", "n"));
