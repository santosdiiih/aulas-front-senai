"use strict";

//Banco de dados que será alimentado pela API
let BD = [{
    "uf": "brazil",
    "suspeitos": "<div class='spinner blue'></div>",
    "confirmados": "<div class='spinner yellow'></div>",
    "mortes": "<div class='spinner red'></div>",
}];

const showData = (data) => {
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
    const $container = document.createElement('div');
    //define que essa div tem o id cls
    $container.setAttribute('id','cls');
    $container.innerHTML = panel;

    const $info = document.getElementById('info');
    // apaga o primeiro container $info
    const $toClear = document.getElementById('cls');
    $info.removeChild($toClear);
    // insere um novo container $info com as informaçoes
    $info.appendChild($container);
};
// criando o BD com as informacoes da API
const getCoronaMundo = async () => {
    const url = 'https://covid19.mathdro.id/api/recovered';
    const getApi = await fetch(url);
    const json = await getApi.json();
    const brazil = await {
        "uf": "Brazil",
        "suspeitos": json.data.cases,
        "confirmados": json.data.confirmed,
        "mortes": json.data.deaths,
    }
    showData(brazil);
}

const getCoronaState = async () => {
    //const url = 'http://covid19-brazil-api.now.sh/api/report/v1/';
    // const url = 'https://covid19.mathdro.id/api/recovered';

    // const getApi = await fetch(url);
    // const json = await getApi.json();
    // BD = await json;


    fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "f6a1ce496cmsh6d35f8d75aa2370p1f65d3jsn8c273c255458"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            BD = data.response;
        })
        .catch(err => {
            console.log(err, 'erro');
        });

    // console.log(BD,'raios de db');
}

const findState = (evento) => {
    const ufMap = evento.target.className.baseVal;
    const getState = BD.filter((index) => {
        console.log(index);
        return index['country'].match(ufMap);
    });

    console.log(ufMap,'fix name fucking i hate svg')
    console.log(getState,'log cyntia')

    const state = {
        "uf": getState[0].country,
        "suspeitos": getState[0].cases.active,
        "confirmados": getState[0].cases.critical,
        "mortes": getState[0].deaths.total,
    }
    showData(state);
}

document.querySelector('svg').addEventListener('click', findState);

showData(BD[0]);
getCoronaState();
//getCoronaMundo();