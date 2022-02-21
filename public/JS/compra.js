// const formularioCompra = document.querySelector('form')
// let errores = []
//   formularioCompra.addEventListener('submit', (e)=> {

//     const inputCompra = document.querySelectorAll('.grande')
    
//     if(inputCompra.value == 'undefined' || inputCompra.value == null){
//       errores.push('Todos los campos deben estar completos para realizar la compra') 
//     }

//     if(errores.length){
//         e.preventDefault();
//         let errors = document.querySelector('.errors')
//         errors.innerHTML=''
//         errores.forEach(err => {
//             errors.innerHTML= `<p> ${err} </p>`
//             errors.style.color = 'red'
//         })
//     }else{
//         alert('Su compra se ha realizado satisfactoriamente, le enviaremos el detalle de la compra a su correo')
//         localStorage.clear();
//         location.reload();
//         location.href = '/'
//         formularioCompra.submit();
//     }
// })