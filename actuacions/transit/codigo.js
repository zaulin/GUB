function clickBack() {
  window.open('../index.html', "_self")
}

function clickCotxeMoto(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("cotxeMoto/index.html","_self")
}

function clickVmp(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("vmp/index.html","_self")
}

function clickVTC(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("VTC/index.html","_self")
}

function clickPNC(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("PNC/index.html","_self")
}

function clickEstrangers(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("permisos/index.html","_self")
}

function clickTransports(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("transports/index.html","_self")
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