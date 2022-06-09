const version = "0.9";
const fecha = "23/04/2022";

function clickBack() {
    window.open('../index.html', "_self")
}


function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits;

  iHits = 0;

  inputCodi = document.getElementById("myInputCodi");
  filterCodi = normalice(inputCodi.value.toUpperCase());

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      hit = 0;
      tdCodi = tr[i].getElementsByTagName("td")[0];
      tdCodi2 = tr[i].getElementsByTagName("td")[1];
      if (tdCodi) {
        txtCodi = normalice(tdCodi.textContent || tdCodi.innerText);
        if (txtCodi.toUpperCase().indexOf(filterCodi) > -1) {
          hit = 1;
        } else {
          txtCodi2 = normalice(tdCodi2.textContent || tdCodi2.innerText);
          if (txtCodi2.toUpperCase().indexOf(filterCodi) > -1) {
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
  
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function reset(){
  document.getElementById("myInputCodi").value = "";
  

  buscar();
}

function esconde() {
  
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {

    //COLOREA
    tdEstat = tr[i].getElementsByTagName("td")[2];

    if (tdEstat) {
      if (tdEstat.innerHTML != "ACTIU") {
        tr[i].style.backgroundColor = "#ffc9d6";
      }
    }

    for (j = 3; j < 10; j++) {
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
  var indice, table, tr, td;
  indice = $(el).closest('tr').index();

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  td = tr[indice + 1].getElementsByTagName("td")

  document.getElementById("popUpRegistre").innerHTML = "<strong>" + td[0].innerText + "</strong>"
  document.getElementById("popUpSerie").innerHTML = td[1].innerText;
  document.getElementById("popUpEstat").innerHTML = td[2].innerText;

  if (td[2].innerText == "ACTIU") {
    rowEstat.style.backgroundColor = "transparent";
  } else {
    rowEstat.style.backgroundColor = "#ffc9d6";
  }

  document.getElementById("popUpEmpCIF").innerText = td[3].innerText;
  document.getElementById("popUpEmpNombre").innerText = td[4].innerText;  
  document.getElementById("popUpEmpDireccion").innerText = td[5].innerText;  
  document.getElementById("popUpEmpPoblacion").innerText = td[6].innerText;  

  document.getElementById("popUpTipus").innerText = td[7].innerText;  
  document.getElementById("popUpMarca").innerText = td[8].innerText;  
  document.getElementById("popUpModel").innerText = td[9].innerText;  

  document.getElementById("overlay").style.display = "block";
}

function normalice(text){
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function pageonload() {
  document.getElementById("fecha").innerText = "v." + version + " - " + fecha;
  esconde();
  document.getElementById("loading").style.display = "none";
}
