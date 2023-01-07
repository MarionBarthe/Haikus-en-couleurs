const nbVers=10;
const vers1=["Froid au milieu du chaud","Lumières ondulantes sur fond noir",
"Sur une photo un visage","Un éclair saisissant de colère",
"Toute petite poigne de fer","Confort douillet de ma couette",
"Des souffles légers et réguliers", " Ici, sur la montagne enneigée",
"Dans la salle de sport","Sur la plage, des vagues"];
const vers2=["Il faudrait rentrer vite à la maison","Il faudrait qu'arrête cette lente danse",
"Il faudrait toujours qu'on se souvienne","Il faudrait gronder, retentir, éclater, se lâcher...",
"Il faudrait passer à d'autres choses","Il faudrait bouger, sortir de mon lit",
"Il faudrait être discret, ne réveiller personne","Il faudrait se réchauffer, il fait froid",
"Il faudrait faire des efforts, se bouger","Il faudrait évacuer, mais hélas, pas aujourd'hui"];
const vers3=["Mais je ne peux pas","Pourtant mes larmes coulent encore",
"Hélas ma mémoire est brouillée","Qu'enfin la tempête passe",
"Seulement la béatitude me fige","J'ai vraiment la flemme",
"Je suis beaucoup trop maladroite", "Mais j'avance en t-shirt",
"Mais Ring Fit est suffisant","L'argent des baigneurs est important"];


var delayInMilliseconds = 3000; //1 second
setTimeout(function() {
    var vers = document.getElementsByClassName("flex-item");
    for (let i = 0; i < vers.length; i++) {
        vers[i].classList.toggle("fade-in-text");
    }
}, delayInMilliseconds);



// function changeVers1(){
//     document.getElementById("vers1").innerHTML ="Lumières ondulantes sur fond noir";
// }

function stayOn(numVers){
    animeCercle();
    if(numVers!='1'){changeVers('1');}
    if(numVers!='2'){changeVers('2');}
    if(numVers!='3'){changeVers('3');}
}

function changeVers(numVers){
    let vers = document.getElementById("vers"+numVers);
    vers.innerHTML = randomVers(numVers);
    vers.classList.toggle("fade-in-text");
    var delayInMilliseconds = 3000; //1 second
    setTimeout(function() {
        vers.classList.toggle("fade-in-text");

    }, delayInMilliseconds);

}

function randomVers(numVers){
    let rdm = Math.floor(Math.random() * nbVers); 
    switch(numVers){
        case '1': 
            return vers1[rdm];
        case '2':
            return vers2[rdm];
        case '3':
            return vers3[rdm];
    }
}

function randomColor(){
    const colors = ["#E573A5","#EFA2C5","#82A1DB","#6283C2","#EC8171","#79BBA4","#A8DEC1","#FFE6A2"];
    let rdm = Math.floor(Math.random() * colors.length); 
    return colors[rdm];
}

function animeCercle() {
    var elmt =  document.getElementById('Oval');
    var color = randomColor();
    elmt.style.fill = color;
    elmt.classList.toggle("animON");
    var delayInMilliseconds = 3000; //1 second
    setTimeout(function() {
        elmt.classList.toggle("animON");
        document.documentElement.style.background=color;

    }, delayInMilliseconds);

}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("helpButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
