export default class cl_controlador{
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarArticulo() {
        this.modelo.procesarArticulo(this.vista.procesarArticulo());
        this.vista.reporteGanancia(this.modelo.totalGanancias());
    }
}