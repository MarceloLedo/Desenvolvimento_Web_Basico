function salvar(){
    var table = document.getElementById("mytable");
    var row = table.insertRow();
    var nome = row.insertCell();
    var mail = row.insertCell();
    var nascimento = row.insertCell();
    var estado = row.insertCell();
    var icone = row.insertCell();

    nome.innerHTML = document.getElementById ("nome").value;
    mail.innerHTML = document.getElementById ("email").value;
    nascimento.innerHTML = document.getElementById ("nascimento").value;
    estado.innerHTML = document.getElementById ("estado").value;
    icone.innerHTML = '<i class="bi bi-pencil-square"></i>'
    limpar()
}

function limpar(){
  document.getElementById ("nome").value = '';
  document.getElementById ("email").value = '';
  document.getElementById ("nascimento").value = '';
  document.getElementById ("estado").value = '';
  document.getElementById ("pass").value= '';
}



