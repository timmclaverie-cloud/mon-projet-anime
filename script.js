// script.js

/* * Ceci est la syntaxe de base d'Anime.js :
 * anime({ ...options... });
 */

// Attendons que la page soit chargée pour lancer l'animation
document.addEventListener('DOMContentLoaded', () => {

    // On cible les éléments avec la classe ".box"
    // C'est l'équivalent de "targets" sur le site d'animejs
    anime({
        targets: '.box',
        
        // Propriétés d'animation
        translateX: 250,    // Déplace de 250px sur l'axe X
        rotate: '1turn',    // Fait une rotation complète (360deg)
        scale: 1.5,         // Agrandit à 150%
        
        // Propriétés de l'animation elle-même
        duration: 2000,     // Durée de 2000ms (2 secondes)
        delay: anime.stagger(100), // Décale le début de chaque animation de 100ms
        
        direction: 'alternate', // Fait l'animation en sens inverse
        loop: true,             // Répète à l'infini
        easing: 'easeInOutSine' // Type d'accélération (très important pour le style)
    });

});
