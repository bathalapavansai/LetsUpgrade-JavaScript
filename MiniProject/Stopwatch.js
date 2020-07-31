let d= new Date();
d.setHours(0)
d.setMinutes(0);
d.setSeconds(0);
var s;

function pad(num){
    return (num<10?'0':'')+num
}
 
function start(){
   
    s=setInterval(run,1000)
}
function run(){
    
    d.setSeconds(d.getSeconds()+1)
    document.getElementById("out").innerHTML=pad(d.getHours())+' : '+pad(d.getMinutes())+' : '+pad(d.getSeconds())
    
}
function pause(){
    clearInterval(s)
}
function reset(){
    d.setHours(0)
    d.setMinutes(0);
    d.setSeconds(0);
    document.getElementById("out").innerHTML=pad(d.getHours())+' : '+pad(d.getMinutes())+' : '+pad(d.getSeconds())
    clearInterval(s)

}
var timer;
document.getElementById("m").value=0
document.getElementById("h").value=0
document.getElementById("s").value=0
function set()
{
    document.getElementById('out1').innerHTML=''
    let da= new Date()
    da.setHours(document.getElementById("h").value)
    da.setMinutes(document.getElementById("m").value)
    da.setSeconds(document.getElementById("s").value)
    timer=setInterval(setTimer,1000)
}
function setTimer(){
    if(document.getElementById("s").value==0)
    {
        if(document.getElementById("m").value>0)
        {
            document.getElementById("m").value-=1
            document.getElementById("s").value=59
        }
        else
        {
            if(document.getElementById("h").value>0)
            {
                document.getElementById("m").value=59
                document.getElementById("s").value=59
                document.getElementById("h").value-=1
            }
            else
            {
                clearInterval(timer)
                alert("Timer stopped / Set new values")
            }
        }
    }
    else
    document.getElementById("s").value-=1
    da.setSeconds(document.getElementById("s").value)

}

function resetTimer(){
    document.getElementById("m").value=0
    document.getElementById("h").value=0
    document.getElementById("s").value=0
    clearInterval(timer)

}