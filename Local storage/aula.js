"use strick"

const $enviar = document.querySelector('#btnEnviar');
const $ulList = document.querySelector('#conteudo ul');

const $inputElement = document.querySelector('#inputText');


// array 
const lista = [
    '1',
    '2',
    '3'
];

// variavel que recebe a lista e exibe em tela 
const criaLista = () => {

    // limpa todo o conteudo do html  toda vez que a funcao for chamada
    $ulList.innerHTML = '';

    // percorre o array e retorna dentro da variavel todo 
    for (todo of lista) {

        // criando a li para exibir o conteudo 
        const listElement = document.createElement('li');

        // criando o texto que exibira em tela 
        const listText = document.createTextNode(todo);

        // cria o elemento a (elemento que recebe o link)
        const linkExcluir = document.createElement('a');

        // transforma o a em ul link a ser clicado 
        linkExcluir.setAttribute('href', '#');

        // cria o texto do link
        const textLink = document.createTextNode(' Excluir');

        linkExcluir.appendChild(textLink);

        // definindo o listElement com filho do listElement
        listElement.appendChild(listText);

        // define o elemento a como filho da li
        listElement.appendChild(linkExcluir);

        // definindo o li como filho do ul
        $ulList.appendChild(listElement);


    }

};

// recebe o valor que foi digitado pelo usuario
const recebeInput = () => {
    // recebe o conteudo da variavel que recebe o input 
    const element = $inputElement.value;

    // funcao do array para adicionar um novo item na lista 
    lista.push(element);

    // apaga o valor do input
    $inputElement.value = '';

    // chama a funcao que cria a lista 
    criaLista();
}


// evento que chama a funcao que recebe o input e cria a lista 
$enviar.addEventListener('click', recebeInput);





// evento que chama a funcao que exibe o array 
// $enviar.addEventListener('click', criaLista);