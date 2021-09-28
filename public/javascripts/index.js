const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = 320);
const height = (canvas.height = 480);

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

let health = 300;
const healthBarWidth = 200;
const healthBarHeight = 35;
const x = 10;
const y = 10;

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
    try {
        let atual = vidaAtual.value;
        let maxima = vidaMaxima.value;
        if (atual != Number && maxima != Number) {
            atual = Number(atual);
            maxima = Number(maxima);
            healthBar.updateHealth(atual, maxima);
        }
    } catch {
        console.log(typeof atual, typeof maxima);
    }
}

frame();
