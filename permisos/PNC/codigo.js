const version = "0.9";
const fecha = "08/05/2022";

function clickBack() {

  var primera = document.getElementById("dctree-first")
  var estiloDisplay = window.getComputedStyle(primera).display;
    
  if (estiloDisplay === "none") {
      var botonBack = document.getElementById("jsonBack")
      
      botonBack.click();
    } else {
      window.open('../index.html', "_self")
    }
  
}


function pageonload() {

  //document.getElementById("fecha").innerText = "v." + version + " - " + fecha;

}

