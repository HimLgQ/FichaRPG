class HealthBar {
    constructor(x, y, w, h, maxHealth, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
    }

    show(context) {
        context.lineWidth = 3;
        context.strokeStyle = "#fff";
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }

    updateHealth(vidaAtual,vidaMaxima) {
        this.health = vidaAtual;
        this.maxHealth = vidaMaxima;
        this.w = (this.health / this.maxHealth) * this.maxWidth;
    }
}
