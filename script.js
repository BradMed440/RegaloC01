function nextStep() {
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
}

function prevStep() {
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-1').classList.remove('hidden');
}

// Crear destellos de atardecer flotantes de fondo
const sunsetParticles = document.querySelector('.sunset-particles');
for (let i = 0; i < 20; i++) {
    const glimmer = document.createElement('div');
    glimmer.className = 'glimmer';
    
    // Tamaños aleatorios
    let size = Math.random() * 12 + 4 + 'px';
    glimmer.style.width = size;
    glimmer.style.height = size;
    
    // Posición aleatoria
    glimmer.style.left = Math.random() * 100 + 'vw';
    
    // Animación aleatoria
    glimmer.style.animationDuration = (Math.random() * 6 + 6) + 's';
    glimmer.style.animationDelay = Math.random() * 5 + 's';
    
    sunsetParticles.appendChild(glimmer);
}