const express = require('express');

const validationLogin = require('./middleware/validationLogin');
const validationUser = require('./middleware/validationUser');
const validateJWT = require('./middleware/validateJWT');

const User = require('./database/controllers/user');
// ...

const app = express();

app.use(express.json());

app.post('/login', validationLogin.validationLogin, User.login);

app.post('/user', 
    validationUser.checkUser,
    validationUser.checkEmail,
    User.create,
    validateJWT);

app.get('/user', validateJWT, User.allUsers);

app.get('/user/:id', validateJWT, User.userId);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
