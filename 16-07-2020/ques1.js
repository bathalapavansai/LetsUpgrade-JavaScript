let a=prompt("Enter value and check in console");
console.log(a);
console.warn(a);
console.error(a);
function fun()
{
    let v=document.getElementById("inputText").value;
    console.log(v);
    
    v==0?document.getElementById("output").innerHTML='Please type Something':document.getElementById("output").innerHTML=`You have typed : ${v}`;
}