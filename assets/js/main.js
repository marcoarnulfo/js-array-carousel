
const slides = [
    "./assets/img/01.webp", // 0
    "./assets/img/02.webp", // 1
    "./assets/img/03.webp", // 2
    "./assets/img/04.webp", // 3 
    "./assets/img/05.webp", // 4
]

//console.log(slides[0]);


const slidesElement = document.querySelector(".slides")

//console.log(slidesElement);


// mi creo una variabile per monitorare la slide attiva e manipolarla

let immagineAttiva = 0

// creo loop per ciclare le slide 

for (let index = 0; index < slides.length; index++) {
    const slideLink = slides[index];
    console.log(slideLink);
    const slideHtml =
        ` <img class="${index === immagineAttiva ? 'active' : ''}" src="${slideLink}" alt=""> `
    console.log(slideHtml);
    slidesElement.insertAdjacentHTML("beforeend", slideHtml)
}

// ${index === 0 ? 'active' : ""}
// se index è uguale a 0 ? allora aggiungi "active"
// : altrimenti "" (non aggiungere niente)


// selezionare pulsati precedente e prossimo

const before_top = document.querySelector(".before_top")
//console.log(before_top);
const next_bot = document.querySelector(".next_bot")
//console.log(next_bot);

//creo evento al click del bottone next_bot



next_bot.addEventListener("click", function () {
    console.log("prossima img");
    const slides = document.querySelectorAll(".slides > img");
    console.log(slides);
    
    const slideCorrente = slides[immagineAttiva]; // 0
    console.log(slideCorrente);
    // rimuovo classe "active"
    slideCorrente.classList.remove("active") // rimuovi classe attiva
    // incremento immagine attiva

    // aumenta di 1
    if (immagineAttiva < 4){
        immagineAttiva++
    } else {
        immagineAttiva = 0
    }
    // seleziono seconda immagine
    let prossimaSlide = slides[immagineAttiva]; // slide numero 1
    console.log(prossimaSlide, immagineAttiva);
    // aggiungo classe attiva

    prossimaSlide.classList.add("active")
})
//creo evento al click del bottone before_top

before_top.addEventListener("click", function () {
    // 
    console.log(" img precedente");
    const slides = document.querySelectorAll(".slides > img");
    const slideCorrente = slides[immagineAttiva];
    // rimuovo classe "active"
    slideCorrente.classList.remove("active")
    // incremento immagine attiva
    
    if (immagineAttiva === 0){
        immagineAttiva = 4
    } else {
        immagineAttiva--
    }
    // seleziono seconda immagine
    const prossimaSlide = slides[immagineAttiva];
    console.log(prossimaSlide);
    // aggiungo classe attiva
    prossimaSlide.classList.add("active")
})
