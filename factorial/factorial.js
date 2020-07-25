function factorialize(num) 
{
  if (num==0)
  {
    return 1;
  }
  else
  {
  num=num*factorialize(num-1);
  return num;
  }
}

console.log(factorialize(5));
