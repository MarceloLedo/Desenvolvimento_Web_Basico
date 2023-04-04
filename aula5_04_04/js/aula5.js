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