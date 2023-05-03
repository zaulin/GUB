const version = "0.9";
const fecha = "08/05/2022";
const arraySituacion = [];
const csvData = [];

function clickBack() {
  window.open('../index.html', "_self")
}

function keyupInput1() {
  buscar();
}

function keyupInput2() {
  buscar();
}



function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits;
  var arrayActas;

  iHits = 0;
  input = document.getElementById("myInput");
  filter = normalice(input.value.toUpperCase());

  input2 = document.getElementById("myInput2");
  filter2 = normalice(input2.value.toUpperCase());


  table = document.getElementById("tableResta");
  tr = table.getElementsByTagName("tr");



    if (filter == "") {
      if (filter2 != "") {
        filter = filter2;
        filter2 = "";
      }
    }


    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      tdCodi = tr[i].getElementsByTagName("td")[0];
      if (td) {

        hit = 0;

        txtValue = normalice(td.textContent || td.innerText);
        txtCodi = normalice(tdCodi.textContent || tdCodi.innerText);

        if (filter2 == "") {
          if (txtValue.toUpperCase().indexOf(filter) > -1 || txtCodi.toUpperCase().startsWith(filter)) {
            hit = 1
          } else {
            hit = 0;
          }
        } else {

          if (txtValue.toUpperCase().indexOf(filter) > -1 || txtCodi.toUpperCase().startsWith(filter)) {
              if (txtValue.toUpperCase().indexOf(filter2) > -1 || txtCodi.toUpperCase().startsWith(filter2)) {
                hit = 1
              } else {
                hit = 0
              }
          } else {     
            hit = 0;
          } 

        }

        if (hit == 1) {
          tr[i].style.display = "";
          iHits = iHits + 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }


  if (iHits == 1) {
    document.getElementById("hitCounter").innerHTML = iHits + " coincidència."
  } else {
    document.getElementById("hitCounter").innerHTML = numberWithCommas(iHits) + " coincidències."
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

  document.getElementById("myInput").value = "";

  document.getElementById("myInput2").value = "";

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

  inputSituacio = document.getElementById("dropdownSituacion");
  txtFilterSituacio = inputSituacio.value;

  document.getElementById("labelExtra").innerText = "";
  document.getElementById("divExtraInfo").style.display = "none";

  buscar();

}

function pageonload() {

  //document.getElementById("fecha").innerText = "v." + version + " - " + fecha;

  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";

  decoraTablas();

  buscar();

  document.getElementById("loading").style.display = "none";
}

function decoraTablas() {

  tableResta = document.getElementById("tableResta");
  trResta = tableResta.getElementsByTagName("tr");
  for (i = 0; i < trResta.length; i++) {
    tdCodi = trResta[i].getElementsByTagName("td")[0];
    if (tdCodi) {
      switch (tdCodi.innerText.substring(0, 1)) {
        case "N":
          // code block
          trResta[i].style.backgroundColor = "#fff2f7";
          break;
        case "A":
          // code block
          trResta[i].style.backgroundColor = "#f7fff2";
          break;
        case "D":
          // code block
          trResta[i].style.backgroundColor = "#f2fffd";
          break;
        case "T":
          // code block
          trResta[i].style.backgroundColor = "#f3f2ff";
          break;
        case "G":
          // code block  
          trResta[i].style.backgroundColor = "#f2f5ff";
          break;
        case "I":
          // code block  
          trResta[i].style.backgroundColor = "#fffff2";
          break;
        default:
          // code block
      }
    }

  }
}
