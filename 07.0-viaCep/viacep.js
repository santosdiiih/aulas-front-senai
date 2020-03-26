"use stritc";

const campoCep = document.getElementById("cep");

const encontrarcep = ( cep ) => {
    if(document.getElementById("cep").value != ""){
        const url =  `http://viacep.com.br/ws/${cep}/json/`;

        fetch ( url ).then( res => res.json()
                    .then( data => {
                        if (!("erro" in data) ) {
                            preencherFomulario ( data );
                        }
                        
                        
                        else {
                            alert(" CEP Invalido ");
                            limparFormulario ();
                        }
                    } ));
                    document.getElementById ( 'endereco' ).value = 'pesquisando cep...';
    }
    else{
        alert (" Digite um CEP");
    }            
}
cep.addEventListener("blur", evento => encontrarcep(campoCep.value)) 
const preencherFomulario = ( endereco ) =>{
        document.getElementById( 'endereco' ).value = endereco.logradouro;
        document.getElementById( 'bairro' ).value = endereco.bairro;
        document.getElementById( 'cidade' ).value = endereco.localidade;
        document.getElementById( 'estado' ).value = endereco.uf;
        document.getElementById( 'cep' ).value = endereco.cep;
    }
const limparFormulario = (endereco ) => {
    document.getElementById('endereco').value = "";
    document.getElementById( 'bairro').value = "";
    document.getElementById( 'cidade' ).value = "";
    document.getElementById( 'estado' ).value = "";
    document.getElementById( 'cep' ).value = "";
}
