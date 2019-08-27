/*** ELECTION COUNTDOWN ***/
var demPrimary = new Date("Jun 30, 2020 00:00:01").getTime();
var generalElection = new Date("Nov 3, 2020 00:00:01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var t = demPrimary - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    document.getElementById("countdown-primary").innerHTML = days;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("countdown-primary").innerHTML = "0";
    }
}, 1000);
var y = setInterval(function() {
    var now = new Date().getTime();
    var t = generalElection - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    document.getElementById("countdown-general").innerHTML = days;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("countdown-general").innerHTML = "0";
    }
}, 1000);