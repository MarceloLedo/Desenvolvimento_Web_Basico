function displayRadioValue(){
    let elemento = document.getElementsByName('gender');
    for(let i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
          document.getElementById('result').innerHTML = "Genero selecionado é: " 
          + elemento[i].value;    
        }
    }   
}

function getCheckBox(){
  let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let text = "";
  for(let i = 0; i< checkBoxes.length ; i++){
      text = text +  checkBoxes[i].value+ ".  " ;
  }
  document.getElementById('pri').innerHTML = text;
}

function getOption(){
  let selectElemento = document.querySelector('#select1');
  output = selectElemento.value;
  document.querySelector('.output').textContent = output;
}
