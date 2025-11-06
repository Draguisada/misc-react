// backend/src/routes/auth.routes.js
const router = require('express').Router();
const db = require('../utils/memoryDB.js');

// Rota de login
router.post('/add', async (req, res) => {

    db.criarPreset();
    
    res.json({message: 'Criado com sucesso'});
});

router.post('/setAtual', async (req, res) => {
    const {id} = req.body;
    db.mudarPresetAtual(id);
})

router.get('/', async (req, res) => {
    res.json({ ...db.listarItem() });
});

router.get('/todos', async (req, res) => {
    res.json({ ...db.listarTodos() });
});

router.get('/resetar', async (req, res) => {
    db.reset();
    res.json({ message: "Banco de dados na memória limpo" });
});

module.exports = router;