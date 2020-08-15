function palindrome(str) 
{
  let arr=[...str.replace(/[\W_]+/g,"").toLowerCase()];
  let newArr=[...arr].reverse();
  if(arr.join()==newArr.join())
  {
    return true;
  }
  else
  {
    return false;
  } 
}

console.log(palindrome("almostomla"));
