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
var tempsReel = "";

function horlogeTempsReel() {
    // var tempsReel = new Date().toLocaleString()
    var d = new Date()
    // console.log(tempsReel)
    var datestring =
        d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
        ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" +
        ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);

    document.horloge.tempsReelInput.value = datestring
    attenteHorloge = setTimeout("horlogeTempsReel()", 1000);

    return datestring;
}




tempsReel = horlogeTempsReel();

arrayReveil = [];
var reveil_passe = "";
var tabStr_reveil = "";
var printEventArray = [];

function submitReveilFunc() {

    reveil = window.document.horloge.insertDate.value
    textReveil = window.document.horloge.insertText.value
    reveil = reveil.replace('T', ' ');

    arrayReveil.push({ date: reveil, text: textReveil })


    return arrayReveil;
}
var result_diff = ""

function compareDate() {
    tempsReel = horlogeTempsReel();
    tempsReel = (tempsReel.substr(0, 16));
    attenteHorloge = setTimeout("compareDate()", 1000);

    // arrayReveil = submitReveilFunc();














    findDate(tempsReel)
    // if(tempsReel ==)
    // console.log(tempsReel)
}
function findDate(tempsReel) {
    tabStr_reveil = "";

    for (var i = 0; i < arrayReveil.length; i++) {

        if (arrayReveil[i].date != null) {

            function get_time_diff(datetime) {
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
                var date_diff_hour = date_diff.getHours() - 1 // Pour rétable le GMT+01:00 qui fonctionne pas au dessus , les timezone en js c kk 
                return days + " jours " + date_diff_hour + " heures " + date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds";
            }
            result_diff = get_time_diff(arrayReveil[i].date);
            console.log(result_diff)
            // console.log(diff)
            console.log(arrayReveil[i].date)

            // for (var i = 0; i < arrayReveil.length; i++) {

            //     // console.log(arrayReveil[i].date);
            //     console.log(printEventArray)

            //     printEventArray.push(arrayReveil[i].date + " - " + arrayReveil[i].text + '<br/>')
            if (arrayReveil[i] == null) {
                //         
                tabStr_reveil += "";

            }
            else {

                tabStr_reveil += arrayReveil[i].date + " - " + arrayReveil[i].text + '<br/>' + result_diff + '<br/>'
            }
            //     tabStr_reveil = printEventArray.join(' ') // par defaut il enleve les , 
            //     // console.log(reveil_passe);
            tabStr_reveil = tabStr_reveil.replaceAll('undefined - undefined<br/>', ' '); // triche lvl avancé

            window.document.getElementById('tableauTourHorloge').innerHTML = tabStr_reveil
            // document.getElementById('tableauTourHorlogePasse').innerHTML = reveil_passe


            // }   
        }



        if (arrayReveil[i].date == tempsReel) {
            texte = arrayReveil[i].text
            alert(texte);
            // alertes passées 
            reveil_passe += arrayReveil[i].date + " - " + arrayReveil[i].text + '<br/>'
            document.getElementById('tableauTourHorlogePasse').innerHTML = reveil_passe

            delete arrayReveil[i].date
            delete arrayReveil[i].text
            // delete arrayReveil[i] erreur cannot read property of date 202
            // console.log(arrayReveil)
            // alertes restantes 

        }
        else {
            console.log('false')
        }
    }
}



compareDate();
