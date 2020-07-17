// export const msg = (texto) => alert(`oi ${texto}`);


const masks = {
    text: value => value.replace(/[^a-zA-Z À-ÿ]/g, ''),

    cellphone: value => value.replace(/[^0-9]/g, '')
        .replace(/(.{2})(.{5})(.{4})/, '($1) $2 - $3'),

    cep: value => value.replace(/[^0-9]/g, '')
        .replace(/(.{5})(.)/, '$1-$2'),

    numero: value => value.replace(/[^0-9]/g, '')

}

export const validator = (element) => {
    // console.log(element);
    element.addEventListener('input', (event) => {
        const $input = event.target;
        const typeMask = $input.dataset.type;

        if (masks.hasOwnProperty(typeMask)) {

            $input.value = masks[typeMask]($input.value);
        }

    });

}