const version = "0.9";
const fecha = "08/05/2022";
const arraySituacion = [];
const csvData = [];

function clickBack() {
  window.open('../index.html', "_self")
}

function keyupInput1() {
  document.getElementById("myInputCodi").value = "";
  document.getElementById("dropdownSituacion").value = "";
  document.getElementById("labelExtra").innerText = "";
  document.getElementById("divTaulaPerjudicat").style.display = "none";
  document.getElementById("divTaulaAutor").style.display = "none";
  document.getElementById("textResta").style.display = "none";
  document.getElementById("divTaulaResta").style.display = "block";
  buscar();
}

function keyupInput2() {
  document.getElementById("myInputCodi").value = "";
  document.getElementById("dropdownSituacion").value = "";
  document.getElementById("labelExtra").innerText = "";
  document.getElementById("divTaulaPerjudicat").style.display = "none";
  document.getElementById("divTaulaAutor").style.display = "none";
  document.getElementById("textResta").style.display = "none";
  document.getElementById("divTaulaResta").style.display = "block";
  buscar();
}

function keyupInputCodi() {
  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("dropdownSituacion").value = "";
  document.getElementById("labelExtra").innerText = "";
  document.getElementById("divTaulaPerjudicat").style.display = "none";
  document.getElementById("divTaulaAutor").style.display = "none";
  document.getElementById("textResta").style.display = "none";
  document.getElementById("divTaulaResta").style.display = "block";
  buscar();
}

function filterSituacio() {
  var iHits, iHitsAutor, iHitsPerjudicat, iHitsResta;
  iHits = 0;
  iHitsAutor = 0;
  iHitsPerjudicat = 0;
  iHitsResta = 0;

  inputSituacio = document.getElementById("dropdownSituacion");
  txtFilterSituacio = inputSituacio.value;

  tableResta = document.getElementById("tableResta");
  trResta = tableResta.getElementsByTagName("tr");

  tablePerjudicat = document.getElementById("tablePerjudicat");
  trPerjudicat = tablePerjudicat.getElementsByTagName("tr");

  tableAutor = document.getElementById("tableAutor");
  trAutor = tableAutor.getElementsByTagName("tr");

  for (var j = 0; j < arraySituacion.length; j++) {

    if (arraySituacion[j].situacio == txtFilterSituacio) {

      if (arraySituacion[j]["actes autor"]) {
        arrayActasAutor = arraySituacion[j]["actes autor"].split(',');
      } else {
        arrayActasAutor = [];
      }

      if (arraySituacion[j]["actes perjudicat"]) {
        arrayActasPerjudicat = arraySituacion[j]["actes perjudicat"].split(',');
      } else {
        arrayActasPerjudicat = [];
      }

      if (arraySituacion[j]["actes resta"]) {
        arrayActasResta = arraySituacion[j]["actes resta"].split(',');
      } else {
        arrayActasResta = [];
      }


      for (var i = 0; i < trResta.length; i++) {
        hit = 0;
        tdCodi = trResta[i].getElementsByTagName("td")[0];

        if (tdCodi) {
          txtCodi = normalice(tdCodi.textContent || tdCodi.innerText)

          if (arrayActasAutor.includes(txtCodi) || arrayActasAutor.includes(txtCodi.substring(0, txtCodi.length - 2))) {
            trAutor[i].style.display = "";
            iHitsAutor = iHitsAutor + 1;
          } else {
            trAutor[i].style.display = "none";
          }

          if (arrayActasPerjudicat.includes(txtCodi) || arrayActasPerjudicat.includes(txtCodi.substring(0, txtCodi.length - 2))) {
            trPerjudicat[i].style.display = "";
            iHitsPerjudicat = iHitsPerjudicat + 1;
          } else {
            trPerjudicat[i].style.display = "none";
          }

          if (arrayActasResta.includes(txtCodi) || arrayActasResta.includes(txtCodi.substring(0, txtCodi.length - 2))) {
            trResta[i].style.display = "";
            iHitsResta = iHitsResta + 1;
          } else {
            trResta[i].style.display = "none";
          }
        }
      }

    }
  }

  if (iHitsResta > 0) {
    document.getElementById("textResta").style.display = "block";
    document.getElementById("divTaulaResta").style.display = "block";
  } else {
    document.getElementById("divTaulaResta").style.display = "none";
  }

  if (iHitsPerjudicat > 0) {
    document.getElementById("divTaulaPerjudicat").style.display = "block";
  } else {
    document.getElementById("divTaulaPerjudicat").style.display = "none";
  }

  if (iHitsAutor > 0) {
    document.getElementById("divTaulaAutor").style.display = "block";
  } else {
    document.getElementById("divTaulaAutor").style.display = "none";
  }

  iHits = iHitsResta + iHitsPerjudicat + iHitsAutor;
  return iHits;
}

