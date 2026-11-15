/**
 * TRANSICIONES DE ESCENARIO Y DISPARO DE CONFETI DORADO
 */
function openCurtain() {
    const pane1 = document.getElementById('pane-1');
    const pane2 = document.getElementById('pane-2');

    pane1.classList.add('curtain-out');

    setTimeout(() => {
        pane1.classList.remove('active', 'curtain-out');
        pane1.classList.add('hidden');

        pane2.classList.remove('hidden');
        pane2.classList.add('active', 'curtain-in');
        
        // Dispara la lluvia de estrellas/confeti al revelar el mensaje
        launchStageConfetti();

        setTimeout(() => {
            pane2.classList.remove('curtain-in');
        }, 650);
    }, 550);
}

function closeCurtain() {
    const pane1 = document.getElementById('pane-1');
    const pane2 = document.getElementById('pane-2');

    pane2.classList.add('curtain-out');

    setTimeout(() => {
        pane2.classList.remove('active', 'curtain-out');
        pane2.classList.add('hidden');

        pane1.classList.remove('hidden');
        pane1.classList.add('active', 'curtain-in');

        setTimeout(() => {
            pane1.classList.remove('curtain-in');
        }, 650);
    }, 550);
}

/**
 * LUCES BOKEH DE ESCENARIO EN EL FONDO
 */
function initStageLights() {
    const container = document.getElementById('stage-lights');
    const lightCount = 16;

    for (let i = 0; i < lightCount; i++) {
        const light = document.createElement('div');
        light.className = 'bokeh-light';

        const size = Math.random() * 60 + 20;
        light.style.width = `${size}px`;
        light.style.height = `${size}px`;
        light.style.left = `${Math.random() * 100}vw`;
        light.style.top = `${Math.random() * 100}vh`;
        
        light.style.animationDuration = `${Math.random() * 4 + 4}s`;
        light.style.animationDelay = `${Math.random() * 3}s`;

        container.appendChild(light);
    }
}

/**
 * MOTOR DE CONFETI DORADO Y ROSA EN CANVAS
 */
function launchStageConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ffb703', '#fff3b0', '#ffccd5', '#ffffff', '#fb8500'];
    const particles = [];

    for (let i = 0; i < 85; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2 + 40,
            vx: (Math.random() - 0.5) * 14,
            vy: (Math.random() - 1) * 14 - 3,
            size: Math.random() * 7 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            gravity: 0.25,
            opacity: 1
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let activeParticles = 0;

        particles.forEach(p => {
            if (p.opacity <= 0) return;
            activeParticles++;

            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.vx *= 0.98;
            p.rotation += p.rotationSpeed;
            p.opacity -= 0.012;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
            ctx.restore();
        });

        if (activeParticles > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animateConfetti();
}

document.addEventListener('DOMContentLoaded', initStageLights);