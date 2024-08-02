const productos = [ 
  {id: 1, nombre: "Iphone 11", descripcion: "Iphone 11 de 128 GB", precio: 310, imagen: "iphone11.jpg" },
  {id: 2, nombre: "Iphone 11 PRO", descripcion: "Iphone 11 pro de 128 GB", precio: 310, imagen: "11promax.jpg" },
  {id: 3, nombre: "Iphone 14", descripcion: "Iphone 14 pro de 256 GB", precio: 310, imagen: "iphone14.jpg" },
];

function renderProductos(productos) { 
  let contenidoHTML = "";

  for (const producto of productos) {
      contenidoHTML +=  `
      <div class="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
          <img class="h-48 rounded-xl object-cover" src="img/${producto.imagen}" />
          <div class="flex flex-col gap-4">
              <div class="flex flex-row justify-between">
                  <div class="flex flex-col">
                      <span class="text-xl font-bold">${producto.nombre}</span>
                      <span class="text-sm font-semibold text-gray-700">${producto.descripcion}</span>
                  </div>
                  <span class="font-bold text-purple-950">$${producto.precio}</span>
              </div>
              <button class="hover:bg-purple-900 text-gray-50 bg-purple-600 py-2 rounded-md" onclick="agregarProducto(${producto.id});">Add to cart</button>
          </div>
      </div>`;
  }    

  document.getElementById("card").innerHTML = contenidoHTML;
}

function agregarProducto(id) {
  const producto = productos.find(item => item.id === id);
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  
  // Verifica que el carrigggggggggggggggggggto sea un array, si no lo es, inicialízalo como un array vacío
  if (!Array.isArray(carrito)) {
      carrito = [];
  }

  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log("El producto se agregó correctamente");
  totalProductos();
}

function totalProductos() { 
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  
  if (!Array.isArray(carrito)) {
      carrito = [];
  }
  
  document.getElementById("totalCarrito").innerHTML = carrito.length;
  return carrito.length;
}

renderProductos(productos);
totalProductos();