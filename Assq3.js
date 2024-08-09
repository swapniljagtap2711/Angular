var Que1=prompt("how many days in a leap year?");
var Que2=prompt("What month has an extra day in leap year?");

if(Que1==366)
{
    document.write(`<h1 style='color:green;'>"You have cleared the first level"</h1>`);
    if(Que2=="february" || Que2=="February")
    {
        document.write(`<h1 style='color:green;'>"Congratulations !!You have cleared the test" </h1>`);
    }
    else
    {
        document.write(`<h1 style='color:red;'> "You have failed the test" </h1>`);
    }
}
else
{
    document.write(`<h1 style='color:red;'>  "Your input is wrong, please try again." </h1>`);
} 