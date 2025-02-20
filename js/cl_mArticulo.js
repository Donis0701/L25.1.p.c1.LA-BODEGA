export default class cl_mArticulo {
    constructor({costArt}) {
        this.costArt = costArt;
    }
    set costArt(c) {
        this._costArt = +c;
    }
    get costArt() {
        return this._costArt;
    }
    ganancia() {
        return this.costArt * 0.5;
    }
}