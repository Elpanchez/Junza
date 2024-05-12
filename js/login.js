document.getElementById('interfaz').addEventListener('click', function(event){
    event.preventDefault();
    
    let usuarioInput = document.querySelector('.inputbox input[type="text"]').value;
    let contraseñaInput = document.querySelector('.inputbox input[type="password"]').value;
    
    let usuarioCorrecto = 'holaMundo10';
    let contraseñaCorrecta = '12345';

    if (usuarioInput === usuarioCorrecto && contraseñaInput === contraseñaCorrecta){
        window.location.href = '/vistas/interfaz.html'; 
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
});

