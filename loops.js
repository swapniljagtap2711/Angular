var n1=prompt("Enter the n1");//50 //60
var n2=prompt("Enter the n2");//60 //50

if(n1<n2)
{
    for(var i=n1;i<=n2;i++)
    {
        document.write(`${i}<br>`);
    }
}
else
{
    for(var i=n1;i>=n2;i--)
    {
        document.write(`${i}<br>`);
    } 
}
