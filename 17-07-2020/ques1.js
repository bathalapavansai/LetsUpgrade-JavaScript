Valid="disabled"
function fun()
{
    let v=document.getElementById("inputText").value;
    console.log(v);
    
    v%2==0&&v!=0?document.getElementById("output").innerHTML=`${v} is even `:v==0?document.getElementById("output").innerHTML='' :document.getElementById("output").innerHTML=`${v} is odd`;
}
function fun1()
{
    let v=''
    v=document.getElementById('inputText1').value;
    let a=v.search(" ")
    a < 1 ? document.getElementById("btnEnable").innerHTML="give right format  i.e '<strong>String</strong>'space'<strong>number</strong>'"  : document.getElementById("btnEnable").innerHTML='<button id="btn" onclick="fun2()">sumbit</button>';
}
function fun2()
{
    let v=document.getElementById('inputText1').value;
    console.log(`The Os name is ${v.split(" ")[0]} and Version is ${v.split(" ")[1]}`);
    document.getElementById("out1").innerHTML=`The Os name is ${v.split(" ")[0]} and Version is ${v.split(" ")[1]}`;
}
