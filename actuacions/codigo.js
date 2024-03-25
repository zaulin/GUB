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

function clickPersones(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("persones/index.html","_self")
}

function clickSC(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("sc/index.html","_self")
}

function clickAgents(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("agents/index.html","_self")
}

function clickSAV(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("SAV/index.html","_self")
}

function pageonload() {
    document.getElementById("loadingBlack").style.display = "none";
    
}
