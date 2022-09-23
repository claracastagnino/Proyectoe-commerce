
let nombreIngresadoCliente = prompt ("Ingrese su nombre:")

console.log (nombreIngresadoCliente)

if (nombreIngresadoCliente != ""){
    alert ("Bienvenido"+ " " + nombreIngresadoCliente + " !")
} else {
    alert ( "No se ha ingresado ningun nombre");
}

let respuestaUsuario = prompt ( " Desea ver los productos disponibles: Por favor ingrese \nSI  \nNO ")

/*if (respuestaUsuario == "NO"){
    alert ("Gracias" +" "+ nombreIngresadoCliente +" " + "por tu visita" )
}*/

function Producto (nombre, precio,stock)  {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarStock = function(cantidad) {
          this.stock -= cantidad
    }
    
}

let producto1 = new Producto ("Brocha de maquillaje", parseInt(50), parseInt(30))
let producto2 = new Producto ("Labial", parseInt(80), parseInt(45))
let producto3 = new Producto ("Delineador", parseInt(56),parseInt(25))

console.log (producto1)
console.log (producto2)
console.log (producto3)

alert ( "Estos son los productos disponibles /n Brocha de maquillaje /n Labial /n Delineador")

let cantidadDeProductosDistintos = parseInt(prompt( "Indique la cantidad de productos diferentes desea comprar:")) 

 let productoCompra = prompt (" ingrese que producto desea comprar:/n Brocha de maquillaje /n Labial /n Delineador /n ESC")


while (productoCompra != "ESC"){

    if ( productoCompra.toUpperCase () == "BROCHA DE MAQUILLAJE") {
        let producto1.stock = prompt ("Ingrese la cantidad de " + producto1.nombre + "desea comprar:")
        calculoStock (producto1.cantidad , producto1.stock, producto1.precio)
        producto1.restarStock (producto1.cantidad)
    }
    else if ( productoCompra.toUpperCase () == "LABIAL") {
        let producto2 = prompt ("Ingrese la cantidad de " + producto2.nombre + "desea comprar:")
        calculoStock (producto2.cantidad , producto2.stock, producto2.precio)
        producto2.restarStock (producto2.cantidad)
    }
    else if ( productoCompra.toUpperCase () == "DELINEADOR") {
        let producto3= prompt ("Ingrese la cantidad de " + producto3.nombre + "desea comprar:")
        calculoStock (producto3.cantidad , producto3.stock, producto3.precio)
        producto3.restarStock (producto3.cantidad)
    }
    else ( 
        alert ( "No tenemos ese producto a la venta")
    )

}


































/*
function calculadora(primerNumero, segundoNumero, operacion) {
    switch(operacion)
    {case "+":
         return primerNumero + segundoNumero;
         break;
    case "-":
        return primerNumero - segundoNumero;
        break;
    case "*":
         return primerNumero * segundoNumero;
         break;
    case "/":
         return primerNumero / segundoNumero;
         break;
   default:
    return 0;
         break; 
      }
  } 

  let numeroA = parseInt(prompt("Ingrese el numero:"))
  let operacion = prompt("ingrese que operacion desea realizar:")
  let numeroB = parseInt(prompt("Ingrese otro numero:"))
  alert(calculadora(numeroA, numeroB, operacion))
  */