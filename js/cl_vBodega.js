import cl_vArticulo from "./cl_vArticulo.js";
import cl_mArticulo from "./cl_mArticulo.js";
export default class cl_vBodega {
    constructor(){
        this.controlador = null;
        this.salida = document.getElementById ("mainForm_salida");
        this.vArticulo = new cl_vArticulo ();
        this.vArticulo.btProcesar.onclick = () => this.controlador.procesarArticulo();
    }
    procesarArticulo(){
        this.mArticulo = new cl_mArticulo({
            costArt: this.vArticulo.costArt
        });
        return this.mArticulo;
    }
    reporteGanancia(acumCostA){
        this.salida.innerHTML = `"El total de ganancias es: ${acumCostA}"<br>`;
    }

}