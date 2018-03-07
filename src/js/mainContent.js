// Start fucntion after content is loaded
window.addEventListener('load', function() {
    // Main content

    // Events Listener
    document.getElementById('sideMenuDashboard').addEventListener('click', getDashboard);
    document.getElementById('sideMenuProfile').addEventListener('click', getProfile);
    document.getElementById('sideMenuCalender').addEventListener('click', getCalendar);

    // document.getElementById('sideMenuMail--inbox').addEventListener('click', getMailInbox);
    // document.getElementById('sideMenuMail--read').addEventListener('click', getMailRead);
    // document.getElementById('sideMenuMail--compose').addEventListener('click', getMailCompose);

    //  Variables
    var dashboard = document.getElementById('dashboard');
    var profile = document.getElementById('profile');
    var calendar = document.getElementById('calendar');

    var mailInbox = document.getElementById('mailInbox');
    var mailRead = document.getElementById('mailRead');
    var mailCompose = document.getElementById('mailCompose');

    function getDashboard() {
        profile.style.display = 'none';
        calendar.style.display = 'none';
        mailInbox.style.display = 'none';
        mailRead.style.display = 'none';
        mailCompose.style.display = 'none';
        dashboard.style.display = 'block';
    }

    function getProfile() {
        dashboard.style.display = 'none';
        calendar.style.display = 'none';
        mailInbox.style.display = 'none';
        mailRead.style.display = 'none';
        mailCompose.style.display = 'none';
        profile.style.display = 'block';
    }

    function getCalendar() {
        dashboard.style.display = 'none';
        profile.style.display = 'none';
        mailInbox.style.display = 'none';
        mailRead.style.display = 'none';
        mailCompose.style.display = 'none';
        calendar.style.display = 'block';

    }

    function getMailInbox() {
        dashboard.style.display = 'none';
        profile.style.display = 'none';
        calendar.style.display = 'none';
        mailRead.style.display = 'none';
        mailCompose.style.display = 'none';
        mailInbox.style.display = 'block';
    }

    function getMailRead() {
        dashboard.style.display = 'none';
        profile.style.display = 'none';
        calendar.style.display = 'none';
        mailInbox.style.display = 'none';
        mailCompose.style.display = 'none';
        mailRead.style.display = 'block';
    }

    function getMailCompose() {
        dashboard.style.display = 'none';
        profile.style.display = 'none';
        calendar.style.display = 'none';
        mailInbox.style.display = 'none';
        mailRead.style.display = 'none';
        mailCompose.style.display = 'block';
    }

})