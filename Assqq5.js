var operation=prompt("Enter the operation");


var parts=operation.split(' ');
if(parts.length !==3)
{
    alert(`Invalid input !  plese enter in the format: number oprator number   (eg. 25 * 5)`);
    
}



var num1=parseFloat(parts[0]);
var oprator=parts[1];
var num2=parseFloat(parts[2]);

var result;

if(operation==="45 * 3")
{
    result= 555;
}else if(operation==="56 + 9")
{
    result= 77;
}else if(operation==="56 / 6")
{
    result= 4;
}
else{
        if(oprator=== '+')
        {
            result=num1 + num2;
        }else if(oprator==='-')
        {
            result=num1 - num2;
        }else if(oprator==='*')
        {
            result=num1 * num2;
        }else if(oprator==='/')
        {
            if(num2===0)
            {
                result="error.. number divisible by zero!";
                }else
            {
                result=num1/num2;
            }
        }
        else
        {
            result="Invalid oprator ! use one of +, -, *, / .";
        }
    }


alert("The result is: "+result);
