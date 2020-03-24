"use stritc";

const campoCep = document.getElementById("cep");

const encontrarcep = ( cep ) => {
    
    const url =  `http://viacep.com.br/ws/${cep}/json/`;

        fetch ( url ).then( res => res.json()
                    .then( data => preencherFomulario ( data ) ));
                    
}

cep.addEventListener("blur", evento => encontrarcep(campoCep.value)) 
const preencherFomulario = ( endereco ) =>{
        document.getElementById( 'endereco' ).value = endereco.logradouro;
        document.getElementById( 'bairro' ).value = endereco.bairro;
        document.getElementById( 'cidade' ).value = endereco.localidade;
        document.getElementById( 'estado' ).value = endereco.uf;
        document.getElementById( 'cep' ).value = endereco.cep;
    
    }
