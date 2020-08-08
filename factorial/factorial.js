function factorial(num) 
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

console.log(factorial(5));
