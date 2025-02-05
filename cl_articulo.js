export default class Bodega {
    constructor(c) {
        this.costArt = c;
    }
    set costArt(c) {
        this._costArt = +c;
    }
    get costArt() {
        return this._costArt;
    }
    ganancia(){
        return this.costArt * 0.5;
    }
}