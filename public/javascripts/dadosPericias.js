function RollD20(nomePericia) {
    try {
        let textoResultadoTeste,
            valorInvalido;
        const resultadoTexto = document.getElementById("resultadoTexto")

        const D20 = Math.floor(Math.random() * 20 + 1)

        const normal = [20, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const bom = [0, 20, 20, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11];
        const extremo = [0, 0, 0, 20, 20, 20, 19, 19, 19, 19, 18, 18, 18, 18, 17, 17, 17, 17, 16];

        const pericia = getValueById('input' + nomePericia);

        if (pericia < 1 || pericia > 19) {
            valorInvalido = true
        }

        if (D20 < normal[pericia - 1]) {
            textoResultadoTeste = "Falha"
        }

        else if (D20 < bom[pericia - 1]) {
            textoResultadoTeste = "Normal"
        }

        else if (D20 < extremo[pericia - 1]) {
            textoResultadoTeste = "Bom"
        }

        else {
            textoResultadoTeste = "Extremo"
        }

        if (resultadoTexto.children.length > 5) {
            resultadoTexto.children[0].remove()
        }

        if (valorInvalido) {
            if (pericia < 0) {
                resultadoTexto.innerHTML = "Valor deve ser maior que 1"
            }

            if (pericia == 0) {
                resultadoTexto.innerHTML = "Deve digitar um número"
            }

            if (pericia > 19) {
                resultadoTexto.innerHTML = "Valor deve ser menor que 20"
            }
        } else {
            resultadoTexto.innerHTML = `<p> Dado: ${D20} Resultado: ${textoResultadoTeste}</p>`
        }
    } catch (error) {
        console.log(error)
    }
}
