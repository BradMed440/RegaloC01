const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');

// Función para ir a la segunda pantalla
btnNext.addEventListener('click', () => {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
});

// Función para regresar a la primera pantalla
btnBack.addEventListener('click', () => {
    step2.classList.add('hidden');
    step1.classList.remove('hidden');
});