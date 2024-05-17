function clickNomenclator(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    document.getElementById("galetesDiv").style.display = "none";
    window.open("nomenclator/index.html","_self")
}

function clickTrixis(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    document.getElementById("galetesDiv").style.display = "none";
    window.open("trixis/index.html","_self")
}

function clickUtils(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    document.getElementById("galetesDiv").style.display = "none";
    window.open("utils/index.html","_self")
}


function clickActuacions(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    document.getElementById("galetesDiv").style.display = "none";
    window.open("actuacions/index.html","_self")
}

function clickNormativa(){
    if (getMobileOperatingSystem() != "Android") {
        document.getElementById("loadingBlack").style.display = "block";
    }
    document.getElementById("galetesDiv").style.display = "none";
    window.open("normativa/index.html","_self")
}



function pageonload() {
    document.getElementById("galetesDiv").style.display = "block";
    

    acceptCookies = getCookie("acceptCookies");
    if (acceptCookies=="") {
      document.getElementById("overlay").style.display = "block";
    }
    if (acceptCookies=="0") {
      document.getElementById("overlay").style.display = "block";
    }
}

function acceptCookiesClick(){
    setCookie("acceptCookies", "1", 3600)
    document.getElementById("overlay").style.display = "none";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
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