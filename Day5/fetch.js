 async function fun() {
   
  const res=  fetch("http://jsonplaceholder.typicode.com/todos/30")
  .then(res=>res.json())
  .then(out=>console.log(out))

 }

 fun();