function PrintTable(){
    let n=+(document.getElementById("num").value)
    let s='';
    s+='<table border="1">'
    for(let i=1;i<=10;i++)
    {
        s+='<tr><td>'
        s+=(n)+' * '+(i)+' = '+(n*i)   
        s+='</td></tr>'
    }
    document.getElementById("out").innerHTML=s
}