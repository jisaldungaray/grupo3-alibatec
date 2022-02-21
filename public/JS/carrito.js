window.onload = function () {

  if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
  ) {
    let div = document.querySelector(".sinProducto");
    div.innerHTML += "<h2>No hay productos agregados </h2>";
  } else {
    carrito = JSON.parse(localStorage.carrito);
    for (let i = 0; i < carrito.length; i++) {
      let producto = carrito[i];
      let div = document.querySelector(".detalle-compra");
      let contenido = `
      <div class="producto1">

          <img class="productos" src=${producto.imagen}>

          <div class="detalle">
              <h4>  ${producto.titulo}</h4>
              <h4>  ${producto.descuentoCar}%</h4>
              <h4> $ ${producto.precioCar}</h4>
          </div>
          <button class= "borraritem" type="button">
              <i onClick="borrarItem(${i})" class="fas fa-times"></i>
          </button>
  </div>
`
      div.innerHTML += contenido;
    }
    let totalCarrito = JSON.parse(localStorage.totalCarrito)      
    let div2 = document.querySelector(".envio")
    let contenido2 = `
      <div class="compraPrecios"> 
            
            <h2>Total</h3>
  
            <h2>$ ${totalCarrito}</h3>
      </div>    
    `
    div2.innerHTML+= contenido2
  }

  let botonBorrar = document.querySelector("#botonBorrar");
  botonBorrar.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    alert('Has vaciado el carrito');
    location.reload();
  });
let comprar = document.getElementById("botonEnviar");
comprar.addEventListener('click', ()=> {
  alert('Su compra se ha realizado satisfactoriamente, le enviaremos el detalle de la compra a su correo')
        localStorage.clear();
        location.reload();
        location.href = '/'
})
};
function borrarItem(id) {
  let carrito = JSON.parse(localStorage.carrito); 
  carrito = carrito.filter((producto, i) => {
    return i !== id;
  });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
}


