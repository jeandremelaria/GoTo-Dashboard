// Event Listener
document.getElementById('menuToggle').addEventListener('click', openSideMenu);
document.getElementById('closeIcon').addEventListener('click', closeSideMenu);

//Variables
var w = window.innerWidth;
var sideMenu = document.getElementById('sideMenu');
var mainContent = document.getElementById('mainContent');

// Functions
function openSideMenu() {

    if (w > 575 && w < 768) {
        sideMenu.style.width = '14.5rem';
        mainContent.style.marginLeft = '14.5rem';

    } else if (w > 767 && w < 992) {
        sideMenu.style.width = '17rem';
        mainContent.style.marginLeft = '17rem';

    } else if (w > 991 && w < 1200) {
        sideMenu.style.width = '21.7rem';
        mainContent.style.marginLeft = '21.7rem';

    } else {
        sideMenu.style.width = '26rem';
        mainContent.style.marginLeft = '26rem';
    }
}

function closeSideMenu() {
    sideMenu.style.width = '0';
    mainContent.style.marginLeft = '0';
}