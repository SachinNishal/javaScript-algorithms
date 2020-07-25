function removeFalsyValues(arr) 
{
  let newArr=new Array;
  for(let i=0;i<arr.length;i++)
  {
    if(Boolean(arr[i])==true)
    {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeFalsyValues([7, "ate", "", false, 9]));
