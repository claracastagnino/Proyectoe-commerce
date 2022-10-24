
let nombreIngresadoCliente = prompt("Ingrese su nombre:")

console.log(nombreIngresadoCliente)

if(nombreIngresadoCliente != ""){
    alert("Bienvenido"+ " " + nombreIngresadoCliente + " !")
} else{
    alert("No se ha ingresado ningun nombre");
}


function Producto (nombre, precio,stock,img)  {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    this.cat = cat
    this.restarStock = function(cantidad) {
          this.stock -= cantidad
    }
    
}

let producto1 = new Producto ("Brocha de maquillaje", parseInt(50), parseInt(30),"../imagenes/BrochasdeMaquillaje,png","Rostro")
let producto2 = new Producto ("Labial rojo", parseInt(80), parseInt(45),"../imagenes/labialrojo.wepb","Labios")
let producto3 = new Producto ("Delineador", parseInt(56),parseInt(25), "../imagenes/delineador.jpg" , "Ojos")



let listaProductos = [producto1, producto2,producto3]
/*
for(const prod of listaProductos) {

let card = document.createElement("div")

card.className = "card"

card.innerHTML = `<img src=${prod.img}></img><h6>${prod.nombre}</h6><p>Precio: $ ${prod.precio}</p><p>Stock disponible ${prod.stock}</p>`

catalogoProductos.append(card)

}

*/



let listaNombresProductos = []

for(const prod of listaProductos){
   listaNombresProductos.push(prod.nombre)
}


let respuestaUsuario = prompt( " Desea ver los productos disponibles: Por favor ingrese \nSI  \nNO ")

if(respuestaUsuario =="SI") {
  alert(" Los productos disponibles son: \n - " + listaNombresProductos.join(" \n-"))
}
else{
    alert("Gracias" +" "+ nombreIngresadoCliente +" " + "por tu visita" )
}




/*let cantidadDeProductosDistintos = parseInt(prompt("Indique la cantidad de productos diferentes desea comprar:")) */

 let productoCompra = prompt(" ingrese que producto desea comprar: " + listaNombresProductos.join(" \n -") + " \n - ESC" )


while (productoCompra != "ESC"){

    if (productoCompra.toUpperCase () == "BROCHA DE MAQUILLAJE") {
        let cantidadAComprar1 = prompt("Ingrese la cantidad de " + producto1.nombre + " desea comprar:")
       if(cantidadAComprar1 <= producto1.stock){
        precioTotal = precioTotal + (cantidadAComprar1 * producto1.precio)
        alert("El precio total es " + precioTotal )
       }
        else{
            alert("Actualmente tenemos " + producto1.stock + " unidades de este producto")
        }
       /* calculoStock = (cantidadAComprar1 , producto1.stock, producto1.precio)
        producto1.restarStock (producto1.cantidadAComprar1) */
    }
    else if ( productoCompra.toUpperCase () == "LABIAL") {
        let cantidadAComprar2 = prompt("Ingrese la cantidad de " + producto2.nombre + " desea comprar:")
       calculoStock = (cantidadAComprar2 - producto2.stock)
        producto2.restarStock (producto2.cantidadAComprar2)
    }
    else if ( productoCompra.toUpperCase () == "DELINEADOR") {
        let cantidadAComprar3= prompt("Ingrese la cantidad de " + producto3.nombre + " desea comprar:")
        calculoStock =( cantidadAComprar3, producto3.stock, producto3.precio)
        producto3.restarStock (producto3.cantidadAComprar3)
    }
    else ( 
        alert( "No tenemos ese producto a la venta")
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