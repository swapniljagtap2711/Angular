var oparation=prompt("Enter the opration:");

var parts=oparation.split(' ');
if(parts.length !== 3)
{
    alert(`Invalid opration ! plese enter in the format: number oprator number    (eg. 45 * 2)`);
    
}


var num1=parseFloat(parts[0]);
var oprator=parts[1];
var num2=parseFloat(parts[2]);

var result;
if(oparation==="45 * 3")
{
    result=555;
}
else if(oparation==="56 + 9")
{
    result=77;
}else if(oparation==="56 / 6")
{
    result=4;
}else{
        if(oprator==='+')
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
                            result='error.. number divisible by zero!';
                        }else
                        {
                            result=num1 / num2;
                        }
                        result=num1 / num2;
                    }else
                    {
                        result='Invalid oprator! Enter the use one of +,-,*,/.';
                    }
    }

alert("The result is:"+result);