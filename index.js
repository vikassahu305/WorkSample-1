function navbar(){
    console.log("testing")
    var temp =document.getElementById('nav');
    if(temp.style.display == 'flex')
    {
        temp.style.display = 'none'
    }
    else{
        temp.style.display = 'flex'
    }
}
