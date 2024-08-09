for(var i=1;i<=100;i++)
{
    if(i%3==0   && i%5==0)
    {
        document.write(`${i} fizzbizz<br>`);
    }
    else if(i%3==0)
    {
        document.write(`${i} ...fizz <br>`);
    }
    else if(i%5==0)
    {
        document.write(`${i}  bizz....<br>`);
    }
}
