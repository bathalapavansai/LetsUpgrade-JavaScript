function prim(){
    var s=""
    let r=+(document.getElementById("range").value);
    for(let i=2;i<=r;i++){
        let count=0;
        for(let j=2;j<i;j++)
        {
            if(i%j==0)
                count++;
        }
        if (count==0)
            s+=i+" "
    }
    document.getElementById("out").innerHTML=s;
}