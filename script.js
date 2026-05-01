document.getElementById('btn-magico').addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje-extra');
    
    if (mensaje.classList.contains('hidden')) {
        mensaje.classList.remove('hidden');
        this.textContent = '¡Sorpresa! ✨';
        
        // Efecto de confeti simple en consola o podrías añadir más aquí
        console.log("¡Pancracia es genial!");
    } else {
        mensaje.classList.add('hidden');
        this.textContent = '¡Haz clic aquí!';
    }
});