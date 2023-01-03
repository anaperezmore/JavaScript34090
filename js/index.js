/*let edad = prompt("Hola! Ingresa tu edad");
if (edad >= 18) {
  alert("Sos mayor de edad. Podés ingresar")
} else {
  alert("Sos menor de edad. No podés ingresar")
}*/
let edades;

while (edades != "PASE NOMAS") {
  let edad = prompt("Hola! Ingresa tu edad");
  if (edad >= 18) {
    alert("Sos mayor de edad. Podés ingresar")
    edades = "PASE NOMAS"
  } else {
    alert("Sos menor de edad. No podés ingresar")
    edades = "NO PASA NADA"
  }
}


let ofertaDiaDeLaSemana = Number(prompt("ingrese el dia de la semana en números"));
switch (ofertaDiaDeLaSemana) {
  case 1:
    alert("Lunes. Vinos 15%");
    break;
  case 2:
    alert("Martes. Destilados 10%");
    break;
  case 3:
    alert("Miercoles. 2x1 patagonia");
    break;
  case 4:
    alert("Jueves. 15% en el total de la compra");
    break;
  case 5:
    alert("Viernes. Fernet+cola 25%");
    break;
  case 6:
    alert("Sábado. Espumantes 20%");
    break;
  case 7:
    alert("Domingo. 10% en el total de la compra");
    break;

}
(async () => {

  const { value: accept } = await Swal.fire({
    title: 'Terminos y condiciones',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder:
      'Estoy de acuerdo con los terminos y condiciones',
    confirmButtonText:
      'Continuar <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'Tienes que estar de acuerdo con T&C'
    }
  })
  
  if (accept) {
    Swal.fire('Usted estuvo de acuerdo con T&C :)')
  }
  
  })()

let nombre;

function solicitarNombre() {
  nombre = prompt("Bienvenido a Licoreria Austria, por favor ingrese su nombre").toLowerCase();
}
solicitarNombre();

let comprar = (prompt(nombre + " " + "Cual producto te gustaria comprar? 1 /Vinos, 2 /Destilados , 3 /Cervezas, 4 /Espumantes, 5 /Aperitivos, 6 /salir "));

while (comprar != "6") {
  let pagar;
  let cuotas;
  switch (comprar) {
    case "1":
      alert("el precio de los vinos es de $3.200");
      pagar = prompt("1 para pagar en efectivo, 2 para pagar con tarjeta");
      if (pagar == 1) {
        alert("muy bien, serian $3.200, muchas gracias!");
      } else if (pagar == 2) {
        cuotas = prompt("1 para pagar en 3 cuotas de $1.067 , 2 para pagar en 6 cuotas de $534");
        if (cuotas == 1) {
          alert("muy bien, serian 3 cuotas de $1.067, muchas gracias!");

        } else if (cuotas == 2) {
          alert("muy bien, serian 6 cuotas de $534, muchas gracias!");
        }

      } else {
        alert("No contamos con ese medio de pago aun!");
      }
      comprar = prompt("Cual producto te gustaria comprar? 1/Vinos, 2/Destilados , 3/Cervezas, 4/Espumantes, 5/Aperitivos, 6/salir ");

      break;
    case "2":
      alert("el precio de los Destilados es $9.000");
      pagar = prompt("1 para pagar en efectivo, 2 para pagar con tarjeta");
      if (pagar == 1) {
        alert("muy bien, serian $9.000, muchas gracias!");
      } else if (pagar == 2) {
        cuotas = prompt("1 para pagar en 3 cuotas de $3.000, 2 para pagar en 6 cuotas de $1.500");
        if (cuotas == 1) {
          alert("muy bien, serian 3 cuotas de $3.000, muchas gracias!");
        } else if (cuotas == 2) {
          alert("muy bien, serian 6 cuotas de $1.500, muchas gracias!");
        }
      } else {
        alert("No contamos con ese medio de pago aun!");
      }
      comprar = prompt("Cual producto te gustaria comprar? 1/Vinos, 2/Destilados , 3/Cervezas, 4/Espumantes, 5/Aperitivos, 6/salir ");

      break;
    case "3":
      alert("el precio de las cervezas es $2.000");
      pagar = prompt("1 para pagar en efectivo, 2 para pagar con tarjeta");
      if (pagar == 1) {
        alert("muy bien, serian $2.000, muchas gracias!");
      } else if (pagar == 2) {
        cuotas = prompt("1 para pagar en 3 cuotas de $666, 2 para pagar en 6 cuotas de $333");
        if (cuotas == 1) {
          alert("muy bien, serian 3 cuotas de $666, muchas gracias!");
        } else if (cuotas == 2) {
          alert("muy bien, serian 6 cuotas de $333, muchas gracias!");
        }
      } else {
        alert("No contamos con ese medio de pago aun!");
      }
      comprar = prompt("Cual producto te gustaria comprar? 1/Vinos, 2/Destilados , 3/Cervezas, 4/Espumantes, 5/Aperitivos, 6/salir ");

      break;
    case "4":
      alert("el precio de los Espumantes $8.000");
      pagar = prompt("1 para pagar en efectivo, 2 para pagar con tarjeta");
      if (pagar == 1) {
        alert("muy bien, serian $8.000, muchas gracias!");
      } else if (pagar == 2) {
        cuotas = prompt("1 para pagar en 3 cuotas de $2.666, 2 para pagar en 6 cuotas de $1.333");
        if (cuotas == 1) {
          alert("muy bien, serian 3 cuotas de $2.666, muchas gracias!");
        } else if (cuotas == 2) {
          alert("muy bien, serian 6 cuotas de $1.333, muchas gracias!");
        }
      } else {
        alert("No contamos con ese medio de pago aun!");
      }
      comprar = prompt("Cual producto te gustaria comprar? 1/Vinos, 2/Destilados , 3/Cervezas, 4/Espumantes, 5/Aperitivos, 6/salir ");
      break
    case "5":
      alert("el precio de los Aperitivos es $6.500");
      pagar = prompt("1 para pagar en efectivo, 2 para pagar con tarjeta");
      if (pagar == 1) {
        alert("muy bien, serian $6.500, muchas gracias!");
      } else if (pagar == 2) {
        cuotas = prompt("1 para pagar en 3 cuotas de $2.166, 2 para pagar en 6 cuotas de $1.083");
        if (cuotas == 1) {
          alert("muy bien, serian 3 cuotas de $2.166, muchas gracias!");
        } else if (cuotas == 2) {
          alert("muy bien, serian 6 cuotas de $1.083, muchas gracias!");
        }
      } else {
        alert("No contamos con ese medio de pago aun!");
      }
      comprar = prompt("Cual producto te gustaria comprar? 1/Vinos, 2/Destilados , 3/Cervezas, 4/Espumantes, 5/Aperitivos, 6/salir ");
  }
}

