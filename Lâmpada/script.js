"use strick"



document.getElementById('interruptor');

const $interruptor = document.getElementById('interruptor'); 

document.getElementById("lampada").onmouseenter = MouseEnter;
document.getElementById("lampada").onmouseout = MouseOff;

function MouseEnter(){
    document.getElementById("lampada").src = "./img/ligada.jpg";
}
function MouseOff(){
    document.getElementById("lampada").src = "./img/desligada.jpg";
}

function Interruptor (){
    if (click == "pisca"){
        lampadaLigada();
    }
    else {
        
        lampadaDesligada();
        
    }
}

function lampadaLigada (){
    click = "parado";
    
    const idlampadaLigada = setInterval(MouseEnter, 500);
    const idlampadaDesligada = setInterval(MouseOff, 600);
}
function lampadaDesligada (){
    click = "pisca";
    clearInterval(idlampadaLigada);
    clearInterval(idlampadaDesligada)
}

document.getElementById('interruptor');
interruptor.addEventListener('click', lampadaDesligada);
document.getElementById("lampada").addEventListener('click', lampadaLigada);









// function trocaImagem (){
//     var imagem = document.getElementById('lampada');

//     if(imagem.src.math("desligada")) {
//         imagem.src = "./img/desligada.jpg";
//     }
//     else{
//         imagem.src = "./img/ligada.jpg";
//     }
// }


// function mouseEnter () {
//     img;
//     onmouseenter = "bigImg(this)";
//     src = "ligada.jpg";
//     alt = "Ligada";
// }
// function mouseOff (){
//     img;
//     onmouseleave = "bigImg(this)";
//     src = "desligada.jpg";
//     alt = "desligada";
// }

// document.getElementById('interruptor')
//     .addEventListener('onmouseenter', $interruptor );
// document.getElementById("lampada").addEventListener("mouseenter",MouseEnter);