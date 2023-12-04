// oggetto array delle imagini con del testo
const images = [ 
   
    { 
      image: 'img/01.webp', 
      title: 'Marvel\'s Spiderman Miles Morale', 
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 
    
    { 
      image: 'img/02.webp', 
      title: 'Ratchet & Clank: Rift Apart', 
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    
    { 
      image: 'img/03.webp', 
      title: 'Fortnite', 
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    
    { 
      image: 'img/04.webp', 
      title: 'Stray', 
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    
    { image: 'img/05.webp', 
      title: "Marvel's Avengers", 
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
 ];


//  usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
const slide = document.querySelector(".slider");

images.forEach((element, index) => {

    console.log(index);

    if (index === 0) {

        slide.innerHTML +=  `<div class="item active">
                                <img src="${element.image}" alt="photo cartoon">
                                <h3> ${element.title} </h3>
                                <span> ${element.text} </span>
                            </div>`;
    } else {

        slide.innerHTML +=  `<div class="item">
                                 <img src="${element.image}" alt="photo cartoon">
                                 <h3> ${element.title} </h3>
                                 <span> ${element.text} </span>
                            </div>`;
    }

});


const items = document.getElementsByClassName ("item");
console.log (items[0]);


let activeItem = 0;

// navigazione
const next = document.querySelector(".next");

next.addEventListener( "click", function() {

    if (activeItem < items.length - 1) {
        // togliamo la classe active all'elemento corrente
        items[activeItem].classList.remove("active");

        // incrementiamo l'indice dell'elemento da visualizzare
        activeItem ++;

        // aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add("active");

        if (activeItem === items.length -1) {
            next.classList.add("hidden");
        } else {
            prev.classList.remove("hidden");
        }

    }

});

const prev = document.querySelector(".prev");

prev.addEventListener( "click", function() {

    if (activeItem <= items.length - 1) {
        // togliamo la classe active all'elemento corrente
        items[activeItem].classList.remove("active");

        // incrementiamo l'indice dell'elemento da visualizzare
        activeItem --;

        // aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add("active");

        if (activeItem === 0) {
            prev.classList.add("hidden");
        } else {
            next.classList.remove("hidden");
        }

    }

});