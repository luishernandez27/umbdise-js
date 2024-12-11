// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script cargado correctamente');
  
    // Cambiar el color del texto al hacer clic en el botón
    document.getElementById('change-color').addEventListener('click', () => {
      const text = document.getElementById('text');
      // Alternar entre azul y rojo
      text.style.color = text.style.color === 'blue' ? 'red' : 'blue';
    });
  
    // Agregar un nuevo elemento a la lista al hacer clic en el botón
    document.getElementById('add-item').addEventListener('click', () => {
      const list = document.getElementById('list');
      const newItem = document.createElement('li');
      newItem.textContent = `Elemento ${list.children.length + 1}`;
      list.appendChild(newItem);
    });
  
    // 
    fetch('http://localhost:3000/api') // 
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json(); // Convertir la respuesta a JSON
      })
      .then(data => {
        console.log('Datos recibidos del API:', data); // Verifica los datos en la consola
  
        // Mostrar el mensaje del API en el DOM
        const output = document.getElementById('output'); //
        output.textContent = data.message; // Mostrar el mensaje del API
      })
      .catch(error => {
        console.error('Error al conectar con el API:', error); // Manejar errores
        const output = document.getElementById('output');
        output.textContent = 'No se pudieron cargar los datos.';
      });
  });
  