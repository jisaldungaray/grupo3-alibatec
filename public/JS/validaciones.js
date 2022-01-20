const validator = require('validator');

window.addEventListener('load', ()=>{

    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const category = document.getElementById('category');
    const img = document.getElementById('image');
    const btnSubmit = document.querySelector('.formulario__btn');

    let errores = [];

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        if(name.value.length < 2){
            errores.push('El nombre debe estar completo')
        };

        if(lastName.value.length < 2){
            errores.push('El apellido debe estar completo')
        };

        if(email.validity.typeMismatch) {
            email.setCustomValidity("Se esperaba una dirección de correo electrónico")
            } else {
                email.setCustomValidity("")
            }
            if(email.validity.valueMissing) {
                errores.push('Debe introducir un email válido.')
            };

        if(password.tooShort < 8){
            errores.push('La contraseña debe tener al menos 8 caracateres');
        };
        if(category.value == ""){
            errores.push('')
        }
            
    })

    


})