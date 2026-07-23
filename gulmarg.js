const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 1;

function showSlide(index){

    if(index < 0){
        index = slides.length - 1;
    }

    if(index >= slides.length){
        index = 0;
    }

    current = index;

    slides.forEach((slide)=>{
        slide.classList.remove("active");
        slide.classList.remove("side");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active-dot");
    });

    slides[current].classList.add("active");

    dots[current].classList.add("active-dot");

    let left = current - 1;
    let right = current + 1;

    if(left < 0){
        left = slides.length - 1;
    }

    if(right >= slides.length){
        right = 0;
    }

    slides[left].classList.add("side");
    slides[right].classList.add("side");
}

function nextSlide(){
    showSlide(current + 1);
}

function prevSlide(){
    showSlide(current - 1);
}

dots.forEach((dot,index)=>{

    dot.addEventListener("click",function(){

        showSlide(index);

    });

});


showSlide(current);