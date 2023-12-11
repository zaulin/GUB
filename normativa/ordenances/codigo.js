
const version = "0.9";
const fecha = "08/05/2022";
const csvData = [];

function clickBack() {
  window.open('../index.html', "_self")
}

function pageonload() {

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
          csvData[i - 1][j] = csvArray[i][j]
        }

      }

      for (var i = 0; i < csvData.length; i++) {
          fila = "<tr onclick=\"window.open('" + csvData[i][1] + "','_blank')\"><td>" + csvData[i][0] + "</td></tr>"
          $('#tableMain').append(fila)
      }
    
    }


  });


}

