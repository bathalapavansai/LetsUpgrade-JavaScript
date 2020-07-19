var s=''
for (let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
        s+="<label style='color:blue'>fizzbuzz</label><br>";
    else if(i%3==0)
        s+="<label style='color:#ce00fc'>fizz</label><br>";
    else if(i%5==0)
        s+="<label style='color:red'>buzz</label><br>";
    else
        s+=i+'<br>';
}   
document.getElementById("output").innerHTML=s;