document.getElementById('realizar_registro').addEventListener('click',function(event){
    let correo = document.querySelector('input[type="email"]').value;
    let usuario = document.querySelector('input[type="text"]').value;
    let contraseña = document.querySelector('input[type="password"]').value;
    let confirmarContraseña = document.querySelectorAll('input[type="password"]')[1].value;

    if (correo ==''||usuario==''||contraseña==''||confirmarContraseña==''){
        alert('Por favor, complete todos los campos');
        event.preventDefault();
    }else if (contraseña!==confirmarContraseña){
        alert('Las contraseñas no coinciden!');
        event.preventDefault();
    }else{
        alert('Registro Exitoso');
    }
    
})

document.getElementById('volver_inicio').addEventListener('click', function(){
    window.location.href='../../index.html';
})