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
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <!-- icon -->
    <link href="images/horloge.ico" rel="icon">
    <title>O'Clock</title>
</head>
<body>
    <header>
    
        <span id="title_header">La salle du temps</span>

    </header>

    <main>  

    <audio id="music_pc_window" src="music/WINDOWS-95_1.mp3" preload="auto"></audio>
    <audio id="music_pc_guts" src="music/monkey-with-guts-theme.mp3" preload="auto"></audio>

    <!-- pc -->
    <!-- <audio id="music_mac_window" src="music/WINDOWS-95_1.ogg" preload="auto"></audio> -->
    <!-- <audio id="music_mac_guts" src="music/monkey-with-guts-theme.ogg" preload="auto"></audio>  j'arrive pas a select l'un ou l'autre si jsuis mac ou pc --> 

    
    <!-- mac -->


    <section id='sectionMinuteur'>
    
    <span class='tools_title'>Minuteur</span>
     
    <form name="formulaire">
    <div class='div_form_minuteur_top'>
        
        <button type='button' name='less' id='less' onClick='addLess();'><i class="fa fa-arrow-left"  aria-hidden="true"></i></button>
        <input type="text" name="minuteur" value='0' >
        <button type='button' name='more' id='more' onClick='addMore();'><i class="fa fa-arrow-right" aria-hidden="true"></i></button><br/>
    </div>

        <div class='div_form_minuteur'>
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
                <div id='center_chrono_top'>
                    <input type='text' id='chronoDisplay' name='chronoDisplay' value='0'>
                </div>
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
    <section id='horloge_section'>

        <form name='horloge' id='horloge_form' > 
            <span class='tools_title'>Reveil</span>
            
            <input type='text' id='tempsReelInput' name='tempsReelInput' onLoad="horlogeTempsReel();">

            <div class='holorge_inputs'>

                <input type='datetime-local' id='insertDate' name='insertDate'>

                <textarea id='insertText' name='insertText' placeholder="Rendez-vous professionnel"></textarea>

                <select name="select_Music">
                    <option value="0">Choix de la sonnerie</option>
                    <option value="1">Window98 by Vin'sap</option>
                    <option value="2">Guts</option>
                    <!-- <option value="2">Evangelion</option> -->
                </select>
                <input type='button' name='submitReveil' id='submitReveil' onClick='submitReveilFunc();' value='Enregistrer'>
                <a href=''>Arreter la musique de maniere brutale</a>
            </div>

  
        </form> 
        
        <div id='tableauTourHorloge'></div>

        <div id='tableauTourHorlogePasse'></div>
        
    </section>
 


    </main>  
    <footer>
        <div id='signature'><img src='images/netero.png' class='img' alt="Photo signature du dev"><span>HARDJOJO</span></div>
    </footer>
</body>

<script type="text/javascript" src="script.js"></script>
</html>