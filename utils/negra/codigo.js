const version = "0.9";
const fecha = "23/04/2022";
const ciudades = ['Barcelona', "Burgos"]


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
  loadCiudades()
  document.getElementById("loading").style.display = "none";

}

function loadCiudades() {

  iIndex = 0
  var $select = $('#section-dropdown');
  for (i=0; i<ciudades.length; i++)
  {
    ciudad = ciudades[i];
    $select.append('<a class="elementoLista" onclick="dropdownChange(' + iIndex + ')">' + ciudad + '</a>');    
    iIndex = iIndex + 1;          
  }

}

function dropdownChange(iIndex) {

  //plegar y poner el valor
  $("#selector").click();

  //document.getElementById("labelExtraTitulo").innerText = arraySituacion[iIndexSituacio].situacio;
  //document.getElementById("labelExtra").innerText = "";
  //document.getElementById("divExtraInfo").style.display = "none";

  mostrar(iIndex);

}

function mostrar(iIndex) {

  document.getElementById("labelIntro").innerText = "Llistat de tarjetes de PMR donades de baixa per: "
  document.getElementById("labelAjuntament").innerText =  ciudades[iIndex].toUpperCase();
   
  
  
  // EN LA PRIMERA FILA ESTA LA FECHA!!!
  document.getElementById("myBody").innerHTML = ""


  ciudad = ciudades[iIndex];

  csvData = [];
  arrayNumeracion = [];
  $.ajax({
      type: "GET",
      url: ciudad + ".csv",
      dataType: "text",
      success: function(res) {

        var count = 0; // cache the running count
        csvArray = Papa.parse(res).data;

        //Obtenermos la fecha, si la tiene

        dataAct = csvArray[0][1]
        console.log(dataAct);
        if ((dataAct) && (dataAct != "")) {
          document.getElementById("labelActualitzat").innerHTML = "Actualitzat: <b>" + dataAct + "</b>"
        } else {
          document.getElementById("labelActualitzat").innerHTML = ""          
        }

        //console.log(csvArray)
        //TENEMOS UN ARRAY --> NECESITAMOS UN ARRAY DE OBJETOS!!
        for (i = 1; i < csvArray.length; i++) {
          csvData.push({});


          for (j = 0; j < 1; j++) {
            csvData[i - 1][csvArray[0][j]] = csvArray[i][j]
          }

        }

        for (var i = 0; i < csvData.length; i++) {
          arrayNumeracion.push(csvData[i][csvArray[0][0]])
        }
        
        var $select = $('#myTable>tbody');
        
        //$select.empty();
        iNum = 0;
        $.each(arrayNumeracion, function() {
            $select.append('<tr><td>' + arrayNumeracion[iNum] + '</td></tr>');     
            iNum = iNum + 1;
        });


      }

    });
}
