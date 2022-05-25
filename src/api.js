const express = require('express');

const validationLogin = require('./middleware/validationLogin');
const validationUser = require('./middleware/validationUser');
const validateJWT = require('./middleware/validateJWT');
const validationCategory = require('./middleware/validationCategory');
const validationPost = require('./middleware/validationPost');

const User = require('./database/controllers/user');
const Category = require('./database/controllers/category');
const Post = require('./database/controllers/post');
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

app.post('/categories', validateJWT, validationCategory.checkName, Category.create);

app.get('/categories', validateJWT, Category.find);

app.post('/post', validateJWT, validationPost.checkPost, Post.create);

app.get('/post', validateJWT, Post.postAll);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
