 function fun() {
  inpu=document.getElementById("inp").value 
  const res=  fetch(`http://jsonplaceholder.typicode.com/todos/${inpu}`)
  .then(res=>res.json())
  .then(out=>output(out))

 }
function output(param){
    document.getElementById("out").innerHTML='id : '+param.id+'<br>'+'title : '+param.title+'<br>'+'User id :'+param.userId
}
 fun();