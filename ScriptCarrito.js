
mostrarCarrito()

function mostrarCarrito(){
    var carrito = localStorage.getItem("listado")
    var Carritorec = JSON.parse(carrito)
    document.getElementById("carrito").innerHTML = ""
    let total = 0
    if (Carritorec.length > 0){
        for (var i = 0; i < Carritorec.length; i++){
            document.getElementById("carrito").innerHTML += 
                Carritorec[i]["nombre"] + " - Precio: $" + Carritorec[i]["precio"] + "<br>"
            total += Carritorec[i]["precio"]
        }
        document.getElementById("carrito").innerHTML += "<hr><strong>Total: $" + total + "</strong>"
    } else {
        document.getElementById("carrito").innerHTML = "El carrito está vacío."
    }
}

function vaciarCarrito(){
    localStorage.removeItem("listado");
    location.reload();
}
