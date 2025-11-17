require('dotenv').config(); // Isso deve ser a primeira linha
const express = require('express');
const cors = require('cors'); // Habilita a comunicação entre domínios
// Importa suas rotas de autenticação e rotas privadas
const rotas = require('./src/routes/rotasMudar.js');
const memoria = require('./src/routes/presets.js');

const app = express();
const PORT = process.env.PORT || 5000; // Define a porta, com 5000 como fallback
// Middlewares
app.use(cors());
app.use(express.json()); // Permite que a API leia JSON
// Rotas públicas (como login e registro)

app.use('/mudar', rotas);
app.use('/memoria', memoria);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});