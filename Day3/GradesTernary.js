function fun5()
{
    let m=document.getElementById("marks").value;
    m>0?m>35?m<50?document.getElementById("output3").innerHTML=` Marks : ${m} Grade : D`:m>=50 && m<75?document.getElementById("output3").innerHTML=` Marks : ${m} Grade : C`:m>=75 && m<90?document.getElementById("output3").innerHTML=` Marks : ${m} Grade : B`:m>=90 && m<=100?document.getElementById("output3").innerHTML=` Marks : ${m} Grade : A`: document.getElementById("output3").innerHTML=`Input correct marks`:document.getElementById("output3").innerHTML=` Marks : ${m} Grade : F`:document.getElementById("output3").innerHTML=`Input correct marks`;
}   