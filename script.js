/**
 * LÓGICA DE INTERFAZ: Reveal de Cristales (Animaciones Semánticas)
 */
function revealMessage() {
    const pane1Element = document.getElementById('pane-1');
    const pane2Element = document.getElementById('pane-2');

    // Añadir animación de salida al primero
    pane1Element.classList.add('exit-animation');

    setTimeout(() => {
        pane1Element.classList.remove('active');
        pane1Element.classList.add('hidden');
        pane1Element.classList.remove('exit-animation');

        // Iniciar animación de entrada al segundo
        pane2Element.classList.remove('hidden');
        setTimeout(() => {
            pane2Element.classList.add('active');
            pane2Element.classList.add('enter-animation');
            setTimeout(() => {
                pane2Element.classList.remove('enter-animation');
            }, 800); // Duración sincronizada con el CSS
        }, 50); // Delay técnico estructural
    }, 600); // Tiempo que tarda pane-1 en salir
}

function hideMessage() {
    const pane1Element = document.getElementById('pane-1');
    const pane2Element = document.getElementById('pane-2');

    // Animación de salida inversa para pane-2
    pane2Element.classList.add('exit-animation-reverse');

    setTimeout(() => {
        pane2Element.classList.remove('active');
        pane2Element.classList.add('hidden');
        pane2Element.classList.remove('exit-animation-reverse');

        // Animación de entrada inversa para pane-1
        pane1Element.classList.remove('hidden');
        setTimeout(() => {
            pane1Element.classList.add('active');
            pane1Element.classList.add('enter-animation-reverse');
            setTimeout(() => {
                pane1Element.classList.remove('enter-animation-reverse');
            }, 800);
        }, 50);
    }, 600);
}

/**
 * SISTEMA CÓSMICO DE POLVO ESTELAR Y LUCES ORGÁNICAS
 */
function initCosmicEffect() {
    const container = document.getElementById('particles-container');
    const totalParticles = 24; // Rendimiento optimizado para navegadores

    for (let i = 0; i < totalParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'star';

        // TAMAÑOS VARIABLES: entre 6px y 26px para profundidad
        const diameter = Math.random() * 20 + 6; 
        particle.style.width = `${diameter}px`;
        particle.style.height = `${diameter}px`;

        // UBICACIÓN X/Y INICIAL: dispersión por todo el viewport
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        // ANIMACIONES ASÍNCRONAS: movimiento (liftUp), deriva (cosmicDrift) y parpadeo (starFade)
        const moveDuration = Math.random() * 10 + 15; // 15-25 segundos (vertical)
        const driftDuration = Math.random() * 6 + 10; // 10-16 segundos (horizontal)
        const fadeDuration = Math.random() * 3 + 4; // 4-7 segundos (parpadeo)
        
        // Combinación de múltiples animaciones CSS para un efecto complejo
        particle.style.animation = `
            liftUp ${moveDuration}s infinite linear,
            cosmicDrift ${driftDuration}s infinite alternate ease-in-out,
            starFade ${fadeDuration}s infinite alternate
        `;

        container.appendChild(particle);
    }
}

// Inicializar el sistema cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initCosmicEffect);