function PrintTable(){
    let n=+(document.getElementById("num").value)
    let s='';
    s+='<table >'
    for(let i=1;i<=10;i++)
    {
        s+='<tr>'
        s+='<td>'
        s+=(n)
        s+='</td>'
        s+='<td>'
        s+=' * '
        s+='</td>'
        s+='<td>'
        s+=(i)
        s+='</td>'
        s+='<td>'
        s+=' = '
        s+='</td>'
        s+='<td>'
        s+=(n*i)  
        s+='</td></tr>'
    }
    document.getElementById("out").innerHTML=s
}