<?php
// Le but de ce projet est de reproduire un minuteur, un chronomètre, un
// réveil, et une horloge.
// Vous devrez être capable d’augmenter le temps du minuteur grâce à des
// flèches, ou de rentrer un temps en input. Lorsque le minuteur arrive à zéro,
// une alerte (et pas une popup) apparaît et indique que le temps est écoulé.

//


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'> 
    <link rel="stylesheet" href='style.css'>
    <title>O'Clock</title>
</head>
<body>
    <header>
    
        <span id="title_header">O'Clock ou pas O'Clock????</span>

    </header>

    <main>  
    <section id='sectionMinuteur'>
    
    <span class='tools_title'>Minuteur</span>
     
    <form name="formulaire">
        <button type='button' name='less' id='less' onClick='addLess();'><i class="fa fa-arrow-left"  aria-hidden="true"></i></button>
        <input type="text" name="minuteur" value='0' >
        <button type='button' name='more' id='more' onClick='addMore();'><i class="fa fa-arrow-right" aria-hidden="true"></i></button><br/>
        

        <div id='div_form_minuteur'>
            <input type="button" value="Démarrez!" id='demarrerChrono' onClick="startMinuteur();"> 
            <!-- quand je click ça lance l'événement du minutage -->
            <input type="button" value="Arrêter" name='arreter' onClick="stopMinuteur();">
            <input type="reset" name='reset' value='reset' onClick="resetMinuteur();">
            <!-- clear l'evenement -->
        </div>
    </form>
    
    </section>
    <section id='sectionChrono'>
        <span class='tools_title'>Chronomètre</span>
        <div class='flex_row'>
            <section id='sectionChronoForm'>
                <!-- Pour le chronomètre, vous devrez le lancer et l’arrêter grâce à un même
                bouton (marche / arrêt). De plus, vous devrez implémenter un bouton
                “tour”, qui ajoutera le temps affiché, au moment où l’utilisateur appuie, dans
                une liste “temps”. Un bouton reset sera présent pour remettre le chrono à
                0. -->
                <form name='chrono' id='form_chronometre'>

                <input type='text' id='chronoDisplay' name='chronoDisplay' value='0'>

                <div id='section_chrono_inputs'>
                    <input type='button' id='chronoTemps' name='chronoTemps' onClick="startChrono();" value='Marche/Arret'>
                    
                    <input type="button" value="tour" name='tour' id='tour' onClick="chronoTour();">

                    <input type="reset" value="reset" name='reset' onClick="resetChrono();">
                </div>
                </form>
            </section>


            <div id='taleauTour'></div>
        </div>
    </section>
    <!-- En ce qui concerne l’horloge, elle devra être à l’heure française (UTC + 1), -->
 <!-- fonctionnelle, et donner l’heure, les minutes, et les secondes.

 Enfin pour le réveil, l’utilisateur pourra entrer une heure et un texte en
 input. Lorsque l’horloge atteindra l’heure entrée, une alerte (et pas une
 popup) apparaît indiquant le message que l’utilisateur aura rentré. De plus,
 l’utilisateur aura la possibilité d’entrer plusieurs alarmes qui seront
 affichées dans une liste, avec “passée” si l’heure de l’alarme est passée, et

 “dans x temps” avec x représentant le temps restant avant que l’heure ne
 soit atteinte. -->
    <section id='horloge'>
    <form name='horloge' > 
    
        <input type='text' id='tempsReelInput' name='tempsReelInput' onLoad="horlogeTempsReel();">

    <label for='insertNumber'>InsertNumber</label>
    <input type='datetime-local' id='insertDate' name='insertDate'>
    <textarea id='insertText' name='insertText' placeholder="Rendez-vous professionnel"></textarea>  
    <input type='button' name='submitReveil' id='submitReveil' onClick='submitReveilFunc();' value='Enregistrer'>
<!-- 
    <label for=''></label>
    <input type='' id='' name='' placeholder=''> --> -->
    
    </form> 
    </section>
 


    </main>  
    <footer>
        <div id='signature'><img src='images/netero.png' class='img' alt="Photo signature du dev"><span>HARDJOJO</span></div>
    </footer>
</body>

<script type="text/javascript" src="script.js"></script>
</html>