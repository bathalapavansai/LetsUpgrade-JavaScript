
function fun4()
{
    let m=document.getElementById("marks").value;
   switch (m){
    case '35':
        document.getElementById("output2").innerHTML=`Failed`;
        break;
    case '50':
        document.getElementById("output2").innerHTML=`Marks : 50 and Grade : C`;
        break;
    case '75': 
        document.getElementById("output2").innerHTML=`Marks : 75 and Grade : B`;
        break;
    case '90':
        document.getElementById("output2").innerHTML=`Marks : 90 and Grade : A`;
        break;
    default: 
        document.getElementById("output2").innerHTML=`Input correct marks (hint : 35, 50 , 75, 90)`;

}
}
