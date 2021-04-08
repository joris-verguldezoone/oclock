var no = new Date().toLocaleString()
console.log(no)


var more = 0;
var less = 0;
var attente;
function addMore() {
    nombre_plus_trente = window.document.formulaire.more.value;
    more = more + 30;
    console.log(more);
    window.document.formulaire.minuteur.value = more

    return more
}
function addLess() {
    nombre_moins_trente = window.document.formulaire.more.value;
    less = less - 30;
    console.log(less);
    window.document.formulaire.minuteur.value = less

    return less
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

        return clearTimeout(attente) // nombre_ki_change_plus
    }

    // var stop = window.document.formulaire.arreter.value;
    // onclick.arreter({ function() { alert("ding ding ding par dessus la troisieme corde"); } })
    // si le minuteur atteint 1000 alors il s'eteint 
}