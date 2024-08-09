var num=parseInt(prompt("Enter the number:"));

var rem;
var sum=0;
var temp=num;//371
var cube;
while(num != 0)
{
    rem=parseInt(num % 10);
    cube=rem**3 ;
    sum=sum+cube;
    num= parseInt(num/10);
}

if (sum == temp)
{
    alert( `number is amstrong`);
}
else{
    alert(`number is not amstrong`);
}