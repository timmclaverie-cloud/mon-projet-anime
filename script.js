// C'est la syntaxe de base de anime.js
// Tu attends que le 'document' soit prêt (bonne pratique)
document.addEventListener('DOMContentLoaded', (event) => {

    console.log("Anime.js est prêt !");

    // On lance l'animation
    anime({
        targets: '.mon-element', // Cible l'élément avec la classe CSS
        translateX: 250,         // Déplace-le de 250px sur l'axe X
        rotate: '1turn',         // Fait une rotation complète
        backgroundColor: '#00a8ff', // Change la couleur de fond
        duration: 2000,          // Durée de l'animation : 2 secondes
        loop: true,              // Répète l'animation à l'infini
        direction: 'alternate',  // Fait l'animation en aller-retour
        easing: 'easeInOutSine'  // Type d'accélération/décélération
    });

});
