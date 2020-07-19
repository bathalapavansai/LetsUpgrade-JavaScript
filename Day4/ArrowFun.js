ask = (ques,yeah,nope)=>{
    confirm(ques)==true?yeah():nope()
}
ask("Do you agree?",function(){alert("You have agreed")},function(){alert("You cancelled the execution")})
