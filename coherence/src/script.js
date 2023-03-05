//cibler bouton commencer 
const start = document.getElementById('start');
//----------------------------------on-off sound-----------------------------------------------------------

// basculement bouton audio on - off 
//variable du btn on 
const audioOn = document.getElementById('iconOn');
console.log(audioOn);
//variable du btn off
const audioOff = document.getElementById('iconOff');
console.log(audioOff);

//ecoute le btn on 
audioOn.addEventListener('click', () => {
    //faire disparaitre le logo on 
    audioOn.classList.add('hidden');
    //fait apparaitre le logo off 
    audioOff.classList.remove('hidden');
})
//ecoute le bouton off
audioOff.addEventListener('click', () => {
    //fait apparaitre le logo on 
    audioOff.classList.add('hidden');
    //faire disparaitre le logo off 
    audioOn.classList.remove('hidden');
})

//--------------------hidden au clic commencer --------------------------
// variable du main et header 
const header = document.getElementById('header')
const main = document.getElementById('main')
//ecouter l element bouton start
start.addEventListener('click', () => {
    //je  cache le header (menu principal)
    header.classList.add('hidden');
    //je fais apparaitre le main (l animation)
    main.classList.remove('hidden');
})

//------------------------btn close-------------------------------------
//variable du bouton close
const btnClose = document.querySelector('.btnClose');

//Ecoute la bouton close 
btnClose.addEventListener('click', () => {
    window.history.back()
    //je  cache le main (l animation)
    main.classList.add('hidden');
    //je fais apparaitre le header (menu principal)
    header.classList.remove('hidden');
})

//-----------------------------Select----------------------------------
// envoyer tout les valeur du select dans la let "temps"

//variable du compteur
const select = document.querySelector("#compteur"); 

//ecouter l element bouton start

    start.addEventListener('click', () => {
    //peut aussi s appeler comme ceci :
        // start.onclick = ()=>{

    // definir la value du selecteur
    let selecTime = select.value;  
    //envois les informations de timer a partir du moment ou l animation apparaît 
    if ( main.classList.remove('hidden') === main.classList.remove('hidden') ){
        //appel les valeurs de select 
    switch (selecTime) {
        //dans le cas ou la valeur 1 (1 min) est selectionnée
        case "1":
            //action faite 
            //message 'appuyez sur une touche' pour démmarer 
            timerElement.textContent = "appuyez sur une touche";
            //demarre si appuye sur une touche 
            window.addEventListener('keydown', () => {
            //j'envois la valeur du 'temp' si case 1 séléctionné 
            temps = 60;
            // renvoi les valeur a la fontcion miminuerTimer
            diminuerTimer(selecTime )})
            // if (play musique si btn son active)
            break;
        case "2":
            temps = 120;
            diminuerTimer(selecTime )
            break;
        case "3":
            temps = 180;
            diminuerTimer(selecTime )
            break;
        case "4":
            temps = 240;
            diminuerTimer(selecTime)
            break;
        case "5":
            temps = 300;
            diminuerTimer(selecTime)
            break;
        default:
            window.alert('veuillez choisir une durée')
            break;
    }}
    else {timerElement.textContent = "test" }
})

//--------------------------------Timer--------------------------------

//https://www.commentcoder.com/timer-javascript/

// definir la base de depart du timer (test)
// le temps = a la value de mon select
let temps = 60;

//definir la base de depart du timer en ciblant les elements d affichage et ajout de ce timer
const timerElement = document.getElementById('timer'); 
//fonction pour diminuer l affichage de -1 par -1
    function diminuerTimer() {
        // diminuer le timer par interval de 1 seconde
        setInterval(() =>{
    // definir les minutes et les seconde

    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    //ajoutes les 0 au nombre < à la dizaine
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    //ajouter le text à afficher (ici des nombres)
    timerElement.textContent = minutes + ":" + secondes; 

    // //action des -1 
    // temps --; 

    //arrêter de timer une fois arrivé a zéro 
    temps = temps <= 0 ? 0 : temps - 1;  

    },1000 ); }
