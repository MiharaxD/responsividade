const btnMenu = document.getElementById('btnMenu')
const menu = document.getElementById('menu')
const main = document.querySelector('main')
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show')
})
main.addEventListener('click', () => {
    menu.classList.remove('show')
})
