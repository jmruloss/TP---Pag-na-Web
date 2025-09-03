var listaProductos = [
    {"nombre":"Maceta de Plastico", "precio": 7999},
    {"nombre":"Pala Chica", "precio": 16999},
    {"nombre":"Guantes Jardineros", "precio": 12999},
    {"nombre":"Maceta de Cemento", "precio": 25999},
    {"nombre":"Pino Lemon", "precio": 7999},
    {"nombre":"Portulaca", "precio": 4999},
    {"nombre":"Pensamiento", "precio": 5999},
    {"nombre":"Petunias", "precio": 6999},
    {"nombre":"Gazania", "precio": 6499},
    {"nombre":"Conejitos", "precio": 4499},
    {"nombre":"Azerburgueriano", "precio": 8999},
    {"nombre":"Limonero", "precio": 19999},
    {"nombre":"Bolsa de 5KG", "precio": 21999},
    {"nombre":"Bolsa de 10KG", "precio": 34999},
    {"nombre":"Bolsa de 15KG", "precio": 42999},
    {"nombre":"Bolsa de 20KG", "precio": 47999},
    {"nombre":"Pala Chica (Herramienta)", "precio": 16999},
    {"nombre":"Pala Grande", "precio": 51999},
    {"nombre":"Bordeadora de Cesped", "precio": 139999},
    {"nombre":"Cortadora de Cesped", "precio": 219999},
    {"nombre":"Rastrillo", "precio": 9999},
    {"nombre":"Sopladora de Hojas", "precio": 179999},
    {"nombre":"Manguera", "precio": 19999},
    {"nombre":"Regadera", "precio": 7999},
    {"nombre":"Gnomos", "precio": 15999},
    {"nombre":"Gato Ceramica", "precio": 12999},
    {"nombre":"Hongos", "precio": 14999},
    {"nombre":"Punta Antigua", "precio": 41999}
];

var listaCarrito = localStorage.getItem("listado") || [];
listaCarrito = JSON.parse(listaCarrito);

function agregarAlCarrito(numero){
    if (numero > 0 && numero <= listaProductos.length){
        listaCarrito.push(listaProductos[numero - 1]);
        localStorage.setItem("listado", JSON.stringify(listaCarrito));
        alert(listaCarrito[listaCarrito.length - 1].nombre + " agregado al carrito");
    }
    alert(listaCarrito);
}
