var num1=0
var num2=0
var res=0
var op=''
function clr()
{
    document.getElementById("screen").innerHTML='0'
}
function screenUpdate(x)
{
  document.getElementById("screen").innerHTML+=x;
}
function fnum(x)
{
    num1=+(document.getElementById("screen").innerHTML);
    op=x
    document.getElementById("screen").innerHTML='0';
}
function calculate()
{
    num2=+(document.getElementById("screen").innerHTML);
    switch (op)
    {
        case '+':
            document.getElementById("screen").innerHTML=''
            res=num1+num2    
            document.getElementById("screen").innerHTML=res;
            num1=num2=0;
            op='';
            break;
        
        case '-':
            res=num1-num2    
            document.getElementById("screen").innerHTML=res;
            num1=num2=0;
            op='';
            break;

        case '*':
            res=num1*num2    
            document.getElementById("screen").innerHTML=res;
            num1=num2=0;
            op='';
            break;

        case '/':
            res=num1/num2    
            document.getElementById("screen").innerHTML=res;
            num1=num2=0;
            op='';
            break;
    }
}
function sqrtn(){
    num1=+(document.getElementById("screen").innerHTML);
    res=Math.sqrt(num1);
    document.getElementById("screen").innerHTML=res;
}