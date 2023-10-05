//div onde esta o login 
const form = document.querySelector('.login-form');

//input do usuario
const usuarioInput = form.querySelector("input[type='text']");

//input da senha
const senhaInput = form.querySelector("input[type='password']");

const telefoneInput = form.querySelector("input[type='number']");

const emailInput = form.querySelector("input[type='email']");


form.addEventListener('submit', (event) => {
    // Adicionar o event.preventDefault() evita que a página seja recarregada quando o botão for apertado
    event.preventDefault();

    // Obtém os valores dos campos de entrada do usuário e senha
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuario === '' || senha === '' || telefone=== ''|| email==='' ) {
        alert("Por favor preencha os campos");
    } else if (usuario === 'usuario' && senha === 'senha' && telefone=== '12345678' && email==='email@gmail.com') {
        // Verifica se as informações de login e senha estão corretas
        alert("Bem vindo!")
        location.replace("/Tarefa/index.html", "_self")
    } else {
        // Exibe uma mensagem de erro se as informações estiverem, erradas
        alert( "Usuário ou senha incorreto, tente novamente" )
    
    }

})  


