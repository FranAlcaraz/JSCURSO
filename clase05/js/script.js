'use strict'


class producto{
    constructor(nombre, precio, stock, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.stock= stock;
        this.categoria = categoria;
    }
};

const productos = [ 
    {
        nombre:"pantalon Wara Marron",
        precio: 3200,
        stock:10,
        categoria:"pantalon"
    },
    
    {
        nombre:"Blusa Nina Verde",
        precio:1400,
        stock:14,
        categoria:"blusa"
    },
   
    {
        nombre:" Top Chari Blanco",
        precio:1000,
        stock:12,
        categoria:"top"
    },
    
    {
        nombre:"Entero Amuk Verde",
        precio:2800,
        stock:22,
        categoria:"entero"
    },
   {
        nombre:"Vestido Samay Lila",
        precio: 2000,
        stock:7,
        categoria:"vestido"
    },
];




function mostrarProductos (){

for (const producto of productos){
    console.log(producto.nombre);
    console.log(producto.precio);
}


};
function agregarProducto(nombre, precio, stock, categoria){
    nombre = prompt("ingrese nombre");
    precio =prompt.parseInt(("ingrese precio"));
    stock = prompt("ingrese stock");
    categoria =prompt("ingrese categoria");

    productos.push(new producto(nombre, precio, stock, categoria));



};



mostrarProductos();
agregarProducto();
mostrarProductos();

