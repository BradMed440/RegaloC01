// Script para la página sorpresa de cumpleaños

// Variable para controlar si ya se mostró la sorpresa
let surpriseShown = false;

// Función principal para mostrar la sorpresa
function showSurprise() {
    if (!surpriseShown) {
        // Ocultar el contenido inicial
        const content = document.querySelector('.content');
        content.style.transform = 'scale(0)';
        content.style.opacity = '0';
        
        // Mostrar la sorpresa después de un pequeño delay
        setTimeout(() => {
            const surpriseContent = document.getElementById('surpriseContent');
            surpriseContent.classList.add('show');
            
            // Crear partículas de celebración
            createParticles();
            
            // Reproducir sonido de celebración (opcional)
            playConfetti();
            
            surpriseShown = true;
        }, 500);
    }
}

// Función para crear partículas flotantes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const colors = ['#FFD700', '#3FAF6C', '#D94F91', '#1C4D7E', '#F8A9B8'];
    
    // Crear 50 partículas
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Posición aleatoria
            particle.style.left = Math.random() * 100 + '%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Tamaño aleatorio
            const size = Math.random() * 10 + 6;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Duración de animación aleatoria
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            particlesContainer.appendChild(particle);
            
            // Remover partícula después de la animación
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 5000);
        }, i * 100);
    }
}

// Función para efecto de confeti adicional
function playConfetti() {
    // Crear Cinnamorroles flotantes adicionales
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFloatingCinnamoroll();
        }, i * 300);
    }
}

// Función para crear Cinnamorroles flotantes
function createFloatingCinnamoroll() {
    const cinnamoroll = document.createElement('div');
    
    // Crear mini Cinnamoroll con caracteres Unicode
    const cinnamorrollFaces = ['🐶', '🤍', '☁️', '🦙', '✨'];
    cinnamoroll.innerHTML = cinnamorrollFaces[Math.floor(Math.random() * cinnamorrollFaces.length)];
    
    cinnamoroll.style.position = 'fixed';
    cinnamoroll.style.fontSize = '2.5rem';
    cinnamoroll.style.left = Math.random() * 100 + '%';
    cinnamoroll.style.top = '100%';
    cinnamoroll.style.zIndex = '5';
    cinnamoroll.style.pointerEvents = 'none';
    cinnamoroll.style.animation = 'float 4s ease-out forwards';
    cinnamoroll.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))';
    
    // Rotación aleatoria
    cinnamoroll.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(cinnamoroll);
    
    // Remover después de la animación
    setTimeout(() => {
        if (cinnamoroll.parentNode) {
            cinnamoroll.parentNode.removeChild(cinnamoroll);
        }
    }, 4000);
}

// Añadir efectos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de entrada suave
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 1s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 300);
    
    // Crear algunas partículas de fondo sutiles
    createBackgroundParticles();
});

// Función para partículas de fondo sutiles
function createBackgroundParticles() {
    const particlesContainer = document.getElementById('particles');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.background = 'rgba(255, 215, 0, 0.3)';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.animationDuration = '8s';
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }, 3000);
}

// Añadir efecto hover al botón
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.surprise-button');
    
    button.addEventListener('mouseenter', function() {
        if (!surpriseShown) {
            // Pequeña animación de anticipación
            this.style.animation = 'bounce 0.6s ease-in-out';
        }
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});

// Función para resetear la sorpresa (opcional, para testing)
function resetSurprise() {
    surpriseShown = false;
    const content = document.querySelector('.content');
    const surpriseContent = document.getElementById('surpriseContent');
    
    content.style.transform = 'scale(1)';
    content.style.opacity = '1';
    surpriseContent.classList.remove('show');
}