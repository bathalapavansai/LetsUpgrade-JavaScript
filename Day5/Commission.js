function comm(){
    var sale=document.getElementById('sales').value;
    sale>0 && sale<=5000?
        document.getElementById("out").innerHTML="Total commission : 2% ":
    sale>5000&&sale<=10000?
        document.getElementById("out").innerHTML="Total commission : 5% ":
    sale>10000&&sale<=20000?
        document.getElementById("out").innerHTML="Total commission : 7% ":
    sale>20000?
        document.getElementById("out").innerHTML="Total commission : 10% ":
    document.getElementById("out").innerHTML="Enter value > 0"
  
}