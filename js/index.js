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