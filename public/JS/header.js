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
const horizontalItem = document.querySelector('.horizontal-item')
const horizontalItemId = document.getElementById('horizontal-item')
const iconoHeader = document.querySelector('.fa-chevron-down')
const submenu = document.querySelector('.submenu')
const submenuCuenta = document.getElementById('submenu-cuenta')
const submenuCuentaUser = document.getElementById('submenu-cuenta-usuario')

horizontalItem.addEventListener('mouseover', () => {
    submenu.style.overflow = 'visible'
    submenu.style.opacity = 1
    submenu.style.top = '40px'
})
horizontalItem.addEventListener('mouseout', () => {
    submenu.style.opacity = 0
})
horizontalItemId.addEventListener('mouseover', () => {
    submenuCuenta.style.overflow = 'visible'
    submenuCuenta.style.opacity = 1
    submenuCuenta.style.top = '40px'
})
horizontalItemId.addEventListener('mouseout', () => {
    submenuCuenta.style.opacity = 0
})
horizontalItemId.addEventListener('mouseover', () => {
    submenuCuentaUser.style.overflow = 'visible'
    submenuCuentaUser.style.opacity = 1
    submenuCuentaUser.style.top = '40px'
})
horizontalItemId.addEventListener('mouseout', () => {
    submenuCuentaUser.style.opacity = 0
})