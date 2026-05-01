const btn = document.getElementById('btn-surprise');
const mainImg = document.getElementById('main-img');
const altImg = document.getElementById('alt-img');
const extraText = document.getElementById('extra-text');

btn.addEventListener('click', () => {
    // Intercambia las imágenes
    mainImg.classList.toggle('hidden');
    altImg.classList.toggle('hidden');
    
    // Muestra el mensaje extra
    if (extraText.classList.contains('hidden')) {
        extraText.classList.remove('hidden');
        btn.textContent = "¡Sorpresa!";
    } else {
        extraText.classList.add('hidden');
        btn.textContent = "Haz clic aquí";
    }
});