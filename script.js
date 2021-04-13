// minuteur
// a la base ça faisait 1000 lignes 
var sum = 0;
var attente;

function addMore() { // ajouter 30 sec 
    sum = parseInt(window.document.formulaire.minuteur.value) // permet de reprendre la valeur en cours, le parseInt est indispensable sinon il affiche un string
    sum = sum + 30;
    window.document.formulaire.minuteur.value = sum

    return sum // facultatif
}
function addLess() { // enlever 30 sec
    sum = parseInt(window.document.formulaire.minuteur.value)

    sum = sum - 30;
    window.document.formulaire.minuteur.value = sum

    return sum // facultatif
}

var inuse = 0;

function startMinuteur() { // condition pour le recursiv afin qu'il ne se lance pas plusieurs fois si on clique plusieurs fois
    if (!inuse) {
        minutageGo()
        inuse = 1; // condition
    }
}
function stopMinuteur() {
    clearTimeout(attente)
    inuse = 0 // condition
}
function resetMinuteur() {
    inuse = 0 // condition
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
    // console.log(inuse2)
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
    // console.log(tab)
    // console.log(tabStr)
    tab = []; // on reinitialise pour l'affichage
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
    // console.log(tab);
    tabStr = tab.join(' ') // par defaut il enleve les , merci stackoverflow
    document.getElementById('taleauTour').innerHTML = tabStr
}

// Horloge
var attenteHorloge;
var reveil;
var textReveil = "";
var tempsReel = "";

function horlogeTempsReel() {
    // var tempsReel = new Date().toLocaleString()
    var d = new Date()
    // console.log(tempsReel)
    var datestring =
        d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + // mise au format de l'input, /= toLocaleString 
        ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" +
        ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

    document.horloge.tempsReelInput.value = datestring
    attenteHorloge = setTimeout("horlogeTempsReel()", 1000); // 1000 millisecondes

    return datestring;
}

tempsReel = horlogeTempsReel();

arrayReveil = [];
var reveil_passe = "";
var tabStr_reveil = "";
var printEventArray = [];
var music = 0;
function submitReveilFunc() {

    reveil = window.document.horloge.insertDate.value // on prend les valeurs des inputs
    textReveil = window.document.horloge.insertText.value
    reveil = reveil.replace('T', ' ');
    music = window.document.horloge.select_Music.value
    arrayReveil.push({ date: reveil, text: textReveil })


    return arrayReveil;
}
var result_diff = "";
function compareDate() { // fonction qui me permet d'appeler les autres recursiv 
    tempsReel = horlogeTempsReel();
    tempsReel = (tempsReel.substr(0, 16));
    attenteHorloge = setTimeout("compareDate()", 1000);

    // arrayReveil = submitReveilFunc();
    findDate(tempsReel)
    // if(tempsReel ==)
    // console.log(tempsReel)
}
var alertVar = 0;

function findDate(tempsReel) { // ça se complique 
    tabStr_reveil = "";

    for (var i = 0; i < arrayReveil.length; i++) { // pour chaque valeur je compare la date en temps réel 

        if (arrayReveil[i].date != null) { // si ma date existe encore

            function get_time_diff(datetime) { // time diff de stackoverflow car la vie est trop courte pour comparer des dates tout seul dans son coin 
                var datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456 GMT+01:00";

                var datetime = new Date(datetime).getTime();
                var now = new Date().getTime();

                if (isNaN(datetime)) {
                    return "";
                }

                // console.log(datetime + " " + now);

                if (datetime < now) {
                    var milisec_diff = now - datetime;
                } else {
                    var milisec_diff = datetime - now;
                }

                var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

                var date_diff = new Date(milisec_diff);
                // console.log(date_diff.getHours()) 
                var date_diff_hour = date_diff.getHours() - 1 // Pour rétablir le GMT+01:00 qui fonctionne pas au dessus , les timezone en js c kk 
                return days + " jours " + date_diff_hour + " heures " + date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds";
            }
            result_diff = get_time_diff(arrayReveil[i].date); // du coup j'aurais le timediff de toutes les dates rentrés
            // console.log(result_diff)
            // console.log(diff)
            // console.log(arrayReveil[i].date)

            if (arrayReveil[i] == null) {
                //         
                tabStr_reveil += "";

            }
            else {

                tabStr_reveil += arrayReveil[i].date + " - " + arrayReveil[i].text + '<br/>' + result_diff + '<br/>'
            }

            tabStr_reveil = tabStr_reveil.replaceAll('undefined - undefined<br/>', ' '); // triche lvl avancé

            window.document.getElementById('tableauTourHorloge').innerHTML = tabStr_reveil
            // document.getElementById('tableauTourHorlogePasse').innerHTML = reveil_passe


            // }   
        }
        console.log(document.getElementById('music_pc_window').currentTime)
        console.log(alertVar)
        if (document.getElementById('music_pc_window').currentTime > 0 && alertVar == 0) { // permet de déclencher l'alert apres la musique 
            alertVar = 1  // sinon l'alert se déclenche dans tous les cas avant, encore une histoire compliqué pour rien 
            alert(texte); // alertVar permet de rentrer qu'une fois dans l'alert car on est dans une boucle sinon l'alert s'affiche en boucle

        }
        if (document.getElementById('music_pc_guts').currentTime > 0 && alertVar == 0) { // permet de déclencher l'alert apres la musique 
            alertVar = 1  // sinon l'alert se déclenche dans tous les cas avant, encore une histoire compliqué pour rien 
            alert(texte); // alertVar permet de rentrer qu'une fois dans l'alert car on est dans une boucle sinon l'alert s'affiche en boucle

        }
        if (arrayReveil[i].date == tempsReel) {
            alertVar = 0; // seul moment ou on peut reinitialiser 

            texte = arrayReveil[i].text
            if (music == 1) {
                document.getElementById('music_pc_window').play();
                // document.getElementById('music_mac_window').play(); // jsp comment detecter si c'est un mac ou pc 

            }
            if (music == 2) {
                document.getElementById('music_pc_guts').play();
                // document.getElementById('music_mac_guts').play();  // jsp comment detecter si c'est un mac ou pc 

                // alert(texte);

            }
            // alertes passées 
            reveil_passe += arrayReveil[i].date + " - " + arrayReveil[i].text + '<br/>' // jmet mes valeur déjà passées dans un string pour afficher + facilement
            document.getElementById('tableauTourHorlogePasse').innerHTML = reveil_passe

            delete arrayReveil[i].date // jdelete les evenement déjà passés pour les afficher dans le carré sombre
            delete arrayReveil[i].text
            // delete arrayReveil[i] erreur cannot read property of date 202
            // console.log(arrayReveil)
            // alertes restantes 

        }
        else {
            // console.log('false')
        }
    }

}
compareDate(); // recursiv façon bledard pcq mon onLoad fonctionne pas sur mon input jsp pk 