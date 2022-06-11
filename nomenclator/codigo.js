const version = "0.9";
const fecha = "23/04/2022";
const arrayDenuncies = [];
const csvData = [];
const colorBookmark = "#fffee6";

var selectedNum = "";
var selectedTr = -1;

function clickBack() {
    window.open('../index.html', "_self")
}

function reset(){
  document.getElementById("myInputCodi").value = "";
  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("dropdownDenuncies").value = "";
  buscar();
}

function keyupInput1(){
  document.getElementById("myInputCodi").value = "";
  buscar();
}

function keyupInput2(){
  document.getElementById("myInputCodi").value = "";
  buscar();
}

function keyupInputCodi(){
  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("dropdownDenuncies").value = "";

  buscar();
}

//==========================================
//========== BUSCAR =======================
//==========================================
function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits, arrayFiltreDenuncies;

  iHits = 0;
  input = document.getElementById("myInput");
  filter = normalice(input.value.toUpperCase());

  input2 = document.getElementById("myInput2");
  filter2 = normalice(input2.value.toUpperCase());

  inputCodi = document.getElementById("myInputCodi");
  filterCodi = normalice(inputCodi.value.toUpperCase());

  inputDenuncies = document.getElementById("dropdownDenuncies");
  txtFilterDenuncies = inputDenuncies.value;

  //Obtener los codigos de denuncia del dropdown
  if (inputDenuncies.selectedIndex > 0) {
    //si es 1 = bookmarks
    if (inputDenuncies.selectedIndex == 1) {
      strBookmark = getCookie("bookmarks")
      arrayFiltreDenuncies = strBookmark.split(",");
    } else {
      arrayFiltreDenuncies = arrayDenuncies[inputDenuncies.selectedIndex - 2].codis.split(",")
    }
  }

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  if (filterCodi != "") {
    document.getElementById("myInput").value = "";
    document.getElementById("myInput2").value = "";

    for (i = 0; i < tr.length; i++) {
      hit = 0;
      tdCodi = tr[i].getElementsByTagName("td")[1];
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

  } else {

    if (filter == "") {
      if (filter2 != "") {
        filter = filter2;
        filter2 = "";
      }
    }


    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        
        hit = 0;

        txtValue = normalice(td.textContent || td.innerText);
  
          if (arrayFiltreDenuncies) {
            tdCodi = tr[i].getElementsByTagName("td")[1];
            txtCodi = normalice(tdCodi.textContent || tdCodi.innerText);
            
            if (arrayFiltreDenuncies.includes(txtCodi)) {
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
              }

            } 
          } else {

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
  if (iHits == 1) {
    document.getElementById("hitCounter").innerHTML = iHits + " coincidència." 
  } else {
    document.getElementById("hitCounter").innerHTML = numberWithCommas(iHits) + " coincidències." 
  }
  
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function normalice(text){
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

//==========================================
//========== ESCONDE =======================
//==========================================
function esconde() {
  //y pintamos bookmarks
  strBookmark = getCookie("bookmarks")
  arrayBookmark = strBookmark.split(",");

  iHits = 0;

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    tdNum = tr[i].getElementsByTagName("td")[1];
    if (tdNum) {
      if (arrayBookmark.includes(tdNum.innerHTML)) {
        tr[i].style.backgroundColor = colorBookmark;
      }  
    }
    

    iHits = iHits + 1;
    td = tr[i].getElementsByTagName("td")[0];
    th = tr[i].getElementsByTagName("th")[0];
    if (td) {
          td.style.display = "none";
    }
    if (th) {
          th.style.display = "none";
    }

    for (j = 3; j < 14; j++) {
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

  if (iHits == 1) {
    document.getElementById("hitCounter").innerHTML = iHits + " coincidència." 
  } else {
    document.getElementById("hitCounter").innerHTML = numberWithCommas(iHits) + " coincidències." 
  }

/*
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const paramFilter1 = urlParams.get('filter1')
  const paramFilter2 = urlParams.get('filter2')

  reset(paramFilter1, paramFilter2);
*/
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function bookmarkClick(){

  estrella = document.getElementById("estrella");
  if (isBookmark(selectedNum)) {
    //quitar de bookmark
    removeBookmark(selectedNum);
    estrella.className = 'fa fa-star unchecked';
    tr[selectedTr + 1].style.backgroundColor = "white";
  } else {
    //añadir a bookmark
    addBookmark(selectedNum);
    estrella.className = 'fa fa-star checked';
    tr[selectedTr + 1].style.backgroundColor = colorBookmark;
  }
  
}


function tableClick(el) {


  var indice, table, tr, td;
  indice = $(el).closest('tr').index();

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  td = tr[indice + 1].getElementsByTagName("td")

  //document.getElementById("popUpCodigo").innerText = td[1].innerText;
  selectedNum = td[1].innerText;
  selectedTr = indice;

  document.getElementById("popUpNum").innerHTML = td[1].innerText;
  document.getElementById("popUpDesc").innerHTML = td[2].innerText;
  document.getElementById("popUpNormativa").innerText = td[3].innerText + " - Article: " + td[4].innerText;
  //document.getElementById("popUpArticle").innerText = td[4].innerText;
  document.getElementById("popUpImporte").innerText = td[5].innerText + "€ / " + td[6].innerText + "€";
  if (td[7].innerText == "S") {
    document.getElementById("cboxRetirada").checked = true;
  } else {
    document.getElementById("cboxRetirada").checked = false;
  }
  if (td[8].innerText == "S") {
    document.getElementById("cboxPunts").checked = true;
  } else {
    document.getElementById("cboxPunts").checked = false;
  }
  if (td[9].innerText == "1") {
    document.getElementById("cboxCondicional").checked = true;
  } else {
    document.getElementById("cboxCondicional").checked = false;
  }
  if (td[13].innerText == "S") {
    document.getElementById("cboxIntervencio").checked = true;
  } else {
    document.getElementById("cboxIntervencio").checked = false;
  }

  document.getElementById("popUpAbits").innerText = td[10].innerText;
  
  //check si es bookmark
  estrella = document.getElementById("estrella");
  if (isBookmark(selectedNum)) {
    estrella.className = 'fa fa-star checked';
  } else {
    estrella.className = 'fa fa-star unchecked';
  }
  
  document.getElementById("overlay").style.display = "block";
}


function pageonload() {
  document.getElementById("fecha").innerText = "v." + version + " - " + fecha;

  esconde();
  loadDenuncias();

  document.getElementById("loading").style.display = "none";
}

function loadDenuncias() {

  $.ajax({
    type: "GET",
    url: "denuncies.csv",
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
            return a.grup.localeCompare(b.grup) || a.nom.localeCompare(b.nom)
          }
        }
      });


      for (var i = 0; i < csvData.length; i++) {
        arrayDenuncies.push(csvData[i])
      }

        $(function() {
          var $select = $('#dropdownDenuncies');
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
                  $('<option />').html(this.nom).appendTo(group);
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

function dropdownChange() {
  document.getElementById("myInputCodi").value = "";

  buscar();

}

function isBookmark(num) {
  strBookmark = getCookie("bookmarks")
  arrayBookmark = strBookmark.split(",");
  if (arrayBookmark.includes(num)) {
    return true;
  } else {
    return false;
  }
}

function removeBookmark(num) {
  strBookmark = getCookie("bookmarks")
  arrayBookmark = strBookmark.split(",");
  index = arrayBookmark.indexOf(num);
  if (index > -1) {
    arrayBookmark.splice(index, 1);
  }
  
  setCookie("bookmarks", arrayBookmark.join(","), 3650);

}

function addBookmark(num) {
  strBookmark = getCookie("bookmarks")
  if (strBookmark == "") {
    strBookmark = num;
    setCookie("bookmarks", strBookmark, 3650);
  } else {
    //Check que no este ya en bookmarks
    arrayBookmark = strBookmark.split(",");
    if (arrayBookmark.includes(num)) {
    } else {
      strBookmark = strBookmark + "," + num;
      setCookie("bookmarks", strBookmark, 3650);
    }
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}