const productos = [
    { nombre: "GtaV", precio: 50 },
    { Nombre: "FIFA23", precio: 100 },
    { nombre: "Cyberbug2077", precio: 150 },
    { nombre: "Mortal Kombat11", precio: 200 }, 
];
let carrito= []

let seleccion = prompt("hola si desea comprar algo juego el dia de hoy seleccione si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola si desea comprar algun juego el dia de hoy seleccione si o no")

}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosproductos = productos.map((producto) => producto.nombre + " " + 
    producto.precio + "$");
    alert(todoslosproductos.join ("-"))

} else if (seleccion == "no"){
    alert("Muchas gracias por ver nuestra tienda online")
}

while(seleccion !="no"){
    let producto = prompt("agraga un juego a tu carrito")
    let precio = 0
    if(producto == "GtaV" || producto == "FIFA23" || producto == "Cyberbug2077" || producto == "Mortal Kombat11"){
        switch(producto){
            case "GtaV":
             precio = 50;
            break;
            case "FIFA23":
             precio = 100
            break;
            case "Cyberbug2077":
             precio = 150
            break;
            case "Mortal Kombat11":
             precio = 200
            break;
            default:
             break;
            
            }
     let unidaddes = parseInt(prompt("cuantas unidades quiere llevar"))

     carrito.push({producto, unidades, precio})
     console.log(carrito)
    } else{
        alert("no tenemos ese producto")
    }
      seleccion = prompt("desea seguir comprando??")
      
      while(seleccion === "no"){
        alert("gracias por la compra! vuelva pronto")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritos.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break
      }
}

const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`);
