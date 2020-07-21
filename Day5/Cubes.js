function fun()
{
    let n=+(document.getElementById("inp").value);
    if(n>0)
    {
        let arr=[]
        for(let i=1;i<=n;i++)
            arr.push(i);
        let odds=arr.filter(o=>o%2!=0).map(c=>c**3);
        document.getElementById("out").innerHTML=odds

    }
}