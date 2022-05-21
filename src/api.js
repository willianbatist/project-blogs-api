const express = require('express');

const User = require('./database/controllers/user');
// ...

const app = express();

app.use(express.json());

app.post('/login', User.login);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
