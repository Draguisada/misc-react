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
    
    
}
module.exports = new BD();