// Event Listener
document.getElementById('menuToggle').addEventListener('click', openSideMenu);
document.getElementById('closeIcon').addEventListener('click', closeSideMenu);

// Functions
function openSideMenu() {
    var w = window.innerWidth;
    var sideMenu = document.getElementById('sideMenu');

    if (w > 575 && w < 768) {
        sideMenu.style.width = '14.5rem';

    } else if (w > 767 && w < 992) {
        sideMenu.style.width = '17rem';

    } else if (w > 991 && w < 1200) {
        sideMenu.style.width = '21.7rem';

    } else {
        sideMenu.style.width = '26rem';
    }
}

function closeSideMenu() {
    document.getElementById('sideMenu').style.width = '0';
}