var n = parseInt(prompt("Enter a Number:"))
var flag=0
for(let i=1;i<=n;i++)
{
    if(n%i==0)
    {
        flag++;
    }
}
if(flag==2)
{
    document.write("<h1>\"" +n+ "\" is Prime")
}
else{
    document.write("<h1>\"" +n+ "\" is not Prime")
}