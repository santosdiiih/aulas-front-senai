"use strick"

document.getElementById("img");

function SemaforoVerde (){
    document.getElementById("img").src = "./img/verde.png";
    
}
function SemaforoVermelho(){
    document.getElementById("img").src = "./img/vermelho.png";
    
}
function SemaforoAmarelo(){
    document.getElementById("img").src = "./img/amarelo.png";
    
}
function Automatico(){
    idVerde = setInterval("SemaforoVerde()", 400);
    setTimeout ("limpar()",6000);
    idAmarelo = setInterval("SemaforoAmarelo()", 600);
    setTimeout ("limpar()",6000);
    idVermelho = setInterval("SemaforoVermelho()", 800);
    setTimeout ("limpar()",6000);

}

function limpar(){

    // const  idVerde = null;
    // const idAmarelo = null;
    // const idVerde = null;

    clearInterval(idVerde);
    clearInterval(idAmarelo);
    clearInterval(idVermelho);
}

document.getElementById('verde');
verde.addEventListener('click', SemaforoVerde);

document.getElementById('vermelho');
vermelho.addEventListener('click', SemaforoVermelho);

document.getElementById('amarelo');
amarelo.addEventListener('click', SemaforoAmarelo);

document.getElementById("automatico");
automatico.addEventListener('click', Automatico);


