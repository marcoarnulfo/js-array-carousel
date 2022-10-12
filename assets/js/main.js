
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
    ` <img class="${index === immagineAttiva ? 'active ' + 'img-fluid' : 'hide'}" src="${slideLink}" alt=""> ` 
    console.log(slideHtml);
    slidesElement.insertAdjacentHTML("beforeend", slideHtml)
}

// ${index === 0 ? 'active' : ""}
// se index è uguale a 0 ? allora aggiungi "active"
// : altrimenti "" (non aggiungere niente)
