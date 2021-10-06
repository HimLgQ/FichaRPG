const timer = ms => new Promise(res => setTimeout(res, ms))

async function RollD20(nomePericia) {
    const dadoTexto = document.getElementById("dadoTexto")
    const resultadoTexto = document.getElementById("resultadoTexto")
    const divD20 = document.getElementById("containerD20")
    let textoResultadoTeste
    const D20 = Math.floor(Math.random() * 20 + 1)

    const normal = [20, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const bom = [0, 20, 20, 18, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11];
    const extremo = [0, 0, 0, 20, 20, 20, 19, 19, 19, 19, 18, 18, 18, 18, 17, 17, 17, 17, 16];

    const pericia = getTextById(nomePericia);

    divD20.style.visibility = 'visible';

    for (i = 0; i <=15; i++){
        let dado20 = Math.floor(Math.random() * 20 + 1)
        dadoTexto.innerHTML = `${dado20}`
        await timer(100);
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

    resultadoTexto.style.visibility = 'visible';
    dadoTexto.innerHTML = `${D20}`
    resultadoTexto.innerHTML = `${textoResultadoTeste}`

    await timer(1500);
    resultadoTexto.style.visibility = 'hidden';
    divD20.style.visibility = 'hidden';
}