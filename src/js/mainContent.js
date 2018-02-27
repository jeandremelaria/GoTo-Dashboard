// Events Listener
document.getElementById('sideMenuDashboard').addEventListener('click', getDashboard);
document.getElementById('sideMenuProfile').addEventListener('click', getProfile);
document.getElementById('sideMenuCalender').addEventListener('click', getCalendar);

//  Variables
var dashboard = document.getElementById('dashboard');
var profile = document.getElementById('profile');
var calendar = document.getElementById('calendar');

function getDashboard() {
    profile.style.display = 'none';
    calendar.style.display = 'none';
    dashboard.style.display = 'block';
}

function getProfile() {
    dashboard.style.display = 'none';
    calendar.style.display = 'none';
    profile.style.display = 'block';
}

function getCalendar() {
    dashboard.style.display = 'none';
    profile.style.display = 'none';
    calendar.style.display = 'block';
}