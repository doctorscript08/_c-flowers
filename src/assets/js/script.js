const show_menu = document.querySelector('.show-menu')
const menu = document.querySelector('.mobile-menu')

show_menu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    show_menu.src = menu.classList.contains('hidden') ? 'src/assets/images/menu-images/menu_white_36dp.svg' : 'src/assets/images/menu-images/close_white_36dp.svg'
})