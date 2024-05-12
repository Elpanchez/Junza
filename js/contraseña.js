document.getElementById('recuperar_contraseña').addEventListener('click', function(event){
    event.preventDefault(); 

    let nuevaContraseña = document.querySelectorAll('input[type=text]')[0].value;
    let confirmarContraseña = document.querySelectorAll('input[type=text]')[1].value;

    if (nuevaContraseña === '' || confirmarContraseña === ''){
        alert('Por favor, complete todos los campos');
    } else if (nuevaContraseña !== confirmarContraseña){
        alert('Las contraseñas no coinciden!');
    } else {
        alert('Contraseña cambiada correctamente!');
        // Redirige solo si las contraseñas coinciden
        window.location.href = '../index.html';
    }
});
