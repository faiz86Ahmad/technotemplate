
//up bottom to top btn
const MyButton = document.getElementsByClassName(".to-top");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement > 100){
        MyButton.style.display = "block";

    }
    else{
        MyButton.style.display = "none";
    }
}

MyButton.addEventListner('click',()=>{
    document.body.scrollTop = 0;
})

//scroll top to down btn

const downBtn = document.getElementsByClassName(".scroll-down");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.deltaY > 0 || document.documentElement.deltaY > 0){
        downBtn.style.display = "block";

    }
    else{
        downBtn.style.display = "none";
    }
}

downBtn.addEventListner('click',()=>{
    document.body.deltaY = 0;
})



