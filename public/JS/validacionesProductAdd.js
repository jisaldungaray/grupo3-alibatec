window.addEventListener('load', ()=> {

    const form = document.getElementById('form')
    
    form.addEventListener('submit', (e)=> {
        
        let errores = [];
    
        const model = document.getElementById('model')
        const price = document.getElementById('price')
        const detail = document.getElementById('detail')
        const marca = document.getElementById('marca')
        const category = document.getElementById('category')
        const estado = document.getElementById('estado')
        const img = document.getElementById('image')
        

        const formatoImagen = /(.jpg|.jpeg|.png|.gif)$/i;
        const fileImg = img.value; 


            if(model.value.length < 5){
                errores.push('Debe completar el modelo correspondiente')
                model.classList.add('is-invalid')
            }else {
                model.classList.add('is-valid')
                model.classList.remove('is-invalid')
                form.model.focus()
            };

            if(price.value == '') {
                errores.push('Debe ingresar el precio de su producto')
                price.classList.add('is-invalid')
            }else {
                price.classList.add('is-valid')
                price.classList.remove('is-invalid')
                form.price.focus()
            };

            if(detail.value.length < 20) {
                errores.push('Debe completar la descripcion del producto')
                detail.classList.add('is-invalid')
            }else {
                detail.classList.add('is-valid')
                detail.classList.remove('is-invalid')
                form.detail.focus()
            };

            if(marca.value == '') {
                errores.push('Debe completar el campo "Marca"')
                marca.classList.add('is-invalid')
            }else {
                marca.classList.add('is-valid')
                marca.classList.remove('is-invalid')
                form.marca.focus()
            };

            if(category.value == '') {
                errores.push('Debe completar una categoria del producto')
                category.classList.add('is-invalid')
            }else {
                category.classList.add('is-valid')
                category.classList.remove('is-invalid')
                form.category.focus()
            };

            if(estado.value == '') {
                errores.push('Debe ingresar el precio de su producto')
                estado.classList.add('is-invalid')
            }else {
                estado.classList.add('is-valid')
                estado.classList.remove('is-invalid')
                form.estado.focus()
            };

            if(!img.value){
                errores.push('Debe insertar una imagen');
            }else if(!formatoImagen.exec(fileImg)){
                errores.push('La extención de imagen permitida es: .jpg, .jpeg, .png, .gif')
            
            }

            if(errores.length){
                e.preventDefault();
                let errors = document.getElementById('error')
                for(let i = 0; i < errores.length; i++) {
                    errors.innerHTML += `<li > ${errores[i]} </li>`
                    errors.style.color = 'red'
                    errors.innerHTML = ''
                }
            }
                errores = [];
                form.submit()
            

    })

})