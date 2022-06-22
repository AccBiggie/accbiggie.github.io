const http = require('http')
const path = require('path')

const express = require('express')
const fs = require("fs");
var session = require ('express-session')


const app = express()
const server = http.createServer(app)



app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:"abc"}));


    //configurações
    app.set('port', process.env.PORT || 3000)