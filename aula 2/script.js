
 
const $calcular = document.getElementById('botao');

function calcularMedia(){
    // recebendo informações do formulario do html
    const $nome = document.getElementById('nome');
    console.log($nome.value);

    const $nota1 = document.getElementById('nota1');
    const $nota2 = document.getElementById('nota2');
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');

    const media =  $media.value = (parseInt($nota1.value) + parseInt($nota2.value))/2;    

    if(media >= 7 ){
         $situacao.value = "Aprovado";
         $situacao.style.color = "green";
    }
    else{
        $situacao.value = "Reprovado";
        $situacao.style.color = "red";
    }
}

// escultando o click e calculando a média
$calcular.addEventListener('click', calcularMedia);