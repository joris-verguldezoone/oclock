// minuteur

var sum = 0;
var attente;

function addMore() {
    sum = parseInt(window.document.formulaire.minuteur.value) // permet de reprendre la valeur en cours, le parseInt est indispensable sinon il affiche un string
    sum = sum + 30;
    window.document.formulaire.minuteur.value = sum

    return sum // facultatif
}
function addLess() {
    sum = parseInt(window.document.formulaire.minuteur.value)

    sum = sum - 30;
    window.document.formulaire.minuteur.value = sum

    return sum // facultatif
}

var inuse = 0;

function startMinuteur() {
    if (!inuse) {
        minutageGo()
        inuse = 1;
    }
}
function stopMinuteur() {
    clearTimeout(attente)
    inuse = 0
}
function resetMinuteur() {
    inuse = 0
}
function minutageGo() {
    var nombre_qui_change = window.document.formulaire.minuteur.value;

    // on récupere: le name du formulaire -> de l'input qui déclenche l'évévement 5 -> value = value mais si on l'appel pas y'a r 
    nombre_qui_change = parseInt(nombre_qui_change) - 1;
    // parseInt c'est intval mais en js 
    // on récupere a chaque fois le meme nombre que l'on parse puis que l'on incrémente en int
    window.document.formulaire.minuteur.value = nombre_qui_change;
    // on affiche dans l'input minuteur le nombre qui change
    attente = setTimeout("minutageGo()", 1000);
    if (nombre_qui_change <= 0) {
        alert("ding ding ding fin du minuteur")
        nombre_qui_change = 0
        window.document.formulaire.minuteur.value = nombre_qui_change;
        inuse = 0

        return clearTimeout(attente) // nombre_ki_change_plus
    }
}

// CHRONO
var inuse2 = 0
var attenteChrono;
function startChrono() { // start and stop 
    console.log(inuse2)
    if (inuse2) {   // y'a un cheat code quand on spam le click chaque seconde s'ajoute instantannément 
        inuse2 = 0;
        clearTimeout(attenteChrono)

    }
    else {
        chronoGo();
        // ChronoGo()
        inuse2 = 1;
    }
}
function resetChrono() {
    clearTimeout(attenteChrono)
    inuse = 0
    console.log(tab)
    console.log(tabStr)
    tab = [];
    tabStr = '';
    document.getElementById('taleauTour').innerHTML = tabStr

}
function chronoGo() {
    var chrono_nombre = window.document.chrono.chronoDisplay.value;

    chrono_nombre = parseInt(chrono_nombre) + 1;

    window.document.chrono.chronoDisplay.value = chrono_nombre;

    attenteChrono = setTimeout("chronoGo()", 1000);
}
var tab = [];
var i = 0
var tabStr = ''
function chronoTour() {
    tab.push(window.document.chrono.chronoDisplay.value);
    tab.push('<br/ >')
    console.log(tab);
    tabStr = tab.join(' ') // par defaut il enleve les , 
    document.getElementById('taleauTour').innerHTML = tabStr
}

// Horloge
var attenteHorloge;
var reveil;
var textReveil = "";

function horlogeTempsReel(){
    var tempsReel = new Date().toLocaleString()
    var d = new Date()

    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
    tempsReel.toLocaleString();
    // console.log(tempsReel)
    document.horloge.tempsReelInput.value = datestring
    attenteHorloge = setTimeout("horlogeTempsReel()", 1000);

return tempsReel;
    
}
horlogeTempsReel();

function submitReveilFunc(){

    reveil = window.document.horloge.insertDate.value
    textReveil = window.document.horloge.insertText.value
   
    console.log(reveil)
    console.log(textReveil)

    tempsReel = horlogeTempsReel();
    reveil.toLocaleString()
    console.log(tempsReel)
    console.log(reveil)
    if(tempsReel == reveil){
        alert('debout on se leve')

    }

}
// document.getElementById('submitReveil').onclick = submitReveil();