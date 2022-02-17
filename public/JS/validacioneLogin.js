window.addEventListener('load', ()=>{

    const form = document.getElementById('form');
    
    form.addEventListener('submit', (e) =>{

        const expresiones ={
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        }
        let errores = [];

        if(email.value === null || email.value === "") {
            errores.push('Debe insertar un email')
            email.classList.add('is-invalid')
        } else if(!expresiones.email.test(email.value)) {
                errores.push('Debe introducir un email válido.')
                email.classList.add('is-valid')
        } else{
            email.classList.add('is-valid')
            email.classList.remove('is-invalid')
        }
        if(password.value === null || password.value === ""){
            errores.push('Debe ingresar una contraseña');
            password.classList.add('is-invalid')
        } else {
            password.classList.add('is-valid')
            password.classList.remove('is-invalid')
        }
        if(errores.length > 0){
            e.preventDefault();
            let error = document.getElementById('error');
            error.innerHTML = ''
            for(let i = 0; i < errores.length; i++){
                    error.innerHTML += `<li > ${errores[i]} </li>`
                    error.style.color = 'red'
            }
        }
    })
})