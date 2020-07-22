let name=prompt("Who are you??","guest")
let out=document.getElementById("out")
out.setAttribute('style','margin-top:200px')
out.setAttribute('align','center')
let s=`Welcome to our new website Mr.${name}`
out.innerHTML=s
function clock(){
var d =new Date()
t=d.toLocaleTimeString()
out1.innerHTML=t
}
setInterval(clock,1000);
tog=true
function toggle() {
    
    if(tog){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        tog=false
    }
    else
    {
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        tog=true
    }
    
    
}
