window.addEventListener('load', ()=>{
    
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
  ) {
    let div = document.querySelector(".detalle-pedido");
    div.innerHTML += "<h2>No hay productos agregados </h2>";
  }else {
  
      carrito = JSON.parse(localStorage.carrito);
      for (let i = 0; i < carrito.length; i++) {
        let div = document.querySelector(".detalle-compra")
        let producto = carrito[i];
        console.log(typeof carrito[i].precioCar)
        let contenido = `
        <div class="producto1">

                <img class="productos" src=${producto.imagen}>

                <div class="detalle">
                    <h4>  ${producto.titulo}</h4>
                    <h4>  ${producto.descuentoCar}</h4>
                    <h4>  ${producto.precioCar}</h4>
                </div>

            </div>
        `
        div.innerHTML += contenido
    }
  }

  let divTotal = document.querySelector('.envio')
  let totalCarrito = localStorage.totalCarrito;




})