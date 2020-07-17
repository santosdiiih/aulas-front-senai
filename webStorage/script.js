const $button = document.querySelector('#btnEnviar');
const $input = document.querySelector('#inputText');
const $ul = document.querySelector('#conteudo ul');

// funcao que cria a lista na variavel array 
const list = [
    '1',
    '2',
    '3'
];


// funcao que percorre o array 
const listArray = () => {

    // limpa a lista da tela para que seja criada uma nova lista
    $ul.innerHTML = '';

    // laco que percorre o array 
    for (todo of list) {
        // cria a li em tela 
        const elementLi = document.createElement('li');

        // variavel que recebe o conteudo que exibira em tela
        const element = document.createTextNode(todo);

        // variavel que torna o texto filho da li
        elementLi.appendChild(element);

        // torna a li filha da ul
        $ul.appendChild(elementLi);

    }
}

// funcao que recebe o texto que foi digitado
const recebeInput = () => {
    // recebe a variavel que contem o text do input 
    const inputText = $input.value;

    // adiciona o valor do input no array 
    list.push(inputText);

    // linpa o input na tela 
    $input.value = '';

    // chama o array que cria a lista 
    listArray();

}

// funcao que aciona a funcao com o click do botao 
$button.addEventListener('click', recebeInput);