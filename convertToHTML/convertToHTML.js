function convertToHTML(str) 
{
  let arr=[...str];
  for (let i=0;i<arr.length;i++)
  {
    arr[i]=arr[i].replace("&","&amp;");
    arr[i]=arr[i].replace("<","&lt;");
    arr[i]=arr[i].replace(">","&gt;");
    arr[i]=arr[i].replace(/"/,"&quot;");
    arr[i]=arr[i].replace("'","&apos;");
  }
  let newStr=arr.join("");
  return newStr;
}

console.log(convertToHTML("Hamburgers < Pizza < Tacos"));
