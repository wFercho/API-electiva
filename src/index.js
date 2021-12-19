'use strict'

//Cargar variables de entorno
require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
//bodyParser = require('body-parser');
require('../drivers/mongo-connect')

//Settings
app.set('port',3000);
app.set('views', path.join(__dirname, 'View'))

//Middlewares
app.use(express.json())
//app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
//app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/api',require('../routes/index'));

//Server
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'))
});
