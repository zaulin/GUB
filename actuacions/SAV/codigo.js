function clickBack() {
  window.open('../index.html', "_self")
}

function clickVige(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("vige/index.html","_self")
}

function clickVido(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    window.open("vido/index.html","_self")
}

function pageonload() {
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    
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