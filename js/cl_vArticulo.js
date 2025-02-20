export default class cl_vArticulo{
    constructor(){
        this.inCostArt = document.getElementById ("articuloForm_inCostArt");
        this.btProcesar = document.getElementById ("articuloForm_btProcesar");
    }
    get costArt(){
        return this.inCostArt.value;
    }
}