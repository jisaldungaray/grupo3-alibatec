window.addEventListener('load', ()=> {

    const form = document.getElementById('form')
    const model = document.getElementById('model')
    const price = document.getElementById('price')
    const detail = document.getElementById('detail')
    const marca = document.getElementById('marca')
    const category = document.getElementById('category')
    const estado = document.getElementById('estado')
    const img = document.getElementById('image')
    const btnSubmit = document.getElementById('btnSubmit')

    const formatoImagen = /(.jpg|.jpeg|.png|.gif)$/i;
    const fileImg = img.value; 
    const errores = [];

    form.addEventListener('submit', (e)=> {

        if(model.value.length < 2){
            errores.push('Debe completar el modelo correspondiente')
        }
    })

})