const perfil = require('./controllers/perfilController');
const casos = require('./controllers/casoController');
const ongs = require('./controllers/ongController');
const express = require('express');
const routes = express.Router();

routes.delete('/casos/:id',casos.delete)
routes.get('/casos',casos.index)
routes.post('/casos',casos.create)
routes.post('/ongs',ongs.create)
routes.get('/ongs',ongs.index)
routes.get('/perfil',perfil.index)
routes.post('/perfil',perfil.login)

module.exports = routes;