function clickBack() {
  window.open('../index.html', "_self")
}

function clickActes(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("actes/index.html","_self")
}

function clickNegra(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("negra/index.html","_self")
}

function clickEnlaces(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("enlaces/index.html","_self")
}

function pageonload() {
    document.getElementById("loadingBlack").style.display = "none";
    
}
