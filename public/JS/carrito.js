window.onload = function () {

  const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (typeof localStorage.carrito == "undefined" || typeof localStorage.carrito == "[]"
  ) {
    let div = document.querySelector(".vacio");
    div.innerHTML += "<h2>No hay productos agregados </h2>";
  } else {
    let carrito = JSON.parse(localStorage.carrito);
    for (let i = 0; i < carrito.length; i++) {
      let producto = carrito[i];
      let div = document.querySelector(".vacio");
      let contenido = `<div class="producto1">

      <img class="productos" src=${producto.imagen}>

      <div class="detalle">
          <h4>  ${producto.titulo}</h4>
          <h4>  ${producto.precio}</h4>
      </div>
      <button class= "borraritem" type="button">
          <i onClick="borrarItem(${i})" class="fas fa-times"></i>
      </button>
  </div>
`
      div.innerHTML += contenido;
}
  }

let addPriceCard = document.querySelector(".total")
let totalCarrito = localStorage.totalCarrito
if(localStorage.totalCarrito == 'undefined'){
  let contenido2 = `0`
  addPriceCard.innerHTML += contenido2
} else {
  let contenido2 = `${toThousand(totalCarrito)}`
  addPriceCard.innerHTML += contenido2
}

  
};

function borrarItem(id) {
  let carrito = JSON.parse(localStorage.carrito);
  carrito = carrito.filter((producto, i) => {
    return i !== id;
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));
  location.reload();
}



let botonBorrar = document.querySelector("#botonBorrar");
botonBorrar.addEventListener('click', function(e) {
  e.preventDefault();
  localStorage.clear();
  alert('has vaciado el carrito');
  location.reload();
})