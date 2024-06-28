function clickBack() {
  window.open('../index.html', "_self")
}

function clickOrdenances(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("ordenances/index.html","_self")
}

function clickCirculacio(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("circulacio/index.html","_self")
}

function clickConvivencia(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("convivencia/index.html","_self")
}


function clickVTC(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("VTC/index.html","_self")
}

function clickPlatges(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("platges/index.html","_self")
}

function clickIngres(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("ingres/index.html","_self")
}

function pageonload() {
    //document.getElementById("loadingBlack").style.display = "none";
    
}


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}