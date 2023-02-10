// const card = document.querySelector(".card_intitule")

// card.addEventListener("scroll")

window.addEventListener('scroll', () => {
    // mémorise la quantité de pixels défilés
    const scroll = window.scrollY;

    // le code placé ici est executé quand on défile la fenêtre
    // placer les balises cibler dans dans les classes créées de position scroll
    // Exemple: pour color les H1 , Placer H1 {color: blue; } et ses propiétés dans la class scrollhaut du CSS 

    if (scroll < 500) {
        setClass("scrollhaut")

    }
    else if (scroll < 1000) {
        setClass("scrollmiddle")
    }

    else {
        setClass("red")
    }

});


// Et l'ajout de classes au body
function setClass(className) {
    document.body.className = className;
}