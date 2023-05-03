var countryISOMapping = {
  AFG: "AF",
  ALA: "AX",
  ALB: "AL",
  DZA: "DZ",
  ASM: "AS",
  AND: "AD",
  AGO: "AO",
  AIA: "AI",
  ATA: "AQ",
  ATG: "AG",
  ARG: "AR",
  ARM: "AM",
  ABW: "AW",
  AUS: "AU",
  AUT: "AT",
  AZE: "AZ",
  BHS: "BS",
  BHR: "BH",
  BGD: "BD",
  BRB: "BB",
  BLR: "BY",
  BEL: "BE",
  BLZ: "BZ",
  BEN: "BJ",
  BMU: "BM",
  BTN: "BT",
  BOL: "BO",
  BES: "BQ",
  BIH: "BA",
  BWA: "BW",
  BVT: "BV",
  BRA: "BR",
  VGB: "VG",
  IOT: "IO",
  BRN: "BN",
  BGR: "BG",
  BFA: "BF",
  BDI: "BI",
  KHM: "KH",
  CMR: "CM",
  CAN: "CA",
  CPV: "CV",
  CYM: "KY",
  CAF: "CF",
  TCD: "TD",
  CHL: "CL",
  CHN: "CN",
  HKG: "HK",
  MAC: "MO",
  CXR: "CX",
  CCK: "CC",
  COL: "CO",
  COM: "KM",
  COG: "CG",
  COD: "CD",
  COK: "CK",
  CRI: "CR",
  CIV: "CI",
  HRV: "HR",
  CUB: "CU",
  CUW: "CW",
  CYP: "CY",
  CZE: "CZ",
  DNK: "DK",
  DJI: "DJ",
  DMA: "DM",
  DOM: "DO",
  ECU: "EC",
  EGY: "EG",
  SLV: "SV",
  GNQ: "GQ",
  ERI: "ER",
  EST: "EE",
  ETH: "ET",
  FLK: "FK",
  FRO: "FO",
  FJI: "FJ",
  FIN: "FI",
  FRA: "FR",
  GUF: "GF",
  PYF: "PF",
  ATF: "TF",
  GAB: "GA",
  GMB: "GM",
  GEO: "GE",
  DEU: "DE",
  GHA: "GH",
  GIB: "GI",
  GRC: "GR",
  GRL: "GL",
  GRD: "GD",
  GLP: "GP",
  GUM: "GU",
  GTM: "GT",
  GGY: "GG",
  GIN: "GN",
  GNB: "GW",
  GUY: "GY",
  HTI: "HT",
  HMD: "HM",
  VAT: "VA",
  HND: "HN",
  HUN: "HU",
  ISL: "IS",
  IND: "IN",
  IDN: "ID",
  IRN: "IR",
  IRQ: "IQ",
  IRL: "IE",
  IMN: "IM",
  ISR: "IL",
  ITA: "IT",
  JAM: "JM",
  JPN: "JP",
  JEY: "JE",
  JOR: "JO",
  KAZ: "KZ",
  KEN: "KE",
  KIR: "KI",
  PRK: "KP",
  KOR: "KR",
  KWT: "KW",
  KGZ: "KG",
  LAO: "LA",
  LVA: "LV",
  LBN: "LB",
  LSO: "LS",
  LBR: "LR",
  LBY: "LY",
  LIE: "LI",
  LTU: "LT",
  LUX: "LU",
  MKD: "MK",
  MDG: "MG",
  MWI: "MW",
  MYS: "MY",
  MDV: "MV",
  MLI: "ML",
  MLT: "MT",
  MHL: "MH",
  MTQ: "MQ",
  MRT: "MR",
  MUS: "MU",
  MYT: "YT",
  MEX: "MX",
  FSM: "FM",
  MDA: "MD",
  MCO: "MC",
  MNG: "MN",
  MNE: "ME",
  MSR: "MS",
  MAR: "MA",
  MOZ: "MZ",
  MMR: "MM",
  NAM: "NA",
  NRU: "NR",
  NPL: "NP",
  NLD: "NL",
  ANT: "AN",
  NCL: "NC",
  NZL: "NZ",
  NIC: "NI",
  NER: "NE",
  NGA: "NG",
  NIU: "NU",
  NFK: "NF",
  MNP: "MP",
  NOR: "NO",
  OMN: "OM",
  PAK: "PK",
  PLW: "PW",
  PSE: "PS",
  PAN: "PA",
  PNG: "PG",
  PRY: "PY",
  PER: "PE",
  PHL: "PH",
  PCN: "PN",
  POL: "PL",
  PRT: "PT",
  PRI: "PR",
  QAT: "QA",
  REU: "RE",
  ROU: "RO",
  RUS: "RU",
  RWA: "RW",
  BLM: "BL",
  SHN: "SH",
  KNA: "KN",
  LCA: "LC",
  MAF: "MF",
  SPM: "PM",
  VCT: "VC",
  WSM: "WS",
  SMR: "SM",
  STP: "ST",
  SAU: "SA",
  SEN: "SN",
  SRB: "RS",
  SYC: "SC",
  SLE: "SL",
  SGP: "SG",
  SXM: "SX",
  SVK: "SK",
  SVN: "SI",
  SLB: "SB",
  SOM: "SO",
  ZAF: "ZA",
  SGS: "GS",
  SSD: "SS",
  ESP: "ES",
  LKA: "LK",
  SDN: "SD",
  SUR: "SR",
  SJM: "SJ",
  SWZ: "SZ",
  SWE: "SE",
  CHE: "CH",
  SYR: "SY",
  TWN: "TW",
  TJK: "TJ",
  TZA: "TZ",
  THA: "TH",
  TLS: "TL",
  TGO: "TG",
  TKL: "TK",
  TON: "TO",
  TTO: "TT",
  TUN: "TN",
  TUR: "TR",
  TKM: "TM",
  TCA: "TC",
  TUV: "TV",
  UGA: "UG",
  UKR: "UA",
  ARE: "AE",
  GBR: "GB",
  USA: "US",
  UMI: "UM",
  URY: "UY",
  UZB: "UZ",
  VUT: "VU",
  VEN: "VE",
  VNM: "VN",
  VIR: "VI",
  WLF: "WF",
  ESH: "EH",
  YEM: "YE",
  ZMB: "ZM",
  ZWE: "ZW",
  XKX: "XK"
};

