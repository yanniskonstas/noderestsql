  
const settings = require('./settings');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const knex = require('knex')({
  client: 'mysql',
  connection: settings.database
});

// ************************************************************
// Assuming that this info is coming from a form from a web app
// ************************************************************
const username = 'yannis';
const password = 'password';
// ************************************************************
// Assuming that this info is coming from process.env.secret
// ************************************************************
const secret = 's3cr3t';
const expiresIn = 3600;
// ************************************************************

knex('users').where({
  username
}).then(response => {
  // password => raw password from a form, response[0].password => hashed in DB
  bcrypt.compare(password, response[0].password, (error, result) => {
    if (result) {
      console.log('Authentication successful');
      const payload = {
        username: response[0].username,
        isAdmin: true
      };
      const token = jwt.sign(payload, secret, { expiresIn });
      console.log(token);
    } else {
      console.log('Incorrect password');
    }
  });
});

// ************************************************************
// Token example
// ************************************************************
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inlhbm5pcyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU4OTcxNDYyNywiZXhwIjoxNTg5NzE4MjI3fQ.n4USm1cYFo1djVLNK20BIJVRBXtCXCG0QWnB242sX1o