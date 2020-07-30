// selection des aiguilles à déplacer :
// Aiguille des secondes :
const secondHand = document.querySelector('.second-hand');
// Aiguille des minutes
const minHand = document.querySelector('.min-hand');
// Aiguille des Heures
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    // Selection de la date actuelle
    const now = new Date();

    // ################ SECONDS ################## 
    // Selectionne les secondes de la date actuelle
    const seconds  = now.getSeconds();
    // "conversion" des secondes en degrés pour l'affichage
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // Applique le style "rotate" augmenté à chaque seconde.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    
    // ################ Minutes ################## 
    // Selectionne les minutes de la date actuelle
    const minutes  = now.getMinutes();
    // "conversion" des minutes en degrés pour l'affichage
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    // Applique le style "rotate" augmenté à chaque minute.
    minHand.style.transform = `rotate(${minutesDegrees}deg)`
    
    
    // ################ Heures ################## 
    // Selectionne les heures de la date actuelle
    const hours  = now.getHours();
    // "conversion" des Heures en degrés pour l'affichage
    const hoursDegrees = ((hours / 12) * 360) + 90;
    // Applique le style "rotate" augmenté à chaque Heure.
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}
// lance la fonction set date toutes les secondes 
setInterval(setDate, 1000);