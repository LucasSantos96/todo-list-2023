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
