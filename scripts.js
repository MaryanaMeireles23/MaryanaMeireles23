





let chave = "1d3d13e969f42834e9affb64626e3e93"

function colocarNaTela(dados) {

    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML= Math.floot(dados.main.temp) +"°c"
    document.querySelector(".description").innerHTML= dados.weather[0].description
    


}

async function buscarCidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave
        + "&lang=pt-br" + "&unit=metric").then(resposta => resposta.jason())

    colocarNaTela(dados)


}



function cliqueNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}




