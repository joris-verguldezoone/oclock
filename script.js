var no = new Date().toLocaleString()
console.log(no)

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

function startMinuteur(){
    if(!inuse){
        minutageGo()
        inuse = 1;
    }
}
function stopMinuteur(){
    clearTimeout(attente)
    inuse = 0
}
function resetMinuteur(){
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
    

    // var stop = window.document.formulaire.arreter.value;
    // onclick.arreter({ function() { alert("ding ding ding par dessus la troisieme corde"); } })
    // si le minuteur atteint 1000 alors il s'eteint 
}

// CHRONO
function chronoGo() {

    var chrono_nombre = window.document.chrono.chronoDisplay.value;

    chrono_nombre = parseInt(chrono_nombre) + 1;
    
    window.document.chrono.chronoDisplay.value = chrono_nombre;

    attente = setTimeout("chronoGo()", 1000);
     if (chronoGo <= 0) {
    //     alert("ding ding ding fin du minuteur")
    //     chrono_nombre = 0
    //     window.document.chrono.chronoTemps.value = chrono_nombre;

    //     return clearTimeout(attente) // nombre_ki_change_plus
    // }

    // var stop = window.document.formulaire.arreter.value;
    // onclick.arreter({ function() { alert("ding ding ding par dessus la troisieme corde"); } })
    // si le minuteur atteint 1000 alors il s'eteint 
}
}