
const slides = [
    "./assets/img/01.webp", // 0
    "./assets/img/02.webp", // 1
    "./assets/img/03.webp", // 2
    "./assets/img/04.webp", // 3 
    "./assets/img/05.webp", // 4
]

//console.log(slides[0]);


const slidesElement = document.getElementsByClassName("slides")

//console.log(slidesElement);

// creo loop per ciclare le slide 

for (let index = 0; index < slides.length; index++) {
    const slideLink = slides[index];
    console.log(slideLink);
}