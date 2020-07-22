class User{
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.course=[];
    }
    login () {
        console.log(`${this.name} has logged in`)
    }
    logout()
    {
        console.log(`${this.name} has logged out`)       
    }
}
class Moderator extends User{
    constructor(name, age, email,coins){
        super(name,age,email)
        this.coins=coins
    }
    addcoins()
    {
        let eid=""+document.getElementById("Moduser").value;
        for(let i=0;i<users.length;i++)
        {
            let u =users[i]
            if(u.email==eid)
            {
                console.log("found "+u.email)
                var ur=u
                break
            }
        }
        ur.coins+=+(document.getElementById("addcoins").value)
        document.getElementById("coins").innerHTML=`output :${ur.name} ${ur.email} ${ur.age} ${ur.coins} ${ur.course}`
    }
    removecoins()
    {
        let eid=""+document.getElementById("Moduser").value;
        for(let i=0;i<users.length;i++)
        {
            let u =users[i]
            if(u.email==eid)
            {
                console.log("found "+u.email)
                var ur=u
                break
            }
        }
        ur.coins-=+(document.getElementById("subcoins").value)
        document.getElementById("coins").innerHTML=`output :${ur.name} ${ur.email} ${ur.age} ${ur.coins} ${ur.course}`
    }
}
class Admin extends Moderator{
    constructor(name, age, email,coins,course){
        super(name,age,email,coins)
        this.course=course
    }
    addcourse()
    {
        let eid=""+document.getElementById("moduser").value;
        for(let i=0;i<users.length;i++)
        {
            let u =users[i]
            if(u.email==eid)
            {
                console.log("found "+u.email)
                var ur=u
                break
            }
        }
        ur.course.push(document.getElementById("addco").value)
        document.getElementById("course").innerHTML=`output :${ur.name} ${ur.email} ${ur.age} ${ur.coins} ${ur.course}`
    
    }
    removecourse()
    {
        let eid=""+document.getElementById("moduser").value;
        for(let i=0;i<users.length;i++)
        {
            let u =users[i]
            if(u.email==eid)
            {
                console.log("found "+u.email)
                var ur=u
                break
            }
        }
        ur.course=[]
        document.getElementById("course").innerHTML=`output :${ur.name} ${ur.email} ${ur.age} ${ur.coins} ${ur.course}`
    }
}

var users=[]
let m=new Moderator("mod",22,"mod@g.c",20)
let a=new Admin("adm",22,"ad@g.c",10,"course1")
function AddCoins()
{
    m.addcoins()
}
function subCoins()
{
    m.removecoins()
}
function AddCourse()
{
    a.addcourse()
}
function SubCourse()
{
    a.removecourse()
}

function addUser()
{
    let name =document.getElementById("addusername").value;
    let age =document.getElementById("adduserage").value;
    let email =document.getElementById("adduseremail").value;
    let u = new User(name,age,email);
    users.push(u);
    document.getElementById("addusername").value="";
    document.getElementById("adduserage").value="";
    document.getElementById("adduseremail").value=""
    console.table(users)
}
function showDetails() {
    let eid=""+document.getElementById("disuser").value;
    console.log("searching for "+eid+" in "+users)
    console.table(users)
    
    for(let i=0;i<users.length;i++)
    {
        let u =users[i]
        if(u.email==eid)
        {
            console.log("found "+u.email)
            var ur=u
            break
        }
    }
    console.table(ur)
    document.getElementById("showdetails").innerHTML="output :"+ur.name+" "+ ur.email+" "+ur.age+" "+ur.coins+" "+ur.course
}



