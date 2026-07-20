/**
 * REVEAL & TRANSICIONES DE PANTALLA
 */
function revealMessage() {
    const pane1Element = document.getElementById('pane-1');
    const pane2Element = document.getElementById('pane-2');

    pane1Element.classList.add('exit-animation');

    setTimeout(() => {
        pane1Element.classList.remove('active');
        pane1Element.classList.add('hidden');
        pane1Element.classList.remove('exit-animation');

        pane2Element.classList.remove('hidden');
        setTimeout(() => {
            pane2Element.classList.add('active');
            pane2Element.classList.add('enter-animation');
            setTimeout(() => {
                pane2Element.classList.remove('enter-animation');
            }, 600);
        }, 50);
    }, 500);
}

function hideMessage() {
    const pane1Element = document.getElementById('pane-1');
    const pane2Element = document.getElementById('pane-2');

    pane2Element.classList.add('exit-animation-reverse');

    setTimeout(() => {
        pane2Element.classList.remove('active');
        pane2Element.classList.add('hidden');
        pane2Element.classList.remove('exit-animation-reverse');

        pane1Element.classList.remove('hidden');
        setTimeout(() => {
            pane1Element.classList.add('active');
            pane1Element.classList.add('enter-animation-reverse');
            setTimeout(() => {
                pane1Element.classList.remove('enter-animation-reverse');
            }, 600);
        }, 50);
    }, 500);
}

/**
 * SISTEMA DE PARTÍCULAS DE FONDO
 */
function initCosmicEffect() {
    const container = document.getElementById('particles-container');
    const totalParticles = 24;

    for (let i = 0; i < totalParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'star';

        const diameter = Math.random() * 18 + 6; 
        particle.style.width = `${diameter}px`;
        particle.style.height = `${diameter}px`;

        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        const moveDuration = Math.random() * 10 + 12;
        const driftDuration = Math.random() * 6 + 8;
        const fadeDuration = Math.random() * 3 + 3;
        
        particle.style.animation = `
            liftUp ${moveDuration}s infinite linear,
            cosmicDrift ${driftDuration}s infinite alternate ease-in-out,
            starFade ${fadeDuration}s infinite alternate
        `;

        container.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', initCosmicEffect);