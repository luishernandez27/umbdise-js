document.getElementById('form-validation').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.length < 3) {
        document.getElementById('feedback').innerText = 'El nombre debe tener al menos 3 caracteres.';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('feedback').innerText = 'Por favor, ingresa un correo válido.';
        return;
    }

    document.getElementById('feedback').innerText = 'Formulario enviado correctamente.';
});
