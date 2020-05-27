# Consumo da API SuperHero 
Ela deverá retornar a foto, o nome e as alianças dos super herois assim que a página for carregada. Ao clicar na lupa, é retornado informações dos herois compativeis com o nome que foi digitado na barra de pesquisa.

## Capacidades Atingidas 
- Consumo de API
- Layout dinamico
- Interação com o usuario
- Estudar e Fazer a Documentação da API

### Possiveis Problemas
- Erro ao visualizar a imagem 
- Não aparecer nenhum personagem na busca 
- Ao carregar a página não aparecer personagem 

### Soluções 
- Verifique se a imagem esta sendo  resgatada corretamente
- Verifique se o personagem existe na API e se o nome dele esta escrito corretamente
- verifique se a api esta 'fora do ar' caso ela esteja funcionando verifique a forma que a API esta sendo requisitada corretamente  

### Como resgatar dados 
- Fazer a requisição da API utilizamos  uma variavel que recebe:
    https://www.superheroapi.com/api.php/access-token/character-id
    - O access-token é disponibilizado no site oficial da API ao se logar no facebook 
    - O caracter-id é um id (numérico) do personagem 

- Resgatando o nome do personagem:
    - json.name 
    - o json é utilizado por que a API retorna dados em fomato json sendo assim todos os dados que forem requisitados teram essa formatação 

- Resgatando a imagem do personagem:
    - json.image.url
    - no caso da imagem é necessarío utilizar o .url para que a imagem seja exibida ja que o link da imagem esta dentro de uma url.
 
 
