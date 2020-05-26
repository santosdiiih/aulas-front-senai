const personId = 15;
const getrawgio = async(name, image, aliancas) => {

    const panel = document.createElement('div');

    panel.innerHTML += `
    <div class="card"> 
        <div class="nome"> 
                ${name} 
        </div>
        <div class="image"> 
            <img src="${image}" 
        </div>
        <div class="biografia"> 
            <p> Alianças com herois:  
                 ${aliancas};
                 
            </p>
        </div>
    </div>
`;
    // console.log(json.biography.aliases[0, 1, 2]);

    const $conteudo = document.querySelector('#conteudo');
    $conteudo.appendChild(panel);

}


const exibeDados = async() => {
    for (let i = 1; i < 33; i++) {
        const url = `https://www.superheroapi.com/api.php/688375641946535/${i}`;
        const getApi = await fetch(url);
        const json = await getApi.json();

        var name = await json.name;
        var image = await json.image.url;
        var aliancas = await json.biography.aliases;

        // console.log(name);
        // console.log(aliancas);

        getrawgio(name, image, aliancas);
    }



}
exibeDados();