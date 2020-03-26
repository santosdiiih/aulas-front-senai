"use stritc";

const campoCep = document.getElementById("cep");
const verificaCep = ( cep ) => document.getElementById ( 'cep' ).reportValidity;

const encontrarcep = ( cep ) => {
            if ( verificaCep (cep)){
                try {
                    if (document.getElementById("cep").value == "") throw "Digite um Cep ";
                    
                    const url =  `https://api.postmon.com.br/v1/cep/${cep}`;

                    fetch ( url ).then( res => res.json()
                            .then( data => preencherFomulario ( data ) ))
                            .catch( erro => console.log( erro ));
                    document.getElementById ( 'endereco' ).value = 'pesquisando cep...' 
                }
                catch (erroCep){

                    alert (erroCep);
                }
            }
        
        
    
                    
}

cep.addEventListener("blur", evento => encontrarcep(campoCep.value)) 
const preencherFomulario = ( endereco ) => {
        document.getElementById( 'endereco' ).value = endereco.logradouro;
        document.getElementById( 'bairro' ).value = endereco.bairro;
        document.getElementById( 'cidade' ).value = endereco.cidade;
        document.getElementById( 'estado' ).value = endereco.estado;
        document.getElementById( 'cep' ).value = endereco.cep;
    
}
const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = "";
    document.getElementById( 'bairro').value = "";
    document.getElementById( 'cidade' ).value = "";
    document.getElementById( 'estado' ).value = "";
    document.getElementById( 'cep' ).value = "";
}

 