function logar(){
    var nomes = document.getElementById('#username').value;
    var senha = document.getElementById('#password').value;

console.log(JSON.stringify({
    nomes:nomes,
    senha:senha
}));

    fetch("./login",{
        method:'POST',
        body: JSON.stringify({
            nomes:nomes,
            senha:senha
        }), 
        headers: { "Content-Type" : "application/json" }
    })

    .then(async (resp) => {
        var status = await resp.text();
        console.log(status);
        if(status == 'conectado' ){
            location.href = "./indexHTML/acesso.html";
        }else {
            alert('Nome e Senha invalidos!!');
        }
    });
}