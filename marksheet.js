var Name=prompt("Enter the name");
var Rno=prompt("Entre the rno");
var M1=parseInt(prompt("Enter the M1"));
var M2=parseInt(prompt("Enter the M2"));
var M3=parseInt(prompt("Enter the M3"));
var Total=M1+M2+M3;
var Per= Total/3 ;
var Grade;

if(Per>=70)
{
    Grade="Distinction";
}
else if(Per>=60 && Per<70)
{
    Grade="First Class";
}
else if(Per>=50 && Per<60)
{
    Grade="Second Class";
}
else if(Per>=40 && Per<50)
{
    Grade="Pass";
}
else if(Per>=30 && Per<40)
{
    Grade="Fail...";
}

document.write("<table border=2px width='1000px' align= center  cellspacing=2 cellpadding=10 ><caption><h1>Student Marksheet</h1></caption> <tr><th>Roll no</th><th>Student Name      </th><th>M1</th><th>M2</th><th>M3</th><th>Total</th><th>Percentage</th><th>Grade   </th></tr>");

// document.write("<tr><td>"+Rno+"</td><td>"+Name+"</td><td>"+M1+"</td><td>"+M2+"</td><td>"+M3+"</td><td>"+Total+"</td><td>"+Per.toFixed(2)+"</td><td>"+Grade+"</td></tr></table>");

document.write(`<tr> <td> ${Rno}</td><td>${Name}</td><td>${M1}</td><td>${M2}</td><td>${M3}</td><td>${Total}</td><td>${Per.toFixed(2)} </td><td>${Grade}</td></tr></table>`);