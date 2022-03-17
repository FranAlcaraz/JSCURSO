'use strict'

const productos = [];


class producto{
    constructor(nombre, precio, stock, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.stock= stock;
        this.categoria = categoria;
    }
};


function agregarProducto(nombre, precio, stock, categoria){
    nombre = prompt("ingrese nombre");
    precio =prompt.parseInt(("ingrese precio"));
    stock = prompt("ingrese stock");
    categoria =prompt("ingrese categoria");

    productos.push(new producto(nombre, precio, stock, categoria));



};



productos.push(new producto("Pantalon Javi", 3000, 10, "pantalones"));
productos.push(new producto("Remera Afrik", 3420, 11, "remeras"));

function ordenarPrecio(){
    var ordenadosPrecio = [];
    var index = 1;
    let stringOrdenado = "";
    ordenadosPrecio = productos.map(elemento => elemento);
    var ordenadosPrecio = productos;
    ordenadosPrecio.sort(function(a,b){
        return a.precio - b.precio;
    });
    for(var elemento of ordenadosPrecio){
        stringOrdenado = stringOrdenado + index + ": " + elemento.nombre + "\n" + elemento.precio + "\n";
        index++;
    }
    console.log("productos en orden ascendente por precio \n" + stringOrdenado);
}

ordenarPrecio();



function mostrarProductos (){

    for (const producto of productos){
        console.log(producto.nombre);
        console.log(producto.precio);
    }
    
    
    };

    mostrarProductos();

    function mostrarPantalones(){
 
        const pantalones = productos.filter ((prod) => 
        prod.categoria.includes("pantalones"));
        console.log(pantalones);

    }

    mostrarPantalones();

    