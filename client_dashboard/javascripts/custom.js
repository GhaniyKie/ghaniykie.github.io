/* Open the sidenav */
function openNav() {
    document.getElementById("dash-sidenav").style.width = "25%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("dash-sidenav").style.width = "0";
}

// OPEN AND CLOSE ELEMENT
function openCloseElement(elementId) {
    const id = document.getElementById(elementId);
    id.style.display = id.style.display === "none" ? "block" : "none";
}

function notification() {
    document.getElementById("notification").style.display = "none"
}

// QRCODE EXPIRE TIME [RUBAH KODENYA SESUAI KEBUTUHAN(BELOM BENER)]
if (sessionStorage.getItem("counter")) {
    if (sessionStorage.getItem("counter") >= 10) {
      var value = 0;
    } else {
      var value = sessionStorage.getItem("counter");
    }
} else {
    var value = 0;
}

document.getElementById('timer').innerHTML = value;

var counter = function () {
    if (value >= 10) {
        sessionStorage.setItem("counter", 0);
        value = 0;
    } else {
        value = parseInt(value) + 1;
        sessionStorage.setItem("counter", value);
    }
    document.getElementById('timer').innerHTML = value;
};

var interval = setInterval(counter, 1000);

