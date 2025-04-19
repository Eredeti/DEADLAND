document.addEventListener("DOMContentLoaded", () => {
    const char1 = document.getElementById("char_1");
    const char2 = document.getElementById("char_2");
    

    const speed = 7; // plus petit = plus fluide
    const keysPressed = {};

    let posY1 = parseInt(getComputedStyle(char1).top, 10);
    let posX1 = parseInt(getComputedStyle(char1).left, 10);
    let posY2 = parseInt(getComputedStyle(char2).top, 10);
    let posX2 = parseInt(getComputedStyle(char2).left, 10);
    
    document.addEventListener("keydown", (event) => {
        keysPressed[event.key] = true;
    });

    document.addEventListener("keyup", (event) => {
        keysPressed[event.key] = false;
    });

    function update() {

        if (keysPressed["ArrowUp"] && verif_hit(posX1, posY1 - speed)) posY1 -= speed;
        if (keysPressed["ArrowDown"] && verif_hit(posX1, posY1 + speed)) posY1 += speed;
        if (keysPressed["ArrowLeft"] && verif_hit(posX1 - speed, posY1)) posX1 -= speed;
        if (keysPressed["ArrowRight"] && verif_hit(posX1 + speed, posY1)) posX1 += speed;

        if (keysPressed["z"] && verif_hit(posX2, posY2 - speed)) posY2 -= speed;
        if (keysPressed["s"] && verif_hit(posX2, posY2 + speed)) posY2 += speed;
        if (keysPressed["q"] && verif_hit(posX2 - speed, posY2)) posX2 -= speed;
        if (keysPressed["d"] && verif_hit(posX2 + speed, posY2)) posX2 += speed;

        // Appliquer les nouvelles positions
        char1.style.top = posY1 + "px";
        char1.style.left = posX1 + "px";

        char2.style.top = posY2 + "px";
        char2.style.left = posX2 + "px";

        // Relancer la boucle
        requestAnimationFrame(update);
    }

    // Lancer la boucle une première fois
    requestAnimationFrame(update);
});
