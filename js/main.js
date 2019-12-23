// function for converter coin
function converter() {
  const from = document.getElementById("from").value
  const to = document.getElementById("to").value
  
  let xmlhttp = new XMLHttpRequest()
  let url = `https://economia.awesomeapi.com.br/all/${from}-${to}`
  
  xmlhttp.open('GET', url, true)
  xmlhttp.send()
  
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let resul = xmlhttp.responseText
        let jsResult = JSON.parse(resul)
         console.log('console '+from)
        let oneUnit = jsResult.code.from
        // console.log(oneUnit)
        //jsResult.codein[from]
       document.getElementById("toAmout").value = oneUnit
      
      } else {
        console.log(xmlhttp.status)
        document.getElementById("show").innerHTML = "Erroooooooo"
      }
  }
}