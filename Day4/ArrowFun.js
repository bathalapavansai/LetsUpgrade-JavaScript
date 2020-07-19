ask = (ques)=>{
    var confirm=prompt(ques)
    confirma(confirm)
}
confirma=(confirm)=>{
    confirm=='yes'?alert("You have agreed"):alert("You cancelled the execution")
}