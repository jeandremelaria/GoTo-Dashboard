// Start fucntion after content is loaded
window.addEventListener('load', function() {
    // Line chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myLineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Sales",
                backgroundColor: '#4F80E1',
                borderColor: '#3A5EA6',
                data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10682, 8432],
            }],

        },

        // Configuration options go here
        options: {}
    });

    // Doughnut chart
    var ctx1 = document.getElementById('myChart1').getContext('2d');

    // And for a doughnut chart
    var myDoughnutChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ["Visitors", "Online", "Exists"],
            datasets: [{
                label: "Points",
                backgroundColor: ['#18CDCA', '#FF8C00', '#16a085'],
                data: [2666, 2778, 4912],
            }],
        },
        // Configuration options go here
        options: {}
    });
})