function clickBack() {
  window.open('../index.html', "_self")
}

function clickAMB(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("AMB/index.html","_self")
}

function clickUDIG(){
    document.getElementById("loadingBlack").style.display = "block";
    window.open("UDIG/index.html","_self")
}


function pageonload() {
    //document.getElementById("loadingBlack").style.display = "none";
}

function test() {
    document.getElementById("loadingBlack").style.display = "none";
    //alert("TEST");
}
