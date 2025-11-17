// backend/src/routes/auth.routes.js
const router = require('express').Router();
const db = require('../utils/memoryDB.js');

// Rota de login
router.post('/', async (req, res) => {

    if (Object.keys(req.body).length == 0) return res.status(401).json({ message: 'Sem nenhum dado enviado' });
    const corpo = req.body;
    let items = Object.keys(corpo)
    
    // console.log(corpo)
    // Alterar todos os itens enviados modularmente.
    items.forEach(element => {
        db.mudar(element, corpo[element])
    });
    
    res.json({message: 'Mudado com sucesso'});
});


module.exports = router;