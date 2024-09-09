let formLogin = document.querySelector('#login');
let formCad = document.querySelector('#cadastro');
let btnColor = document.querySelector('.btn-color');

document.querySelector('#btnLogin').addEventListener('click', () => {
    formLogin.style.left ='25px'
    formCad.style.left ='450px'
    btnColor.style.left ='0px'
});

document.querySelector('#btnCad').addEventListener('click', () => {
    formLogin.style.left ='-450px'
    formCad.style.left ='25px'
    btnColor.style.left ='102px'
});

///

formCad.addEventListener('submit',function (e) {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;


    //validação simples
    if(senha !== confirmSenha){
        alert('As senhas não coincidem!')
        return;
    }

    // Criar um objeto com os dados de cadastro
    const userData = {
        user: user,
        email: email,
        senha: senha
    };

    // Armazenando no localStorage (usando o email como chave)
    localStorage.setItem(email, JSON.stringify(userData));
    alert('Cadastro realizado com sucesso!');

     // Limpar campos após o cadastro
    formCad.reset();

    
});

formLogin.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    // Verificar se o usuário existe no localStorage
    const storedUserData = localStorage.getItem(email);

    if(storedUserData === null) {
        alert('Usuário não encontrado!')
        return;
    } 

    // Converter o objeto armazenado de volta para um objeto JavaScript
    const userData = JSON.parse(storedUserData);


   // Verificar se a senha está correta
   if (userData.senha === senha) {
    alert('Login realizado com sucesso!');
    // Redirecionar para a página da todo list
    window.location.href = './todolist/todolist.html';
} else {
    alert('Senha incorreta!');
}

});