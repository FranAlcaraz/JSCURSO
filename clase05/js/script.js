'use strict'

const productos = [ 
    {
        nombre:"pantalon Wara Marron",
        precio: 3200,
        stock:10,
        categoria:"pantalon",
        img :"https://i.ibb.co/RHkdMtM/webchicoana-11.jpg",
    },
    {
        nombre:"pantalon Wara Crudo",
        precio: 3200,
        stock:10,
        categoria:"pantalon",
        img :"https://i.ibb.co/YXDF0gy/webchicoana-15.jpg",
    },
    {
        nombre:"Blusa Nina Verde",
        precio:1400,
        stock:14,
        categoria:"blusa",
        img :"https://i.ibb.co/HnJYmDM/webchicoana-46.jpg",
    },
    {
        nombre:"Blusa Nina Rosa",
        precio:1400,
        stock:14,
        categoria:"blusa",
        img :"https://i.ibb.co/0Fh2nzp/webchicoana-37.jpg",
    },
    {
        nombre:" Top Chari Blanco",
        precio:1000,
        stock:12,
        categoria:"top",
        img :"https://i.ibb.co/wQFFJJd/webchicoana-63.jpg",
    },
    {
        nombre:"Top Chari Celeste",
        precio:1000,
        stock:12,
        categoria:"top",
        img :"https://i.ibb.co/mtD1fVL/webchicoana-19.jpg",
    },
    {
        nombre:"Entero Amuk Verde",
        precio:2800,
        stock:22,
        categoria:"entero",
        img :"https://i.ibb.co/NNgNd3B/webchicoana.jpg",
    },
    {
        nombre:"Entero Amuk Camel",
        precio:2800,
        stock:22,
        categoria:"entero",
        img :"https://i.ibb.co/grhNjfS/webchicoana-32.jpg",
    },
    {
        nombre:"Vestido Samay Tostado",
        precio: 2000,
        stock:7,
        categoria:"vestido",
        img :"https://i.ibb.co/zS90FWB/webchicoana-30.jpg",
    },
    {
        nombre:"Vestido Samay Lila",
        precio: 2000,
        stock:7,
        categoria:"vestido",
        img :"https://i.ibb.co/RvqXxZZ/webchicoana-69.jpg",
    },
];




function mostrarProductos (){

productos.forEach((producto => {

    console.log(producto.nombre);
    console.log(producto.precio);
    
}));

};

mostrarProductos();