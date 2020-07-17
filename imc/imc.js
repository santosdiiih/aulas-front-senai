"use stric";

const calcularImc = (peso, altura) => peso / (altura ** 2); 

const definirEstado = ( imc ) => {
	let msg;
	if (imc <= 18.5){
		 msg = 'voce está abaixo do peso. Atenção!';
	}
	
	else if( imc <= 24.9){
		msg = 'peso ideal. Parabéns +_+ ';
	}
	else if ( imc <= 29.9){
		msg = 'levemente acima do peso. Cuidado ª-ª';
	}
	else if ( imc <= 36.9 ){
		msg = 'obesidade grau I.';
	}
	else if ( imc <= 39.9){
		msg = 'obesidade grau II. Atenção';
	}
	else {
		msg = 'obesidade grau III. Atenção tu vai morrer *_*';
	}
	return msg;
}

const exibirResultado = () => {
	const nome = document.getElementById('nome').value;
	const peso = document.getElementById('peso').value;
	const altura = document.getElementById('altura').value;
	const $resultado = document.getElementById('resultado');	
	const imc = calcularImc(peso, altura);
	const estado = definirEstado(imc);
	
	
	$resultado.innerHTML = `${nome} seu IMC foi de ${imc} você está ${estado}`;
}



// chama  e adiciona evento ao botão
document.getElementById('calcular')
	.addEventListener ('click', exibirResultado);