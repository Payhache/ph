// Création de la function pour enlever la transition 
function removeTransition(e) {
    // si lors de l'éxécution de le la fonction, l'attribut 'transform' n'éxiste pas. sors de la fonction.
    if(e.propertyName !== 'transform') return; 
    // Enléve la class playing de la div.
    this.classList.remove('playing');
}

// ici je sélectionne la touche qui est appuyée
window.addEventListener("keydown", e => {
    // Selection du fichier audio qui correspond à la touche qui est préssée : 
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Selection de la div qui correspond à l'audio de la touche préssée :
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // Ajoute la classe "playing"a la div pour changer l'affichage
    key.classList.add('playing');
    if(!audio) return // Si il n'y a pas de fichier audio associé sort du listener
    audio.currentTime = 0; // Renvoi au début du fichier Audio (0 = 0sec), permet de spam
    audio.play(); // Lance l'audio du fichier selectionné 
}); 

// Selection de toutes les touches :
let keys = document.querySelectorAll('.key');
// On boucle sur le tableau renvoyé par le querySelectorAll, 
// et lorsque la transition CSS sera terminé, on enleve la class de transition 
// ici les bordures jaunes qui apparraisent lors de l'enclenchement de la touche.
keys.forEach( key => key.addEventListener('transitionend', removeTransition)); 

