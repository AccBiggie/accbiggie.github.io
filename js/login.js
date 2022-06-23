function logar() {
    var username = document.getElementById('#username').value
    var password = document.getElementById('#password').value

    console.log(JSON.stringify({ 
        username:username,
        password:password
    }));

    fetch("login"); 
        method:'POST',
        body, JSON.stringify({
            username:username, 
            password:password
        }),
        headers = {"content-type" : "aplication/json"}
    }

    then(async (resp) => {
        var status = await resp.text();
        console.log(status);
        if(status == 'conectado'){
            location.href = '/acesso-restrito/acesso.html'
        }else{
            alert('Nome ou senha inválidos !!')
        }
    });