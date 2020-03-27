const express = require('express');

const IncidentController = require('./controllers/IncidentController');
const LoginController = require('./controllers/LoginController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');

const routes  = express.Router();

/* 
    request.query; Obtem os parametros enviados na rota. ex: ?name=
    request.params;  obtem os parametros da rota. ex: /users/1
    request.body; obtem os parametros POST 
*/

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/login', LoginController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;