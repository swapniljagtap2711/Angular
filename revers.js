var n1=parseInt(prompt("Enter the number: "));

var rem;
var result=0;

while(n1!=0)
{
    rem =parseInt(n1%10);
    result=(result*10)+rem;
    n1=parseInt(n1/10);
}
document.write(`Revers:- ${result}`);
