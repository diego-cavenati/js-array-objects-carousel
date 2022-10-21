/* 
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.


BONUS 1 (opzionale):
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2  (opzionale):
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3  (opzionale):
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


*/

const imgSlides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// selezione dove mettere le immagini
const slidesElement = document.querySelector(".slides");

// seleziono i pulsanti in pagina
const prevElement = document.querySelector(".prev");
const nextElement = document.querySelector(".next");

//seleziono elemento per il titolo
const slidesDescription = document.querySelector('.info');

// creo la variabile che stabilisce che il conteggio parte da 0
let slidesActive = 0;


// Inserisco in .slides le immagini grazie ad un loop
let i = 0;
const markupSlides = imgSlides.forEach(element => {
    
    const markupSlide = `<img class="${i === slidesActive ? `active` : ``}" src="./assets/${element.image}" alt="">`;
    slidesElement.insertAdjacentHTML('beforeend', markupSlide);
    
    const markupTitle = `<h2 class="${i === slidesActive ? `active` : ``}">${element.title}</h2>`;
    slidesDescription.insertAdjacentHTML("afterbegin", markupTitle);

    const markupDescription = `<p class="${i === slidesActive ? `active` : ``}">${element.text}</p>`;
    slidesDescription.insertAdjacentHTML("beforeend", markupDescription);

    i++
    return 
});


//  pulsante next
nextElement.addEventListener('click', function() {

    //Seleziono tutte le immagini 
    const allSlides = document.querySelectorAll('.slides > img');
    // Seleziono descrizione
    const allDescription = document.querySelectorAll('.info > p');
    // Seleziono titolo
    const allTitle = document.querySelectorAll('.info > h2');


    const visibleSlideInfo = allDescription[slidesActive];
    visibleSlideInfo.classList.remove('active');

    const visibleSlideTitle = allTitle[slidesActive];
    visibleSlideTitle.classList.remove('active');
    
    const visibleSlide = allSlides[slidesActive];
    visibleSlide.classList.remove('active');


    //incremento il valore della slide attiva
    slidesActive++;
    if (slidesActive == imgSlides.length) {
        slidesActive = 0;
    }

    
    // selezione la slide che deve essere attiva
    const nextSlideActive = allSlides[slidesActive];
    // aggiungo la classe active e la rendo visibile
    nextSlideActive.classList.add('active');

    const nextSlideInfoActive = allDescription[slidesActive];
    nextSlideInfoActive.classList.add('active');

    const nextSlideTitleActive = allTitle[slidesActive];
    nextSlideTitleActive.classList.add('active');

}
)

//  pulsante prev
prevElement.addEventListener('click', function() {

    const allSlides = document.querySelectorAll('.slides > img');
    // Seleziono descrizione
    const allDescription = document.querySelectorAll('.info > p');
    // Seleziono titolo
    const allTitle = document.querySelectorAll('.info > h2');

    
    const visibleSlideInfo = allDescription[slidesActive];
    visibleSlideInfo.classList.remove('active');

    const visibleSlideTitle = allTitle[slidesActive];
    visibleSlideTitle.classList.remove('active');
    
    const visibleSlide = allSlides[slidesActive];
    visibleSlide.classList.remove('active');


    //incremento il valore della slide attiva
    slidesActive--;

    if (slidesActive < 0) {
        slidesActive = 4;
    }

    
    // selezione la slide che deve essere attiva
    const nextSlideActive = allSlides[slidesActive];
    // aggiungo la classe active e la rendo visibile
    nextSlideActive.classList.add('active');

    const nextSlideInfoActive = allDescription[slidesActive];
    nextSlideInfoActive.classList.add('active');

    const nextSlideTitleActive = allTitle[slidesActive];
    nextSlideTitleActive.classList.add('active');

}
)