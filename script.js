// script.js

// Attendons que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {

    // Crée une timeline. 
    // "loop: true" : elle tournera en boucle
    // "direction: 'alternate'" : elle fera A->B puis B->A
    const mainTimeline = anime.timeline({
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine' // Une accélération douce
    });

    // 1. ANIMATION DES ANNEAUX
    //    C'est l'effet "dessin". 
    //    On anime 'strokeDashoffset' de sa pleine longueur à 0.
    mainTimeline.add({
        targets: '.ring',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1500,
        // 'delay' décale le début de l'animation pour chaque anneau
        delay: anime.stagger(100), 
    });

    // 2. ANIMATION DE LA VAGUE (Path Morphing)
    //    C'est la partie la plus avancée. On anime la forme
    //    du "path" (l'attribut 'd') d'une forme A à une forme B.
    mainTimeline.add({
        targets: '#wave-path',
        // L'attribut 'd' (les coordonnées de la forme)
        d: [
            // Valeur de départ (celle dans le HTML)
            { value: 'M 0 100 C 40 80, 60 80, 100 100 S 140 120, 200 100 L 200 200 0 200 Z' },
            // Valeur d'arrivée (une forme différente)
            { value: 'M 0 100 C 40 120, 60 120, 100 100 S 140 80, 200 100 L 200 200 0 200 Z' }
        ],
        duration: 2000,
        // On place cette animation 1 seconde AVANT la fin de la précédente
        offset: '-=1000' 
    }, 0); // Le '0' place cette animation au tout début de la timeline

    // 3. ANIMATION DES POINTILLÉS
    //    On fait la MÊME animation de morphing sur les pointillés
    //    pour qu'ils suivent la vague.
    mainTimeline.add({
        targets: '#wave-dots',
        d: [
            { value: 'M 0 100 C 40 80, 60 80, 100 100 S 140 120, 200 100' },
            { value: 'M 0 100 C 40 120, 60 120, 100 100 S 140 80, 200 100' }
        ],
        duration: 2000,
        offset: '-=1000'
    }, 0); // On la démarre aussi à 0

});
