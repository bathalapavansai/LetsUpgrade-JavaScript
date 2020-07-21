var num1=0
var num2=0
var res=0
var op=''
function clr()
{
    // document.getElementById("screen").innerHTML='0'
    document.getElementById("screen1").value=''
}
function screenUpdate(x)
{
    // document.getElementById("screen").innerHTML+=x;
    document.getElementById("screen1").value+=x;
}
function fnum(x)
{
    num1=+(document.getElementById("screen1").value);
    op=x
    // document.getElementById("screen").innerHTML='0';
    document.getElementById("screen1").value='';
}
function calculate()
{
    num2=+(document.getElementById("screen1").value);
    switch (op)
    {
        case '+':
            // document.getElementById("screen").innerHTML=''
            document.getElementById("screen1").value=''
            res=num1+num2    
            // document.getElementById("screen").innerHTML=res;
            document.getElementById("screen1").value=res;            
            num1=num2=0;
            op='';
            break;
        
        case '-':
            res=num1-num2    
            document.getElementById("screen1").value=res;
            num1=num2=0;
            op='';
            break;

        case '*':
            res=num1*num2    
            document.getElementById("screen1").value=res;
            num1=num2=0;
            op='';
            break;

        case '/':
            res=num1/num2    
            document.getElementById("screen1").value=res;
            num1=num2=0;
            op='';
            break;
    }
}
function sqrtn(){
    num1=+(document.getElementById("screen1").value);
    res=Math.sqrt(num1);
    document.getElementById("screen1").value=res;
}