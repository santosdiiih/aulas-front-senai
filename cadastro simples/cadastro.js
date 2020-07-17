"use strict";

const $novo = document.getElementById("novo");
const $fechar = document.getElementById("fechar");
const $salvar = document.getElementById("salvar");
const $campos = document.querySelectorAll(".form > input");
const $input = document.querySelectorAll("input").value;

const exibirModal = () =>
    document.querySelector(".container-modal").classList.add("exibirModal");

const fecharModal = () =>
    document.querySelector(".container-modal").classList.remove("exibirModal");

const salvarAluno = () => {
    function createAluno(aluno) {
        const url =
            "http://localhost/Diiih/Js/crud/apiphp-master/apiphp-master/alunos/";

        const options = {
            method: "POST",
            body: JSON.stringify(aluno),
        };

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    }
    const aluno = {
        id: "",
        nome: "Cleyde Gomes da Silva",
        email: "cleydegomes@gmail.com",
        celular: "1199988888",
        logradouro: "rua sem fim",
        bairro: "Sem nome",
        cidade: "Barueri",
        estado: "SP",
        cep: "18135300",
    };
    //console.log(aluno);

    createAluno(aluno);
    fecharModal();
};

import { validator } from "./masks.js";

// $campos.forEach(campo => {
//     const tipoValidacao = campo.dataset.type;
//     campo.addEventListener('input', (e) => {
//         e.target.value = masks[tipoValidacao](e.target.value)
//     });

// });

validator(document.getElementById("form"));

const emailValidator = (element) => {
    element.addEventListener("blur", () => () => {
        if (!element.value.match(/[.*@.*\..*]/)) {
            alert("verifique o email");
        }
    });
};

emailValidator(document.getElementById("email"));

const dataLoad = (data) => {
    const $registros = document.getElementById("registros");

    data.forEach((element) => {
        const $tr = document.createElement("tr");

        $tr.innerHTML = `
        <td> ${element.codigo} </td>
        <td> ${element.aluno} </td>
        <td> ${element.email} </td>
        <td> ${element.celular} </td>
        <td> ${element.cidade} </td> 
        <td> 
            <button id=editar-${element.codigo}> editar </button>
        </td>
        <td> 
            <button id=excluir-${element.codigo}> Excluir </button>
        </td>       
         `;

        $registros.appendChild($tr);
    });
};

const getAlunos = async url => {

    const alunos = await fetch(url);
    const dados = await alunos.json();
    return dados.data
};

const showAluno = async() => {
    const alunos = await getAlunos("http://localhost/Diiih/js/crud/apiphp/alunos/");
    const formataAluno = alunos.map(({ id: codigo, nome: aluno, email, celular, cidade }) =>
        ({ codigo, aluno, email, celular, cidade }));

    dataLoad(formataAluno);
};

showAluno();

$fechar.addEventListener("click", fecharModal);
$salvar.addEventListener("click", salvarAluno);
$novo.addEventListener("click", exibirModal);