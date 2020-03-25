"use stritc";

const campoCep = document.getElementById("cep");

const encontrarcep = ( cep ) => {
    
    const url =  `https://api.postmon.com.br/v1/cep/${cep}`;
    

        fetch ( url ).then( res => res.json()
                    .then( data => preencherFomulario ( data ) ));
                    
}

cep.addEventListener("blur", evento => encontrarcep(campoCep.value)) 
const preencherFomulario = ( endereco ) =>{
        document.getElementById( 'endereco' ).value = endereco.logradouro;
        document.getElementById( 'bairro' ).value = endereco.bairro;
        document.getElementById( 'cidade' ).value = endereco.cidade;
        document.getElementById( 'estado' ).value = endereco.estado;
        document.getElementById( 'cep' ).value = endereco.cep;
    
    }
