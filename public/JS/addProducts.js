window.onload = function() {
    
    let botonAgregar = document.querySelector('.btn-compra');
    
    botonAgregar.addEventListener('click', function(e){
        e.preventDefault();
        
        let url = window.location.href.split("/");
        
        let id = url [url.length -1]
        
        let imagen = document.querySelector('.foto').src
        let titulo = document.querySelector('.titulo-producto').innerText
        let precio = document.querySelector('.price').innerText
        
        let producto = {
            idProducto: id, 
            imagen,
            titulo,
            precio,
        }
        
        
        if(localStorage.length == 0) {
            let carrito = []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            localStorage.setItem("totalCarrito", producto.precio)
        }else{
            let carrito = JSON.parse(localStorage.carrito)
            let arrayProductos = carrito.filter(function(producto){
                return producto.idProducto == id
            })
            
            if(arrayProductos.length == 0){
                carrito.push(producto)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            } 
        
            
            let totalCarrito = 0
            for (let i=0; i < carrito.length; i++) { 
                let carro = carrito[i].precio
                totalCarrito += carro
            }
            
            localStorage.setItem("totalCarrito", totalCarrito)            
        }             
        
        alert('Agregaste' + " " + titulo + " al carrito") 

    })
}   

