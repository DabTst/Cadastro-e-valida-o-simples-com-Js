function validarForm(){
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let apelido = document.getElementById('lastname').value;
    let senha = document.getElementById('password').value;
    let reSenha = document.getElementById('passconfirm').value;
    let agreement = document.getElementById('agree-label').value;
    let submit = document.getElementById('btn-submit').value;
    let nominho = document.getElementById( 'nominho')

    if (nome == ""){
        alert("Por favor insira seu Nome!")
        return false
    }
    
    if (!/^[a-zA-Z]+$/.test(nome)){
        alert("Por favor, insira apenas letras no campo nome")
        return false
    }
    if (email == ""){
        alert("Por favor insira seu email!")
        return false
    }
    if (!validarEmail(email)){
        alert("Endereço inválido. Por favor ensira um endereço válido!")
        return false
    }
    if(apelido == ""){
        alert("Por favir insira seu apelido")
        return false
    }
    if(!/^[a-zA-z]+$/.test(apelido)){
        alert("Por favor insira apenas letras no apelido")
        return false
    }
    if (senha.length < 8 || senha.length > 15){
        alert("Sua senha deve estar entre 8 à 15 caracteres.")
        return false
    }
    if(senha != reSenha){
        alert( "Senhas sao diferentes!")
        return false
    }
    if(agree.checked){
        return true
    } else{
        alert("Por favor, leia e concorde com os termos e as nossas condições!")
        return false
    }
    
}

function validarEmail(email){
    let re = /\S+@\S+\.\S+/
    return re.test(email)
}

