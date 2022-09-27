function clickBack() {
  window.open('../index.html', "_self")
}

function clickTransit(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("transit/index.html","_self")
}

function clickPatrimoni(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("patrimoni/index.html","_self")
}

function pageonload() {
    document.getElementById("loadingBlack").style.display = "none";
    
}
