// Cambiar el color del texto al hacer clic en el botón
document.getElementById('change-color').addEventListener('click', () => {
    const text = document.getElementById('text');
    // Alternar entre dos colores
    text.style.color = text.style.color === 'blue' ? 'red' : 'blue';
});

// Agregar un nuevo elemento a la lista al hacer clic en el botón
document.getElementById('add-item').addEventListener('click', () => {
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.textContent = `Elemento ${list.children.length + 1}`;
    list.appendChild(newItem);
});
