// backend/src/routes/auth.routes.js
const router = require('express').Router();
const db = require('../utils/memoryDB.js');

// Rota de login
router.post('/', async (req, res) => {

    if (Object.keys(req.body).length == 0) return res.status(401).json({ message: 'Sem nenhum dado enviado' });
    
    items = Object.keys(req.body)

    // console.log(items)
    // console.log(req.body)

    // Alterar todos os itens enviados modularmente.
    items.forEach(element => {
        db.mudar(element, req.body[element])
    });
    
    res.json({message: 'Mudado com sucesso'});
});

router.get('/', async (req, res) => {
    console.log(db.listarItem())
    res.json({ ...db.listarItem() });
});

router.get('/resetar', async (req, res) => {
    db.reset();
    res.json({ message: "Banco de dados na memória limpo" });
});
module.exports = router;