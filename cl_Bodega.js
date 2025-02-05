export default class Bodega {
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