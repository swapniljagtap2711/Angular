var num=parseInt(prompt("Enter the number:"));

var rem;
var result=0
var temp=num;
while(num != 0)
{
    rem=parseInt(num % 10);
    result=(result*10)+rem;
    num =parseInt(num / 10);
}

alert(result)
if(result == temp)
{
    alert(`Given number is plindrom`);
}
else
{
    alert(`Given number is not palindrom`);
}