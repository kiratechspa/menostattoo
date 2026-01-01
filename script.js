// Función para cambiar estilos locales
function changeStyle(style, target) {
    const tabs = document.querySelectorAll('.style-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    target.classList.add('active');

    const title = document.getElementById('style-title');
    const desc = document.getElementById('style-desc');
    const example = document.getElementById('style-example');

    example.className = 'style-example ' + style;

    switch(style) {
        case 'blackwork':
            title.textContent = 'Blackwork';
            desc.textContent = 'Estilo negro intenso y minimalista, perfecto para diseños limpios y poderosos.';
            example.src = 'blackwork.jpg';
            example.alt = 'Ejemplo Blackwork';
            break;
        case 'realista':
            title.textContent = 'Realista';
            desc.textContent = 'Sombras y detalles hiperrealistas para capturar la esencia de cualquier imagen.';
            example.src = 'realista.jpg';
            example.alt = 'Ejemplo Realista';
            break;
        case 'tradicional':
            title.textContent = 'Tradicional';
            desc.textContent = 'Estilo clásico americano con colores vibrantes y líneas gruesas.';
            example.src = 'tradicional.jpg';
            example.alt = 'Ejemplo Tradicional';
            break;
        case 'fineline':
            title.textContent = 'Fine Line';
            desc.textContent = 'Líneas finas y delicadas para diseños sutiles y elegantes.';
            example.src = 'fineline.jpg';
            example.alt = 'Ejemplo Fine Line';
            break;
        case 'piercings':
            title.textContent = 'Piercings Profesionales';
            desc.textContent = 'Piercings seguros y profesionales con materiales de alta calidad.';
            example.src = 'percing.jpg';
            example.alt = 'Ejemplo Piercings';
            break;
    }
}

// Función para cambiar estilo global
function changeGlobalStyle(style, target) {
    const btns = document.querySelectorAll('.style-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');

    document.body.className = style;
    document.getElementById('current-style').textContent = style.charAt(0).toUpperCase() + style.slice(1);
}
document.addEventListener('DOMContentLoaded', () => {
    const defaultTab = document.querySelector('.style-tab.active');
    changeStyle('blackwork', defaultTab);
});
