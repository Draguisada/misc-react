class BD {
    #db = {}
    constructor() {
        this.#db = {}
    }

    listarItem() {
        return this.#db;
    }

    mudar(key, value) {
        this.#db[key] = value;
    }

    reset() {
        this.#db = {};
    }
    
    
}
module.exports = new BD();