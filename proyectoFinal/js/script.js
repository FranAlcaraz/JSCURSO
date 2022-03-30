'use strict'

class producto {
    constructor(nombre, categoria, precio, stock, img) {
      this.nombre = nombre;
      this.precio = parseFloat(precio);
      this.disponible = true;
      this.stock = stock;
      this.categoria = categoria;
      this.img = img;
    }
  
    visualizar() {
      return this.nombre + " " + this.precio;
    }
  
    sumarIva() {
      this.precio = this.precio * 1.21;
    }
  
    vender() {
      this.disponible = false;
    }
  }

function agregarProducto(nombre, precio, stock, categoria){
    nombre = prompt("ingrese nombre");
    precio =parseInt(prompt("ingrese precio"));
    stock = prompt("ingrese stock");
    categoria =prompt("ingrese categoria");

    productos.push(new producto(nombre, precio, stock, categoria));

};

let bodyTable = document.getElementById("cuerpo");

//visualizar productos DOM
function completarTabla() {
    productos.forEach((producto) => {
      let div = document.createElement("div");
      div.className="card";
      div.innerHTML =`<img src=${producto.img} class='card-img-top'> <div class='card-body'><h5 class='card-title'>${producto.nombre} </h5> <p class='card-text'>$ ${producto.precio}</p><p class='card-text'>Stock: ${producto.stock}</p></div>`
      bodyTable.appendChild(div);
    });
  }
completarTabla();


//funcion para consola
function ordenarPrecio(){
    var ordenadosPrecio = [];
    var index = 1;
    let stringOrdenado = "";
    ordenadosPrecio = productos.map(elemento => elemento);
    
    
    ordenadosPrecio.sort(function(a,b){
        return a.precio - b.precio;
    });
    for(var elemento of ordenadosPrecio){
        stringOrdenado = stringOrdenado + index + ") Nombre: " + elemento.nombre + "\n Precio: " + elemento.precio + "\n";
        index++;
    }
    console.log("productos en orden ascendente por precio \n" + stringOrdenado);
}

ordenarPrecio();
//fin funcion consola

function filtrarTabla(array) {
    array.forEach((producto) => {
        let div = document.createElement("div");
        div.className="card";
      div.innerHTML =`<img src=${producto.img} class='card-img-top'> <div class='card-body'><h5 class='card-title'>${producto.nombre} </h5> <p class='card-text'>$ ${producto.precio}</p><p class='card-text'>Stock: ${producto.stock}</p></div>`
    bodyTable.appendChild(div);
    });
  }
  
  
  let elegirPorqueFiltrar = document.querySelectorAll('input[type="radio"]');
  
  console.log(elegirPorqueFiltrar);
  
  elegirPorqueFiltrar.forEach((check) => console.log(check));
  
  
  elegirPorqueFiltrar.forEach((check) =>
    check.addEventListener("change", handleChange),
  );
  
  
  
  function handleChange() {
    
    bodyTable.innerHTML = "";
  
    
    const checkeds = Array.from(elegirPorqueFiltrar).filter(
      (checkbox) => checkbox.checked,
    );
  
    
    const checkedValue = checkeds.map((checkbox) => checkbox.value);
  
    
    let ArrayFilter = [];
  
  
    if (checkedValue == "all") {
      
      ArrayFilter = productos;
    } else if (checkedValue == "pantalon") {
      
      ArrayFilter = productos.filter(
        (producto) => producto.categoria == "pantalon",
      );
    } else if (checkedValue == "blusa") {
      
      ArrayFilter = productos.filter(
        (producto) => producto.categoria == "blusa",
      );
    } else if (checkedValue == "entero") {
      
      ArrayFilter = productos.filter(
        (producto) => producto.categoria == "entero",
      );
    } else if (checkedValue == "top") {
      
      ArrayFilter = productos.filter((producto) => producto.categoria == "top");
    } else if (checkedValue == "vestido") {
      
      ArrayFilter = productos.filter(
        (producto) => producto.categoria == "vestido",
      );
    }
  
  
  
    filtrarTabla(ArrayFilter);
  }


  function guardarLista(){
    localStorage.setItem("listaProductos",JSON.stringify(productos));
    console.log("La lista se ha guardado con " + productos.length + " productos:");
    for(producto of productos){
        console.log(producto.toString());
    }
}

guardarLista();


