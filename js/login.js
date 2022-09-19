function logar(){
    var name = document.getElementById('#username').value;
    var password = document.getElementById('#password').value;

console.log(JSON.stringify({
    name:name,
    password:password
}));
    fetch("./login",{
        method:'POST',
        body: JSON.stringify({
            name:name,
            password:password
        }), 
        headers: { "Content-Type" : "application/json" }
    })
    .then(async (resp) => {
        var status = await resp.text();
        console.log(status);
        if(status == 'connected' ){
            location.href = "./indexHTML/acesso.html";
        }else {
            alert('Nome e Senha invalidos!!');
        }
    });
}