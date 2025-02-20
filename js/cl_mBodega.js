export default class cl_mBodega {
    constructor() {
        this.acumCostA = 0;    
    }
    procesarArticulo(articulo){
        this.acumCostA += articulo.ganancia();
    }
    totalGanancias(){
        return this.acumCostA;
    }
}