document.addEventListener('DOMContentLoaded', function () {
    // Function to show an alert when clicking "Start Now" for the Basic plan
    document.getElementById('startNowButton').addEventListener('click', function () {
        alert('Starting Basic plan now!');
    });

    // Function to show an alert when clicking "Try it" for the Pro plan
    document.getElementById('tryItButton').addEventListener('click', function () {
        alert('Trying Pro plan!');
    });
});
