// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// nome autore,
// foto profilo,
// data,
// testo del post,
// immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
// numero di likes.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

// 1. Trasformo il template html in elementi js
// 2. Rendo dinamico il template
// 3. Creo l'array di oggetti
// 4. Genero il template con i dati dell'array
// 5. Aggiungo funzionalità click


let container = document.getElementById("container");

let users = [
    {
        id: 1,
        profilePic: "https://unsplash.it/300/300?image=15",
        author: "Giovanni Capelli",
        image: "https://unsplash.it/600/300?image=171",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        date: "1 settembre 2022",
        likes: 80,
    },
    {
        id: 2,
        profilePic: "https://unsplash.it/300/300?image=206",
        author: "Edoardo Bianchi",
        image: "",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias. ",
        date: "24 maggio 2022",
        likes: 50,
    },
    {

        id: 3,
        profilePic: "https://unsplash.it/300/300?image=912",
        author: "Pietro Rossi",
        image: "https://unsplash.it/600/300?image",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        date: "13 dicembre 2021",
        likes: 1,
    },
    {
        id: 4,
        profilePic: "https://unsplash.it/300/300?image=564",
        author: "Stefano verdi",
        image: "https://unsplash.it/600/300?image=614",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        date: "30 aprile 2021",
        likes: 1890,
    },
    {
        id: 5,
        profilePic: "https://unsplash.it/300/300?image=82",
        author: "Andrea Grigi",
        image: "",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        date: "12 gennaio 2023",
        likes: 800,
    },
]

//ciclo per generare i dati dell'array in pagina
function updateDOM () {
    let usersList = "";
    for(let i = 0; i < users.length; i++) {
        let currentUser = users[i];
        usersList += createTemplate(currentUser);
        container.innerHTML = usersList;
    }    
}

function updateUserLikes (id) {
    const usersCopy = [...users];

    for(let i = 0; i < usersCopy.length; i++) {
        let currentUser = usersCopy[i];
        if (currentUser.id == id) {
            currentUser.likes = currentUser.likes + 1;
        }
    }

    return usersCopy;
} 

updateDOM();
addEventListeners();

//post è l'array
function addEventListeners () {

    let buttons = document.querySelectorAll(".likes__cta");
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click",
        function(){
            let button = buttons[i];
            let id = button.querySelector('.like-button').attributes['data-postid'].value;
            users = updateUserLikes(id);
            updateDOM();
            addEventListeners();
        }
        )
    }
} 


// likes.addEventListener("click",
//     function(){
//         console.log("click")
//     }
// )

//funzione per generare i dati di un oggetto in pagina
function createTemplate(user) {
  const { profilePic, author, date, text, image, likes, id } = user;
  return `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${profilePic}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${text}</div>
        <div class="post__image">
            <img src="${image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button" href="#" data-postid=${id}>
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;
}

//parametrizzo il bottone
//faccio un array con tutti i bottoni in pagina


