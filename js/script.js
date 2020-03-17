$(document).ready(function () {
    // time counter
    $(function () {
        loopcounter('myCountdown');
    });
    // number counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});