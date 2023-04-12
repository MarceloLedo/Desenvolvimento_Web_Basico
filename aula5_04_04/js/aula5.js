function tabuada(){
    let numero = document.getElementById('numero').value;
    //document.getElementById ('resultab').innerHTML = `<p> ${numero} </p>`;
    
    let divisoria = document.getElementById ('resultab');
   for(let i=1; i<=10; i++){
        let result = numero*i;
        const node = document.createElement("p");
        const text =document.createTextNode( `${numero} x ${i} = ${result}`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }
}

function convetendo(){
    let numero = document.getElementById('numero2').value;
    let divisoria = document.getElementById ('resultab2');
    for(let i=1; i<=numero; i++){
        let node = document.createElement("h1");
        let text =document.createTextNode(i + " - TEXTO H1");
        node.appendChild(text);
        divisoria.appendChild(node);
}
}

let click =0;
function contaClique(){
click++;
document.getElementById("clique").innerHTML = click;
}


function sortear()
  {
    let sorteado = parseInt(Math.random()*5);
    document.getElementById("sorteio").innerHTML = `o valor sorteado é  ${sorteado}`;
  }

  function sortear2(){
    let e = parseInt (document.getElementById('e').value);
    let entre = parseInt (document.getElementById('entre').value);
    let sorteado2 = parseInt(Math.random()*(e - entre+1)+entre);
    document.getElementById("sorteio2").innerHTML = `o valor sorteado é  ${sorteado2}`;
  }

  