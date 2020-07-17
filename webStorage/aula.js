"use strick"

const $enviar = document.querySelector('#btnEnviar');
const $ulList = document.querySelector('#conteudo ul');

const $inputElement = document.querySelector('#inputText');


// array 
const lista = JSON.parse(localStorage.getItem('list_todos')) || [];

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

        // cria a varial pos e pesquisa no todo o indice do elemento
        var pos = lista.indexOf(todo);

        // chama a funcao que deleta o todo com o click
        linkExcluir.setAttribute('onclick', 'deletTodo(' + pos + ')');

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
    // funcao que grava no localstorage
    saveStorage();
}

// funcao que deleta o conteudo da lista 
const deletTodo = (pos) => {
    lista.splice(pos, 1);
    criaLista();
    saveStorage();
}

// funcao que salva os dados no localstorage
const saveStorage = () => {
    // transforma o array em uma string e manda para o localStorage
    localStorage.setItem('list_todos', JSON.stringify(lista));
}


// evento que chama a funcao que recebe o input e cria a lista 
$enviar.addEventListener('click', recebeInput);





// evento que chama a funcao que exibe o array 
// $enviar.addEventListener('click', criaLista);