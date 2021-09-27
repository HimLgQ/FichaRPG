function rolarBotao()
{
    let textoTeste

    resultadoD20 = Math.floor(Math.random() * 20+1)

    if (resultadoD20 > 5 && resultadoD20 <= 12)
    {
        textoTeste = "Normal"
    }

    else if (resultadoD20 > 12 && resultadoD20 < 17)
    {
        textoTeste = "Bom"
    }

    else if (resultadoD20 >= 18)
    {
        textoTeste = "Extremo"
    }

    else
    {
        textoTeste = "Falha"
    }
    
    resultadoTeste = `<p class = "resultado"> Resultado: ${resultadoD20} ${textoTeste} <br> </p>`

    let textoEscrever = document.getElementById("textoEscrever")

    textoEscrever.innerHTML += resultadoTeste

    if(textoEscrever.children.length > 10)
    {
        textoEscrever.children[0].remove()
    }
}

