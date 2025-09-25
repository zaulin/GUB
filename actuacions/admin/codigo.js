const version = "0.9";
const fecha = "08/05/2022";
const arraySituacion = [];
const csvData = [];
const arrayCabeceras = [];
const sTextFiltreIni = "Sel·lecciona un tipus d'establiment";

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

  document.getElementById("labelExtraTitulo").innerText = arraySituacion[iIndexSituacio].filtre;
  document.getElementById("labelExtra").innerHTML = arraySituacion[iIndexSituacio].info;
  document.getElementById("divExtraInfo").style.display = "block";

  botones = ""
  for (j = 0; j < arrayCabeceras.length; j++) {
    //Si esta en blanco no ponemos el boton

    if (arraySituacion[iIndexSituacio][arrayCabeceras[j]] != '') {
      botones += '<button onclick="clickExtra(' + j + ', ' + iIndexSituacio + ')" class="tableBoton">'
      botones += arrayCabeceras[j]
      botones += '</button>'
    }
  }

  document.getElementById("botonesExtra").innerHTML = botones;

}
function clickExtra(i, iIndexSituacio) {
  document.getElementById("labelExtraTitulo2").innerText = arrayCabeceras[i];
  document.getElementById("labelExtra2").innerHTML = arraySituacion[iIndexSituacio][arrayCabeceras[i]];
  document.getElementById("divExtraInfo2").style.display = "block";
}

function pageonload() {

  document.getElementById("labelExtra").innerText = "";
  document.getElementById("divExtraInfo").style.display = "none";
  document.getElementById("divExtraInfo2").style.display = "none";

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
      //FILA 0 CABECERAS
      for (iCol = 2; iCol < csvArray[0].length; iCol++) {
        arrayCabeceras[iCol-2] = csvArray[0][iCol]
      }
      
      for (iFila = 1; iFila < csvArray.length; iFila++) {
        csvData.push({});

        for (j = 0; j < csvArray[0].length; j++) {
          csvData[iFila-1][csvArray[0][j]] = csvArray[iFila][j]
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
        arraySituacion.push(csvData[i]);
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
