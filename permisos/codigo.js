const version = "0.9";
const fecha = "08/05/2022";
const arraySituacion = [];

function clickBack() {
  window.open('../index.html', "_self")
}


function onkeyupInputCodi(){
  inputConveni = document.getElementById("dropdownConveni").value = "";

  buscar();
}

function dropdownChange(){
  document.getElementById("myInputCodi").value = "";

  inputConveni = document.getElementById("dropdownConveni");
  txtFilterConveni = inputConveni.value;

  buscar();

}

function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits;
  var arrayActas;

  inputCodi = document.getElementById("myInputCodi");
  filterCodi = normalice(inputCodi.value.toUpperCase());

  inputConveni = document.getElementById("dropdownConveni");
  txtFilterConveni = inputConveni.value;

  table = document.getElementById("tableMain");
  tr = table.getElementsByTagName("tr");

  if (txtFilterConveni!="") {

    for (i = 0; i < tr.length; i++) {
      hit = 0;
      tdConveni = tr[i].getElementsByTagName("td")[1];
      tdCodi = tr[i].getElementsByTagName("td")[0];

      if (tdConveni) {
          txtConveni = normalice(tdConveni.textContent || tdConveni.innerText);
          if (txtConveni.toUpperCase().indexOf(txtFilterConveni.toUpperCase()) > -1) {

              if (filterCodi == "") {
                hit = 1;
              } else {
                txtCodi = normalice(tdCodi.textContent || tdCodi.innerText);
                if (txtCodi.toUpperCase().indexOf(filterCodi) > -1) {
                    hit = 1;
                }
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

  } else {

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
  var indice, table, tr, td;
  indice = $(el).closest('tr').index();

  table = document.getElementById("tableMain");
  tr = table.getElementsByTagName("tr");
  td = tr[indice + 1].getElementsByTagName("td")

  url = "https://www.consilium.europa.eu/prado/es/prado-documents/" + td[2].innerText + "/index.html";

  window.open(url)
 
}

function esconde() {
  arrayConveni = [];

  table = document.getElementById("tableMain");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    th = tr[i].getElementsByTagName("th")[2];
    if (td) {

          td.style.display = "none";
          if (tr[i].getElementsByTagName("td")[1].innerText == "") {
            tr[i].getElementsByTagName("td")[1].innerText = "-"
          }

          if (!arrayConveni.includes(tr[i].getElementsByTagName("td")[1].innerText)) {
            arrayConveni.push(tr[i].getElementsByTagName("td")[1].innerText);
          }
    }
    if (th) {
          th.style.display = "none";
    }
  }

  arrayConveni.sort();

    $(function(){
      var $select = $('#dropdownConveni');
      $('<option />').html("").appendTo($select);
      $.each(arrayConveni, function(i){
          $('<option />').html(arrayConveni[i]).appendTo($select);
      });
    });

}

function pageonload() {

  document.getElementById("fecha").innerText = "v." + version + " - " + fecha;

  document.getElementById("myInputCodi").value = "";

  esconde();
  buscar();
  document.getElementById("loading").style.display = "none";
}

