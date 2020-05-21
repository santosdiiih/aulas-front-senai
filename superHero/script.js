const personId = 15;
const getrawgio = async() => {
    const url = `https://www.superheroapi.com/api.php/688375641946535/${personId}`;
    const getApi = await fetch(url);
    const json = await getApi.json();


    const panel = `
    <div id="card"> 
        <div id="nome"> 
                ${json.name} 
        </div>
        <div id="aliancas"> 
            <img src="${json.image.url}" 
        </div>
    </div>
`;
    console.log(json.image.url);

    const $conteudo = document.querySelector('#conteudo');
    $conteudo.innerHTML = panel;

}
getrawgio();