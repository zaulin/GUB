const version = "0.9";
const fecha = "23/04/2022";

function clickBack() {
    window.open('../index.html', "_self")
}


function erase() {
  reset();
}

function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits;

  iHits = 0;

  inputCodi = document.getElementById("myInputCodi");
  inputLicencia = document.getElementById("inputCodiLicencia");
  filterCodi = normalice(inputCodi.value.toUpperCase());
  filterLicencia = normalice(inputLicencia.value.toUpperCase());

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      hit = 0;
      
      tdCodi = tr[i].getElementsByTagName("td")[0];
      tdLicencia = tr[i].getElementsByTagName("td")[2];

      if (tdCodi) {
        txtCodi = normalice(tdCodi.textContent || tdCodi.innerText);
        txtLicencia = normalice(tdLicencia.textContent || tdLicencia.innerText);

        if (filterCodi == '' & filterLicencia == '') {
          hit = 1
        } else {
          if (txtCodi.toUpperCase().indexOf(filterCodi) > 0) {
            hit = 1;
          }

          if (txtLicencia.toUpperCase().indexOf(filterLicencia) > 0) {
            hit = 1;
          }
        }

        if (hit==1) {
          tr[i].style.display = "";
          iHits = iHits + 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }

    if (iHits == 0) {
        myTable.style.display = "none";
        noHitLicencia.style.display = "";
    } else {
        myTable.style.display = "";
        noHitLicencia.style.display = "none";
    }
  
}

function buscarLicencia() {
    buscar();
    buscarProrroga();
}

function buscarProrroga() {
  var input, filter, table, tr, td, i, txtValue, iHits;

  iHits = 0;

  inputCodi = document.getElementById("inputCodiLicencia");
  filterCodi = normalice(inputCodi.value.toUpperCase());

  table = document.getElementById("myTableProrroga");
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

    if (iHits == 0) {
        myTableProrroga.style.display = "none";
        noHitProrroga.style.display = "";
    } else {
        myTableProrroga.style.display = "";
        noHitProrroga.style.display = "none";
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function reset(){
  document.getElementById("myInputCodi").value = "";
  document.getElementById("inputCodiLicencia").value = "";
  
  buscar();

  document.getElementById("myInputCodi").focus();
}

function esconde() {
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {

    for (j = 2; j < 5; j++) {
      td = tr[i].getElementsByTagName("td")[j];
      th = tr[i].getElementsByTagName("th")[j];
      if (td) {
            td.style.display = "none";
      }
      if (th) {
            th.style.display = "none";
      }  
    }
    
  }

  reset();
}


function off() {
  document.getElementById("overlay").style.display = "none";
}

function tableClick(el) {
 
}

function normalice(text){
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function pageonload() {
  //document.getElementById("fecha").innerText = "v." + version + " - " + fecha;
  //esconde();
  document.getElementById("loading").style.display = "none";
}
