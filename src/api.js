const express = require('express');

const validationLogin = require('./middleware/validationLogin');

const User = require('./database/controllers/user');
// ...

const app = express();

app.use(express.json());

app.post('/login', validationLogin.validationLogin, User.login);

app.post('/user', User.create);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
