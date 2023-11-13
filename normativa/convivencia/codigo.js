const version = "0.9";
const fecha = "08/05/2022";
const arraySituacion = [];
const arrayVehiculos = [];
const csvData = [];
const sTextFiltreIni = "Sel·lecciona una situació";

function clickBack() {
  window.open('../index.html', "_self")
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


function normalice(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function dropdownChange(iIndexSituacio) {

  //plegar y poner el valor
  $("#selector").click();

  document.getElementById("selector").innerText = arraySituacion[iIndexSituacio].filtre;
  document.getElementById("labelExtra").innerHTML = arraySituacion[iIndexSituacio].info;
  document.getElementById("divExtraInfo").style.display = "block";
}

function pageonload() {

  document.getElementById("labelExtra").innerText = "";
  document.getElementById("divExtraInfo").style.display = "none";

  document.getElementById("selector").innerText = sTextFiltreIni;
  loadSituaciones();
  
}

function loadSituaciones() {

  $.ajax({
    type: "GET",
    url: "actuacions.csv",
    dataType: "text",
    success: function(res) {

      var count = 0; // cache the running count
      csvArray = Papa.parse(res).data;

      //TENEMOS UN ARRAY --> NECESITAMOS UN ARRAY DE OBJETOS!!
      for (i = 1; i < csvArray.length; i++) {
        csvData.push({});

        for (j = 0; j < csvArray[0].length; j++) {
          csvData[i - 1][csvArray[0][j]] = csvArray[i][j]
        }

      }

      csvData.sort(function(a, b) {

        if (a.grup) {
          if (b.grup) {
            return a.filtre.localeCompare(b.filtre)
          }
        }
      });

      for (var i = 0; i < csvData.length; i++) {
        arraySituacion.push(csvData[i])
      }

      $(function() {
        var $select = $('#section-dropdown');
        iIndex = 0;
        $.each(arraySituacion, function() {
          $select.append('<a class="elementoLista" onclick="dropdownChange(' + iIndex + ')">' + this.filtre + '</a>');  
          iIndex = iIndex + 1;
        });

      });

      document.getElementById("loading").style.display = "none";
    }

  });


}
