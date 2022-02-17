window.addEventListener('load', ()=> {

    const form = document.querySelector('form')

    form.addEventListener('submit', (e)=> {

        const model = document.getElementById('model')
        const detail = document.getElementById('detail')
        const img = document.getElementById('image')
        const price = document.getElementById('price')
        

        let errores = [];

        const formatoImagen = /(.jpg|.jpeg|.png|.gif)$/i;
        const fileImg = img.value; 

        if(!model.value){
            errores.push('Debe completar el modelo correspondiente')
            model.classList.add('is-invalid')
        }else {
            model.classList.add('is-valid')
            model.classList.remove('is-invalid')               
        }

        if(price.value == null || price.value == "") {
            errores.push('Debe ingresar el precio de su producto')
            price.classList.add('is-invalid')
        }else {
            price.classList.add('is-valid')
            price.classList.remove('is-invalid')
        }

        if(detail.value < 20) {
            errores.push('Debe completar la descripcion del producto')
            detail.classList.add('is-invalid')
        }else {
            detail.classList.add('is-valid')
            detail.classList.remove('is-invalid')
        }
        if(!fileImg){
            errores.push('Debe insertar una imagen');
            img.classList.add('is-invalid')
        }else if(!formatoImagen.exec(fileImg)){
            errores.push('La extención de imagen permitida es: .jpg, .jpeg, .png, .gif')
            img.classList.add('is-valid');
            img.classList.remove('is-invalid')
        }
        if(errores.length > 0){
            e.preventDefault();
            let errors = document.getElementById('error')
            errors.innerHTML=''
            for(let i = 0; i < errores.length; i++) {
                errors.innerHTML += `<li> ${errores[i]} </li>`
                errors.style.color = 'red'
                error.style.fontWeight = 'bold'
            }          
        }
        
    })

})