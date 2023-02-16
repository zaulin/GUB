function clickNomenclator(){
    document.getElementById("loadingBlack").style.display = "block";
    document.getElementById("galetesDiv").style.display = "none";
    window.open("nomenclator/index.html","_self")
}

function clickActes(){
    document.getElementById("loadingBlack").style.display = "block";
    document.getElementById("galetesDiv").style.display = "none";
    window.open("actes/index.html","_self")
}

function clickTrixis(){
    document.getElementById("loadingBlack").style.display = "block";
    document.getElementById("galetesDiv").style.display = "none";
    window.open("trixis/index.html","_self")
}

function clickPermisos(){
    document.getElementById("loadingBlack").style.display = "block";
    document.getElementById("galetesDiv").style.display = "none";
    window.open("permisos/index.html","_self")
}

function clickVTC(){
    document.getElementById("loadingBlack").style.display = "block";
    document.getElementById("galetesDiv").style.display = "none";
    window.open("VTC/index.html","_self")
}

function clickNegra(){
    document.getElementById("loadingBlack").style.display = "block";
    document.getElementById("galetesDiv").style.display = "none";
    window.open("negra/index.html","_self")
}

function clickActuacions(){
    document.getElementById("loadingBlack").style.display = "block";
    document.getElementById("galetesDiv").style.display = "none";
    window.open("actuacions/index.html","_self")
}

function clickEnlaces(){
    document.getElementById("loadingBlack").style.display = "block";
    document.getElementById("galetesDiv").style.display = "none";
    window.open("enlaces/index.html","_self")
}

function pageonload() {
    document.getElementById("loadingBlack").style.display = "none";
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