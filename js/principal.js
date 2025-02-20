//*En una bodega se tiene el costo de varios articulos y se le piensa ganar a cada uno el 50%. hacer un programa que calcule el total de ganancias que tendra la bodega al tenerlos todos.

import cl_mBodega from "./cl_mBodega.js";
import cl_vBodega from "./cl_vBodega.js";
import cl_controlador from "./controlador.js";

export default class cl_principal {
    constructor() {
        let vista = new cl_vBodega();
        let modelo = new cl_mBodega();
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;
    }
}
