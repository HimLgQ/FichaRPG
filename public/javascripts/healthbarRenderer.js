const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = 205);
const height = (canvas.height = 40);

let health = 100;
const healthBarWidth = 200;
const healthBarHeight = 35;
const x = 2.5;
const y = 2.5;

const healthBar = new HealthBar(
    x,
    y,
    healthBarWidth,
    healthBarHeight,
    health,
    "white"
);

const frame = function () {
    context.clearRect(0, 0, width, height);
    healthBar.show(context);
    requestAnimationFrame(frame);
};

function mudarVida() {
    let atual = Number(vidaAtual.value.replace(/\D/g, ""));
    let maxima = Number(vidaMaxima.value.replace(/\D/g, ""));
    healthBar.updateHealth(atual, maxima);
}

frame();
