let email = document.getElementById("em");
let senha = document.getElementById("pas");

function logar(email, senha){
    
    email = document.getElementById("em").value;
    senha = document.getElementById("pas").value;

    function delay(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n*1000);
        });
    }
    
    if(email == 'usuario@teste.com.br' && senha == 'senha123'){
        swal({
            text: 'Olá, ' + email + '! Seja bem vindo.',
            icon: "success",
            closeOnClickOutside: false,
            allowOutsideClick: false,
          })
    }

    else if(email == '' || senha == ''){
        alert('Preencha todos os campos!')
    }

    else {
        swal('Usuário ou senha incorreto!');
        swal({
            text: 'Usuário ou senha incorreto!',
            icon: "error",
            closeOnClickOutside: false,
            allowOutsideClick: false,
            dangerMode: true,
          })
    }
}