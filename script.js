function nextStep() {
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
}

function prevStep() {
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-1').classList.remove('hidden');
}

// Crear pequeñas burbujas blancas que flotan de fondo
const body = document.body;
for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    let size = Math.random() * 15 + 5 + 'px';
    p.style.width = size;
    p.style.height = size;
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (Math.random() * 5 + 5) + 's';
    p.style.animationDelay = Math.random() * 5 + 's';
    body.appendChild(p);
}