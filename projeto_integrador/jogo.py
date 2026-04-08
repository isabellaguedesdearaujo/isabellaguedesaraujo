const express = require('explress')
const { body, paream} = require ('express-validator')
const app = express ()

app.use(express.json());

// Rota com validações avançadas
app.post('/usuarios',
         [
           body('nome')
           .isString().withMessage('Nome deve ser texto')
           .isLength({ min: 3 }).withMessage('Nome precisa ter ao menos 3 letras'),
           body ('idade)
                 .isInt({ min: 6, mas: 120 }).withMessage('Idade deve ser um número entre 6 e 120
           body('email')
                  .isEmail().withmessagem('Email inválido'),
           ],
         (req, res) => {
  // Se passou pelas validações, processaa
  res.json({ messagem: "Usuário válido!' });
