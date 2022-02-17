//const validator = require('validator');

window.addEventListener('load', ()=>{

    const form = document.getElementById('form');
    
    form.addEventListener('submit', (e) =>{
    
        let errores = [];
    
        const name = document.getElementById('name');
        const lastName = document.getElementById('lastname');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const img = document.getElementById('image');
        
        const expresiones = {
            name: /^[a-zA-Z0-9\_\-]{2,16}$/,
            lastname: /^[a-zA-Z0-9\_\-]{2,16}$/,
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            password: /^.{8,16}$/,
        };
        const formatoImagen = /(.jpg|.jpeg|.png|.gif)$/i;
        const fileImg = img.value; 
    
        
        if(name.value.length < 2 ){
            errores.push('El nombre debe estar completo')
        } else if(!expresiones.name.test(name.value)){
            errores.push('El nombre solo debe contener letras')
        }
        if(lastName.value.length < 2){
            errores.push('El apellido debe estar completo')
        } else if(!expresiones.lastname.test(lastName.value)){
            errores.push('El apellido solo debe contener letras')
        }
        if(email.value === null || email.value === "") {
            errores.push('Se esperaba un email')
        } else if(!expresiones.email.test(email.value)) {
                errores.push('Debe introducir un email válido.')
        };
        if(password.value === null || password.value === ""){
            errores.push('Debe ingresar una contraseña');
            } else if(!expresiones.password.test(password.value)){
            errores.push('La contraseña debe tener al menos 8 caracateres');
        }
        if(!img.value){
            errores.push('Debe insertar una imagen');
        }else if(!formatoImagen.exec(fileImg)){
            errores.push('La extención de imagen permitida es: .jpg, .jpeg, .png, .gif')
        }
        
        if(errores.length > 0){
                e.preventDefault();
                let error = document.getElementById('error');
                error.innerHTML ='';
                for(let i = 0; i < errores.length; i++){
                        error.innerHTML += `<li > ${errores[i]} </li>`
                        error.style.color = 'red'
                        error.style.fontWeight = 'bold'
                }
                
        }
        
    })
})