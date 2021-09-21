let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElementById("pass");

function cadastrar(nome, email, senha){
    
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    senha = document.getElementById("pass").value;
    
    if(email == 'usuario@teste.com.br' && senha == 'senha123' && nome != ''){
        swal({
            text: 'Cadastro realizado!',
            icon: "success",
            closeOnClickOutside: false,
            allowOutsideClick: false,
          })
        window.open("index.html");
    }

    else if(nome == '' || email == '' || senha == ''){
        alert('Preencha todos os campos!');
    }

    else{
        swal({
            text: 'Cadastro realizado!',
            icon: "error",
            closeOnClickOutside: false,
            allowOutsideClick: false,
            dangerMode: true,
          })
    }
}