const express = require('express'); // Importar Express
const app = express(); // Crear una instancia de Express
const PORT = 3000; // Puerto donde correrá el servidor

// Configurar la carpeta "public" para servir archivos estáticos
app.use(express.static('public'));

// Ruta inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/dom.html');
});


// Nueva ruta para la API
app.get('/api', (req, res) => {
    res.json({ message: 'Hola Umb desde la API', data: [1, 2, 3] });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

