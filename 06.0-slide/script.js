"use strict";

const loadImages = () => {
    const arrImg = [];
    for (let i = 1; i <= 5; i++) {

        arrImg.push(`./img/imagem (${i}).jpg`);
    }
    return arrImg;
}

const insertImages = (images) => {
    const htmlImg = images.map(img => `<img class="images" src="${img}">`).join(" ");

    const $container = document.getElementById('container');
    const $containerImages = document.createElement('div');
    const $next = document.getElementById('next');
    $containerImages.id = 'containerImages';
    $containerImages.innerHTML = htmlImg;
    $container.insertBefore($containerImages, $next);
}

// transicao de avancar as imagens 
const next = () => {
        const $img = document.querySelectorAll('.images');
        const max = ($img.length - 1) * (-50);
        let marginLeft = +($img[0].style.marginLeft.replace("vw", ""));

        if (marginLeft == max) {
            marginLeft = 50;
        }
        $img[0].style.marginLeft = (marginLeft - 50) + "vw";

    }
    // transicao para retroceder as imagens 
const prev = () => {
    const $img = document.querySelectorAll('.images');
    const min = 0;
    let marginLeft = +($img[0].style.marginLeft.replace("vw", ""));
    console.log(marginLeft, min);
    if (marginLeft == min) {
        marginLeft = -200;
    }
    $img[0].style.marginLeft = (marginLeft + 50) + "vw";
}
const automatico = () => {
    setInterval(next, 100);

}

//automatico();



insertImages(loadImages());
document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', prev);