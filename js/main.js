var tr=0;
var next = document.querySelector('.slider__next');
var view = document.querySelector('.slider__view');
var prev = document.querySelector('.slider__prev');
next.addEventListener('click',function(){
    tr-=900;
    if(tr==-4500){
        tr=0;
    }
    view.style.transform = "translateX("+tr+"px)";
    console.log(tr);
});
prev.addEventListener('click',function(){
    tr+=900;
    if(tr==900){
        tr=-3600;
    }
    view.style.transform = "translateX("+tr+"px)";
    console.log(tr);
    
});