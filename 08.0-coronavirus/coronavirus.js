"use strict";

// banco de dados que será alimentado por uma API
let DB = [ {
    "uf": "Brazil",
    "suspeitos": "<div class='spinner blue'></div>",
    "confirmados": "<div class='spinner yellow'></div>",
    "mortes": "<div class='spinner red'></div>",
}];

const showData = ( data ) => {
    const panel = `
        <div class='estado'>
            ${data.uf}
        </div>
        <div class='suspeitos card'>
            <div class='numeros'> ${data.suspeitos} </div>
            <div class='titulos'> SUSPEITOS </div> 
        </div>

        <div class='confirmados card'>
            <div class='numeros'> ${data.confirmados} </div>
            <div class='titulos'> CONFIRMADOS </div>
        </div>
        <div class='mortes card'>
            <div class='numeros'> ${data.mortes} </div>
            <div class='titulos'> MORTES </div>
        </div>
    `;
    const $container = document.createElement ('div');
    $container.innerHTML = panel;
    
    
    const $info = document.getElementById ('info');
    // apaga o primeiro container $info 
    $info.removeChild($info.firstChild);
    // insere um novo container $info com as informaçoes
    $info.appendChild($container);
};

// cria um bd com as informações da api 
const getCoronaBrazil = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const getApi = await fetch ( url );
    const json = await getApi.json();
    const brazil = await {
        "uf": "Brazil",
        "suspeitos": json.data.cases,
        "confirmados": json.data.confirmed,
        "mortes": json.data.deaths,
    }
    showData ( brazil);
};

// async significa que é uma função assincrona
const getCoronaState = async () => {
    const url = 'http://covid19-brazil-api.now.sh/api/report/v1/';
    const getApi = await fetch ( url );
    const json = await getApi.json();
    DB = await json.data;
}

const findState = (evento) => {
    const ufMap = evento.target.parentNode.id;
    const getState = DB.find ( state => state.uf.match(ufMap));
    const state = {
        "uf": getState.uf,
        "suspeitos": getState.suspects,
        "confirmados": getState.cases,
        "mortes": getState.deaths,
    }
    showData (state );
}

document.querySelector ('svg').addEventListener('click', findState);
   


// executa todas as funções acima 
showData( DB [0] );
getCoronaState();
getCoronaBrazil ();


