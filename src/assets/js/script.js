const show_menu = document.querySelector('.show_menu')
const menu = document.querySelector('.menu')
const slogan = document.querySelector('#slogan')

show_menu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    show_menu.src = menu.classList.contains('hidden') ? './src/assets/images/menu_white_36dp.svg' : './src/assets/images/close_white_36dp.svg'
})

let slogan_text = slogan.innerHTML;
let index = 0;
let escrevendo = true;

function animarTexto() {
    if (escrevendo) {
        slogan.innerHTML = slogan_text.substring(0, index);
        index++;

        if (index > slogan_text.length) {
            escrevendo = false;
            setTimeout(animarTexto, 1000); // pausa antes de apagar
            return;
        }
    } else {
        slogan.innerHTML = slogan_text.substring(0, index);
        index--;

        if (index < 0) {
            escrevendo = true;
            setTimeout(animarTexto, 1000); // pausa antes de recomeçar
            return;
        }
    }

    setTimeout(animarTexto, 100); // velocidade da animação
}

animarTexto();