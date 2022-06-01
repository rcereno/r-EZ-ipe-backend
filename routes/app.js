 const express = require('express');
 const router = express.Router()
 const app = express();
 require('dotenv').config();
 const{auth} = require('express-openid-connect');

 const cors = require('cors');
app.use(cors());
 app.use(express.json());
 app.use(router);


 const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: process.env.BASE_URL,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.REACT_APP_AUTH0_DOMAIN,
  secret: process.env.SECRET
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    //console.log(req.oidc.isAuthenticated)
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

 

module.exports = app;

 