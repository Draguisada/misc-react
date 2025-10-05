// backend/src/routes/auth.routes.js
const router = require('express').Router();
const db = require('../utils/memoryDB.js');

// Rota de login
router.post('/', async (req, res) => {
    // Pega o email e a senha que vieram no corpo da requisição
    const { cor, nome } = req.body;

    if (Object.keys(req.body).length == 0) return res.status(401).json({ message: 'Sem nenhum dado enviado' });
    
    console.log(items = Object.keys(req.body))
    console.log(req.body)
    console.log(req.body[items])

    // Alterar todos os itens enviados modularmente.
    items.forEach(element => {
        db.mudar(element, req.body[element])
    });
    
    res.json({message: 'Mudado com sucesso'});
});

router.get('/', async (req, res) => {

    res.json({ ...db.listarItem() });
});
module.exports = router;