function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits;
  var arrayActas;

  document.getElementById("divTaulaPerjudicat").style.display = "none";
  document.getElementById("divTaulaAutor").style.display = "none";
  document.getElementById("divTaulaResta").style.display = "block";
  document.getElementById("textResta").style.display = "none";
  document.getElementById("divExtraInfo").style.display = "none";

  iHits = 0;
  input = document.getElementById("myInput");
  filter = normalice(input.value.toUpperCase());

  input2 = document.getElementById("myInput2");
  filter2 = normalice(input2.value.toUpperCase());

  inputCodi = document.getElementById("myInputCodi");
  filterCodi = normalice(inputCodi.value.toUpperCase());

  inputSituacio = document.getElementById("dropdownSituacion");
  txtFilterSituacio = inputSituacio.value;

  //logic = document.getElementById("button");
  //operator = logic.innerText;

  table = document.getElementById("tableResta");
  tr = table.getElementsByTagName("tr");

  if (filterCodi != "") {
    document.getElementById("myInput").value = "";
    document.getElementById("myInput2").value = "";

    for (i = 0; i < tr.length; i++) {
      hit = 0;
      tdCodi = tr[i].getElementsByTagName("td")[0];
      if (tdCodi) {
        txtCodi = normalice(tdCodi.textContent || tdCodi.innerText);
        if (txtCodi.toUpperCase().indexOf(filterCodi) > -1) {
          hit = 1;
        }

        if (hit == 1) {
          tr[i].style.display = "";
          iHits = iHits + 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }

  } else if (txtFilterSituacio != "") {

    iHits = filterSituacio();

  } else {

    if (filter == "") {
      if (filter2 != "") {
        filter = filter2;
        filter2 = "";
      }
    }


    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {

        hit = 0;

        txtValue = normalice(td.textContent || td.innerText);

        if (filter2 == "") {
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            hit = 1
          } else {
            hit = 0;
          }
        } else {

          if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue.toUpperCase().indexOf(filter2) > -1) {
            hit = 1
          } else {
            hit = 0;
          }

          //miramos el operador
          /*
          if (operator == "i") {
            //operador AND
            if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue.toUpperCase().indexOf(filter2) > -1) {
              hit = 1
            } else {
              hit = 0;
            }  

          } else {
            //operador OR
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue.toUpperCase().indexOf(filter2) > -1) {
              hit = 1
            } else {
              hit = 0;
            }  
          }
          */
        }

        if (hit == 1) {
          tr[i].style.display = "";
          iHits = iHits + 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  if (iHits == 1) {
    document.getElementById("hitCounter").innerHTML = iHits + " coincid??ncia."
  } else {
    document.getElementById("hitCounter").innerHTML = numberWithCommas(iHits) + " coincid??ncies."
  }

}



function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function changeButton() {
  var btn = document.getElementById("button");
  if (btn.innerText == "i") {
    btn.innerText = "o";
  } else {
    btn.innerText = "i";
  }
  buscar();
}

function reset() {
  //document.getElementById("button").innerText = "i";


  document.getElementById("myInput").value = "";

  document.getElementById("myInput2").value = "";

  document.getElementById("myInputCodi").value = "";
  document.getElementById("dropdownSituacion").value = "";

  buscar();
}

function normalice(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()
}

function esconde() {

}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function tableClick(el) {
  //alert(arraySituacion[0].nombre);
}

function dropdownChange() {
  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("myInputCodi").value = "";

  inputSituacio = document.getElementById("dropdownSituacion");
  txtFilterSituacio = inputSituacio.value;

  document.getElementById("labelExtra").innerText = "";
  document.getElementById("divExtraInfo").style.display = "none";

  buscar();

  if (txtFilterSituacio != "") {
    for (var j = 0; j < arraySituacion.length; j++) {

      if (arraySituacion[j].situacio == txtFilterSituacio) {
        if (arraySituacion[j].extra) {
          if (arraySituacion[j].extra.trim() != "") {
            document.getElementById("labelExtra").innerText = arraySituacion[j].extra;
            document.getElementById("divExtraInfo").style.display = "block";
          }
        }
      }
    }

  }
}

function pageonload() {

  document.getElementById("fecha").innerText = "v." + version + " - " + fecha;

  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("dropdownSituacion").value = "";
  document.getElementById("labelExtra").innerText = "";
  document.getElementById("myInputCodi").value = "";


  loadSituaciones();

  decoraTablas();

  buscar();

  document.getElementById("loading").style.display = "none";
}

function decoraTablas() {

  tableResta = document.getElementById("tableResta");
  tableAutor = document.getElementById("tableAutor");
  tablePerjudicat = document.getElementById("tablePerjudicat");
  trResta = tableResta.getElementsByTagName("tr");
  trAutor = tableAutor.getElementsByTagName("tr");
  trPerjudicat = tablePerjudicat.getElementsByTagName("tr");
  for (i = 0; i < trResta.length; i++) {
    tdCodi = trResta[i].getElementsByTagName("td")[0];
    if (tdCodi) {
      switch (tdCodi.innerText.substring(0, 1)) {
        case "N":
          // code block
          trResta[i].style.backgroundColor = "#fff2f7";
          trAutor[i].style.backgroundColor = "#fff2f7";
          trPerjudicat[i].style.backgroundColor = "#fff2f7";
          break;
        case "A":
          // code block
          trResta[i].style.backgroundColor = "#f7fff2";
          trAutor[i].style.backgroundColor = "#f7fff2";
          trPerjudicat[i].style.backgroundColor = "#f7fff2";
          break;
        case "D":
          // code block
          trResta[i].style.backgroundColor = "#f2fffd";
          trAutor[i].style.backgroundColor = "#f2fffd";
          trPerjudicat[i].style.backgroundColor = "#f2fffd";
          break;
        case "T":
          // code block
          trResta[i].style.backgroundColor = "#f3f2ff";
          trAutor[i].style.backgroundColor = "#f3f2ff";
          trPerjudicat[i].style.backgroundColor = "#f3f2ff";
          break;
        case "G":
          // code block  
          trResta[i].style.backgroundColor = "#f2f5ff";
          trAutor[i].style.backgroundColor = "#f2f5ff";
          trPerjudicat[i].style.backgroundColor = "#f2f5ff";
          break;
        case "I":
          // code block  
          trResta[i].style.backgroundColor = "#fffff2";
          trAutor[i].style.backgroundColor = "#fffff2";
          trPerjudicat[i].style.backgroundColor = "#fffff2";
          break;
        default:
          // code block
      }
    }

  }
}

function processData(allText) {
  /*
  0: grup
  1: situacio
  2: actes autor
  3: actes victima
  4: resta actes
  5: extra
  */
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(';');
  var lines = [];

  for (var i = 1; i < allTextLines.length; i++) {
    var data = allTextLines[i].split(';');
    if (data.length == headers.length) {

      csvData.push({
        "grup": data[0],
        "situacio": data[1],
        "actes autor": data[2],
        "actes perjudicat": data[3],
        "actes resta": data[4],
        "extra": data[5]
      });

    }
  }
}

function loadSituaciones() {

  $.ajax({
    type: "GET",
    url: "situacions.csv",
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
        /*
        if (!a.grup) {
          console.log("a: " + a.situacio)
          a.grup = "Resta"
        }
        if (!b.grup) {
          console.log("b: " + b.situacio)
          b.grup = "Resta"
        }
        */
        if (a.grup) {
          if (b.grup) {
            return a.grup.localeCompare(b.grup) || a.situacio.localeCompare(b.situacio)
          }
        }
      });


      for (var i = 0; i < csvData.length; i++) {
        arraySituacion.push(csvData[i])
      }

        $(function() {
          var $select = $('#dropdownSituacion');
          var grupAnterior = "";
          var group;
          $.each(csvData, function() {
            if (this.grup) {
              if (this.grup != "") {

                if (grupAnterior == this.grup) {

                } else {
                  group = $('<optgroup label="' + this.grup + '" />');
                }

                if (group) {
                  $('<option />').html(this.situacio).appendTo(group);
                  group.appendTo($select);
                }
                
                grupAnterior = this.grup;
              }
            }
          });

        });

      
    }

  });


}
