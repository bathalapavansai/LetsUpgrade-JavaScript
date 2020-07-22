Colarray=["Red","Green","Blue","Black"]
i=0
function colour(){

    // i<4?document.body.style.backgroundColor=Colarray[i++%4]
        
    // :document.body.style.backgroundColor="white"
    document.body.style.backgroundColor=Colarray[i++%4]   
}

setInterval(colour,100);