/*array, objetos, metodo*/
const productos = [{
    id: "vino-01",
    titulo: "Vino tinto",
    imagen:"./img/vino01.jpg",
    precio: 3200,
  },
  {
    id: "vino-01",
    titulo: "Vino rose",
    imagen: "./img/rose01.png",
    precio: 3200

  },
  {
    id: "vino-01",
    titulo: "Vino blanco",
    imagen: "./img/blanco01.jpg",
    precio: 3200

  },
  {
    id: "destilado-01",
    titulo: "destilado 01",
    imagen: "./img/whisky01.jpg",
    precio: 9000

  },
  {
    id: "cerveza-01",
    titulo: "cerveza golden",
    precio: 2000,
    imagen: "./img/cerveza01.jpg"


  },
  {
    id: "cerveza-01",
    titulo: "cerveza Ipa",
    imagen:"./img/cerveza02.jpg",
    precio: 2000

  },
  {
    id: "cervezas-01",
    titulo: "cerveza Roja",
    imagen:"./img/patagonia.jpg",
    precio: 2000

  },
  {
    id: "cervezas-01",
    titulo: "cerveza stout",
    imagen: "./img/Stout01.png",
    precio: 2000

  },
  {
    id: "espumantes-01",
    titulo: "espumante 01",
    imagen:"./img/espumante01.jpg",
    precio: 8000

  },
  {
    id: "aperitivos-01",
    titulo: "fernet",
    imagen:"./img/Fernet01.jpg",
    precio: 6500

  },
  {
    id: "aperitivos-01",
    titulo: "Campari",
    imagen:"./img/aperitivo01.jpg",
    precio: 6500

  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);
botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

      botonesCategorias.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");

      if (e.currentTarget.id != "todos") {
          const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
          tituloPrincipal.innerText = productoCategoria.categoria.nombre;
          const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
          cargarProductos(productosBoton);
      } else {
          tituloPrincipal.innerText = "Todos los productos";
          cargarProductos(productos);
      }

  })
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}


/* ESTRUCTURA FUNCION 
function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
      case "+":
        return numero1 + numero2;
        break;
  
      case "-":
        return numero1 - numero2;
        break;
  
      case "*":
        return numero1 * numero2;
        break;
  
      case "/":
        return numero1 / numero2;
        break;
  
      default:
        return "Operacion no valida";
        break;
    }
  }
  
  let numero1 = parseInt(prompt("Ingrese el numero 1"));
  let numero2 = parseInt(prompt("Ingrese el numero 2"));
  let operacion = prompt("Ingrese la operacion");
  
  let resultado = calculadora(numero1, numero2, operacion);
  alert(resultado);
  */
