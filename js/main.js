//funzione che visualizza la foto successiva
function nextImage(i, valori) {
    //valori[i] è l'immagine che stiamo visualizzando ora.
    //noi dobbiamo visulizzare img+1
    //prima dobbiamo fare il controllo se img è l'ultima posizione dell'array
    if(i < valori.length){
        //possiamo visualizzare le immagini
        const img = document.getElementById('img');
        const title = document.getElementById('title');
        const text = document.getElementById('text');
        
        img.src = `./${valori[i].image}`;
        title.innerText = valori[i].title;
        text.innerText = valori[i].text;
    }
}

//funzione che visualizza l'immagine precedente
function prevImage(i, valori){
    if(i >= 0){
        const img = document.getElementById('img');
        const title = document.getElementById('title');
        const text = document.getElementById('text');
        
        img.src = `./${valori[i].image}`;
        title.innerText = valori[i].title;
        text.innerText = valori[i].text;
    }
}

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
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const prev = document.getElementById('prev');
const next = document.getElementById('next');
let img_current = 0;
prev.addEventListener('click', function(){
    //dobbiamo far visualizzare la FOTO PRECEDENTE
    prevImage(img_current, images);
    if (img_current > 0) {
        img_current --;
    }else{
        img_current = images.length - 1;
    }
    console.log(img_current);
});

next.addEventListener('click', function(){
    //dobbiamo far visualizzare la FOTO SUCCESSIVA
    if(img_current < images.length -1){
        img_current ++;
    }else{
        img_current = 0;
    }
    nextImage(img_current, images);
    console.log(img_current);
    
});
