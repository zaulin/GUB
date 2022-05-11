const version = "0.9";
const fecha = "08/05/2022";
const arraySituacion = [];

function clickBack() {
  window.open('../index.html', "_self")
}


function onkeyupInputCodi(){
  buscar();
}


function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits;
  var arrayActas;

  inputCodi = document.getElementById("myInputCodi");
  filterCodi = normalice(inputCodi.value.toUpperCase());

  table = document.getElementById("tableMain");
  tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      hit = 0;
      tdCodi = tr[i].getElementsByTagName("td")[0];
      if (tdCodi) {
        txtCodi = normalice(tdCodi.textContent || tdCodi.innerText);
        if (txtCodi.toUpperCase().indexOf(filterCodi) > -1) {
          hit = 1;
        }

        if (hit==1) {
          tr[i].style.display = "";
          iHits = iHits + 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  
}



function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function reset(){
  document.getElementById("myInputCodi").value = "";

  buscar();
}

function normalice(text){
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function tableClick(el) {
  //alert(arraySituacion[0].nombre);
}

function pageonload() {

  document.getElementById("fecha").innerText = "v." + version + " - " + fecha;

  document.getElementById("myInputCodi").value = "";

  buscar();
}

