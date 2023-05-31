function limparFormulario(){
document.getElementById('rua').value = '';
document.getElementById('bairro').value = '';
document.getElementById('cidade').value = '';
document.getElementById('uf').value = '';
document.getElementById('ibge').value = '';
}

function minhafuncao(conteudo){
    if(!('erro' in conteudo)){
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;
        document.getElementById('ibge').value = conteudo.ibge;

    }else{
        alert('O CEP não existe na base de dados.!');
        limparFormulario();
    }
}
function minhajson(conteudo) {
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let nascimento = document.getElementById('nascimento').value;
        let rua = document.getElementById('rua').value;
        let bairro = document.getElementById('bairro').value;
        let cidade = document.getElementById('cidade').value;
        let uf = document.getElementById('uf').value;
        let ibge = document.getElementById('ibge').value;
        
        document.getElementById('..').innerHTML = '{ /n' + '\n' + nome + '\n' + email +'\n' + nascimento + '\n' + rua +'\n' + bairro + '\n' + cidade +'\n' + uf + '\n' + ibge + '}';
        
}

function pesquisacep(valor){
    //regex ou expressão regular
    let cep = valor.replace(/\D/g,'');
    if (cep !=""){
        let valida = /^[0-9]{8}$/;
        if(valida.test(cep)){
           // alert("CEP valido! \n"+ "Seu CEP: "+ cep);
            let script = document.createElement('script');
            script.src = "https://viacep.com.br/ws/"+ cep +"/json/?callback=minhafuncao";
            document.body.appendChild(script);
        }else{
            alert('CEP informado não possui 8 digitos numéricos');
            limparFormulario();
        }
    }else{
        alert('O CEP não pode ser vazio');
        limparFormulario();
    }
}
