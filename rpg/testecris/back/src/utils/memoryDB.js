class BD {
    #db = []
    constructor() {
        this.#db = {
            'cor': '#232323',
            'nome': 'Indefinido',
            'rounded': '',
            'folder': '',
            'imgName': 'imagem.png'
        }
    }

    listarItem() {
        return this.#db;
    }

    mudar(key, value) {
        this.#db[key] = value;
    }
    
    
}
module.exports = new BD();