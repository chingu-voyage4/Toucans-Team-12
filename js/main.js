var tr=0;
var next = document.querySelector('.slider__next');
var view = document.querySelector('.slider__view');
var prev = document.querySelector('.slider__prev');
var sliderLinks = document.querySelectorAll('.slider__link__direct');
var codeSelectors = document.querySelectorAll('.code__selectors>*');
var test = document.querySelector('.testimonials');
var z = 2;

// Testimonials slider functionality
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

sliderLinks.forEach(function(directLink){
    var offset = directLink.style.getPropertyValue("--offset");
    directLink.addEventListener('click',function(){
        tr=offset;
        view.style.transform = "translateX("+tr+"px)";
    });
});

// Code Sample - code display change 
codeSelectors.forEach(function(codeSelector){
    codeSelector.addEventListener('click',function(){
        var toBeRemoved = document.querySelector('.code__display');
        toBeRemoved.classList.remove("code__display");
        codeSelector.classList.add("code__display");
        var ele = codeSelector.style.getPropertyValue("--ele");
        var codeBlock = document.querySelector(`.${ele}`);
        codeBlock.style.setProperty("z-index",z++);
    });
});
