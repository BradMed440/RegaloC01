/**
 * LÓGICA DE CONTROL DE PANTALLAS ANIMADAS
 */

function nextStep() {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');

    // Desvanecimiento controlado
    step1.style.opacity = '0';
    step1.style.transform = 'scale(0.95) translateY(-10px)';

    setTimeout(() => {
        step1.classList.add('hidden');
        step1.classList.remove('active');
        
        step2.classList.remove('hidden');
        // Pequeño delay estructural para activar transición CSS limpia
        setTimeout(() => {
            step2.classList.add('active');
            step2.style.opacity = '1';
            step2.style.transform = 'scale(1) translateY(0)';
        }, 50);
    }, 400); // Duración sincronizada con el CSS
}

function prevStep() {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');

    step2.style.opacity = '0';
    step2.style.transform = 'scale(0.95) translateY(10px)';

    setTimeout(() => {
        step2.classList.add('hidden');
        step2.classList.remove('active');
        
        step1.classList.remove('hidden');
        setTimeout(() => {
            step1.classList.add('active');
            step1.style.opacity = '1';
            step1.style.transform = 'scale(1) translateY(0)';
        }, 50);
    }, 400);
}

/**
 * SISTEMA AUTOMATIZADO DE DESTELLOS EN EL ATARDECER
 */
function createSunsetGlimmers() {
    const container = document.getElementById('particles-container');
    const totalParticles = 18; // Cantidad óptima de rendimiento gráfico

    for (let i = 0; i < totalParticles; i++) {
        const glimmer = document.createElement('div');
        glimmer.className = 'glimmer';

        // Dimensiones variables orgánicas
        const diameter = Math.floor(Math.random() * 25) + 8; // tamaños entre 8px y 33px
        glimmer.style.width = `${diameter}px`;
        glimmer.style.height = `${diameter}px`;

        // Ubicación en el eje X horizontal
        glimmer.style.left = `${Math.random() * 100}vw`;

        // Retardos y velocidad asíncronas para naturalidad
        const duration = Math.random() * 6 + 8; // Entre 8s y 14s
        const delay = Math.random() * 8; // Hasta 8s de retraso inicial
        
        glimmer.style.animationDuration = `${duration}s`;
        glimmer.style.animationDelay = `${delay}s`;

        container.appendChild(glimmer);
    }
}

// Inicializar el sistema al cargar el DOM de manera eficiente
document.addEventListener('DOMContentLoaded', createSunsetGlimmers);