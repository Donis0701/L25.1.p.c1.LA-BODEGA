//*En una bodega se tiene el costo de varios articulos y se le piensa ganar a cada uno el 50%. hacer un programa que calcule el total de ganancias que tendra la bodega al tenerlos todos.
import cl_articulo from "./cl_articulo.js";
import cl_Bodega from "./cl_Bodega.js";

let art1 = new cl_articulo (10);
let art2 = new cl_articulo (20);
let art3 = new cl_articulo (14);
let art4 = new cl_articulo (6);
let art5 = new cl_articulo (4);

let bodega = new cl_Bodega ();
bodega.procesarArticulo (art1);
bodega.procesarArticulo (art2);
bodega.procesarArticulo (art3); 
bodega.procesarArticulo (art4); 
bodega.procesarArticulo (art5); 

let salida = document.getElementById ("salida");
salida.innerHTML =`<br>"El total de ganancias es: ${bodega.totalGanancias()}`;
