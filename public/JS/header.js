// menu header responsive
const headerMenu = document.querySelector('.header-menu > a')
const menu = document.querySelector('.menu')
const menuItem = document.querySelector('.menu-item')

headerMenu.addEventListener('click', () => {
    menu.style.opacity = 1
    menu.style.overflow = 'visible'
    menu.style.transition = 'all 800ms'
})
menu.addEventListener('mouseout', () => {
    menu.style.opacity = 0
})

// menu header desktop
const horizontalItemId1 = document.getElementById('horizontal-item1')
const horizontalItemId2 = document.getElementById('horizontal-item2')

const submenu = document.getElementById('submenu-prod')
const submenuCuenta = document.getElementById('submenu-cuenta')
const submenuCuentaUser = document.getElementById('submenu-cuenta-usuario')

horizontalItemId1.addEventListener('mouseover', () => {
    submenu.style.overflow = 'visible'
    submenu.style.opacity = 1
    submenu.style.top = '40px'
})
horizontalItemId1.addEventListener('mouseout', () => {
    submenu.style.opacity = 0
})
horizontalItemId2.addEventListener('mouseover', () => {
    submenuCuenta.style.overflow = 'visible'
    submenuCuenta.style.opacity = 1
    submenuCuenta.style.top = '40px'
})
horizontalItemId2.addEventListener('mouseout', () => {
    submenuCuenta.style.opacity = 0
})