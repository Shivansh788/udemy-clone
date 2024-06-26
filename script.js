const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
let slideNumber = 1;
const images = document.querySelectorAll('.image');
const length = 2;

const nextSlide = ()=> {
    slider.style.transform = `translateX(-${slideNumber*1340}px)`;
    slideNumber++;
};
const prevSlide = ()=> {
    slider.style.transform = `translateX(-${(slideNumber-2)*1340}px)`;
    slideNumber--;
};
const getFirstSlide = ()=> {
    slider.style.transform = `translateX(0px)`;
    slideNumber =1;
};
const getLastSlide = ()=> {
    slider.style.transform = `translateX(-${(length-1)*1340}px)`;
    slideNumber = length;
};


right.addEventListener('click', ()=>{
    (slideNumber < length) ? nextSlide() : getFirstSlide();
});
left.addEventListener('click', ()=>{
    (slideNumber > 1) ? prevSlide() : getLastSlide();
});

