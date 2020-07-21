const student={
    name:"Helsinki",
    age:24,
    projects:{
        diceGame : 'Two player dice game using JavaScript'
    }
}
let {name,age,projects:{diceGame}}=student;
document.getElementById("out").innerHTML="Name : "+name+"<br>"+"Age : "+age+"<br>"+"Project : "+diceGame;
console.log(name,age )