function getCountryISO2(countryCode) {
  return countryISOMapping[countryCode]
}

const version = "0.9";
const fecha = "08/05/2022";
const arrayEnlaces = [];
const arrayPaisos = [];
const csvData = [];

function clickBack() {
  window.open('../index.html', "_self")
}


function onkeyupInputCodi(){
  inputConveni = document.getElementById("dropdownConveni").value = "";
  document.getElementById("chMultiEnlaces").checked = false;

  buscar();
}

function onkeyupCheckMulti(){
  buscar();
}

function dropdownChange(){
  document.getElementById("myInputCodi").value = "";
  document.getElementById("chMultiEnlaces").checked = false;

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

  if (document.getElementById("chMultiEnlaces").checked == true) {
    for (i = 0; i < tr.length; i++) {
      hit = 0;
      tdCodiPais = tr[i].getElementsByTagName("td")[2];
      if (tdCodiPais) {
        
        codiPais = tdCodiPais.innerText;

        if (arrayPaisos.includes(codiPais)) {
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
  } else if (txtFilterConveni!="") {

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

  sCodigoPais = td[2].innerText;

  //Crear filas
  url="https://www.consilium.europa.eu/prado/es/prado-documents/" + sCodigoPais + "/index.html"
  enlace = '<a href="' + url + '">PRADO</a>'

  fila = "<tr onclick=\"window.location.href='" + url + "';\"><td>PRADO</td></tr>"
  for (var i = 0; i < arrayEnlaces.length; i++) {
    if (arrayEnlaces[i][0] == sCodigoPais) {

      fila = fila + "<tr onclick=\"window.location.href='" + arrayEnlaces[i][2] + "';\"><td>" + arrayEnlaces[i][1] + "</td></tr>"
    }
  }

  document.getElementById("popUpBandera").src = "https://flagcdn.com/h60/" + getCountryISO2(sCodigoPais).toLowerCase() + ".png"

  document.getElementById("popPais").innerText = td[0].innerText;
  document.getElementById("popTaula").innerHTML = '<table class="taulaEnlaces">' + fila + '</table>'
  
  document.getElementById("overlay").style.display = "block";
  
/*
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        console.log(this.responseText)

        var data = JSON.parse(this.responseText);
        document.getElementById("popUpBandera").src = data.message;
      }
    };
    
    xhttp.open("GET", "<img src="https://countryflagsapi.com/png/ad" alt="Andorra flag"/>", true);

    //xhttp.open("GET", "https://countryflagsapi.com/svg/" + sCodigoPais, true);
    xhttp.send();
    
    //https://flagcdn.com/h60/de.png
*/
  //document.getElementById("popUpBandera").src = "https://countryflagsapi.com/png/" + sCodigoPais;


return "";

console.log(td[0].innerText);
  
  url = "https://www.consilium.europa.eu/prado/es/prado-documents/" + sCodigoPais + "/index.html";

/*
  if (tr[indice + 1].getAttribute("open") == "true") {
    tr[indice + 1].setAttribute("open", "false");
  } else {
    tr[indice + 1].setAttribute("open", "true");
  }
*/
  if (tr[indice + 1].getAttribute("open") == "true") {
    return "";  
  }
  
  tr[indice + 1].setAttribute("open", "true");

  //ocultas:
  sColumnasOcultas='<td style="display:none">' + td[0].innerText + '</td>'

  //Crear filas
  enlace = '<a href="' + url + '">PRADO</a>'
  fila = "<tr>" + sColumnasOcultas + "<td>" + enlace + "</td></tr>"

  for (var i = 0; i < arrayEnlaces.length; i++) {
    if (arrayEnlaces[i][0] == sCodigoPais) {
      enlace = '<a href="' + arrayEnlaces[i][2] + '">' + arrayEnlaces[i][1] + '</a>'

      fila = fila + "<tr>" + sColumnasOcultas + "<td>" + enlace + "</td></tr>"
    }
  }

  $( '<tr><td colSpan="2"><table class="taulaEnlaces">' + fila + '</table></td><td style="display:none"></td></tr>' ).insertAfter( $(el).closest('tr'));
//console.log(document.getElementById("tableMain").outerHTML)
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

  //document.getElementById("fecha").innerText = "v." + version + " - " + fecha;

  document.getElementById("myInputCodi").value = "";

  esconde();

  loadEnlaces();

  
  document.getElementById("loading").style.display = "none";

}

function loadEnlaces() {

  $.ajax({
    type: "GET",
    url: "enlaces.csv",
    dataType: "text",
    success: function(res) {


      var count = 0; // cache the running count
      csvArray = Papa.parse(res).data;

      //TENEMOS UN ARRAY --> NECESITAMOS UN ARRAY DE OBJETOS!!
      for (i = 1; i < csvArray.length; i++) {
        csvData.push({});

        for (j = 0; j < csvArray[0].length; j++) {
          //csvData[i - 1][csvArray[0][j]] = csvArray[i][j]
          csvData[i - 1][j] = csvArray[i][j]
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
        arrayEnlaces.push(csvData[i]);

        if (!arrayPaisos.includes(csvData[i][0])) {
          arrayPaisos.push(csvData[i][0]);  
        }
        
      }
    
      buscar();

    }


  });


}

