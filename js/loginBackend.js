const http = require('http');
const path = require('path');
const express =  require('express');
const fs = require("fs");
var session = require('express-session');
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:"abc"}));
   // configuraçoes
   app.set('port', process.env.PORT || 4000);
// secção de login
app.use("./indexHTML/acesso.html", (req, res, next) => {
    if( req.session.name ){
        next();
    }else{
        res.redirect("./indexHTML/acesso.html")
    }
      });
// artigos estaticos
app.use(express.static(path.join(__dirname, 'public')))
//start do server
server.listen(app.get('port'), () => {
    console.log('server na porta', app.get('port'))
})
// secção de login 2
app.post('./Entrar',(req, res) => {
    const usuarioscad =   fs.readFileSync("./js/usuarios.json")
    const usuariosparse = JSON.parse(usuarioscad);
    
    var name = req.body.name;
    var password = req.body.password;

    for( var umUsuario of usuariosparse) {
        if(name == umUsuario.name && password == umUsuario.password ){
            req.session.name = umUsuario;
            res.send('connected');
            return;
            }         
        }
        res.send('fail');
});