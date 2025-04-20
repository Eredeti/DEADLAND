document.addEventListener("DOMContentLoaded", () => {
    const char1 = document.getElementById("char_1");
    const char2 = document.getElementById("char_2");

    const speed = 7;
    const gravity = 1.5;
    const jumpStrength = 20;
    const keysPressed = {};

    let posY1 = parseInt(getComputedStyle(char1).top, 10);
    let posX1 = parseInt(getComputedStyle(char1).left, 10);
    let posY2 = parseInt(getComputedStyle(char2).top, 10); 
    let posX2 = parseInt(getComputedStyle(char2).left, 10);

    let velocityY1 = 0;
    let velocityY2 = 0;

    let isJumping1 = false;
    let isJumping2 = false;

    document.addEventListener("keydown", (event) => {
        keysPressed[event.key] = true;
    });

    document.addEventListener("keyup", (event) => {
        keysPressed[event.key] = false;
    });

    function update() {
        // Joueur 1
        if (keysPressed["ArrowLeft"] && verif_hit(posX1 - speed, posY1)) posX1 -= speed;
        if (keysPressed["ArrowRight"] && verif_hit(posX1 + speed, posY1)) posX1 += speed;
        if (keysPressed["ArrowUp"] && !isJumping1) {
            velocityY1 = -jumpStrength;
            isJumping1 = true;
        }

        // Joueur 2
        if (keysPressed["q"] && verif_hit(posX2 - speed, posY2)) posX2 -= speed;
        if (keysPressed["d"] && verif_hit(posX2 + speed, posY2)) posX2 += speed;
        if (keysPressed["z"] && !isJumping2) {
            velocityY2 = -jumpStrength;
            isJumping2 = true;
        }

        // Appliquer la gravité
        velocityY1 += gravity;
        velocityY2 += gravity;

        // Mettre à jour Y1 avec vérification
        if (verif_hit(posX1, posY1 + velocityY1)) {
            posY1 += velocityY1;
        } else {
            if (velocityY1 > 0) {
                // Collision avec le sol
                isJumping1 = false;
            }
            // Dans tous les cas on stoppe la vitesse Y
            velocityY1 = 0;
        }

        if (verif_hit(posX2, posY2 + velocityY2)) {
            posY2 += velocityY2;
        } else {
            if (velocityY2 > 0) {
                isJumping2 = false;
            }
            velocityY2 = 0;
        }

        // Appliquer le style
        char1.style.top = posY1 + "px";
        char1.style.left = posX1 + "px";
        char2.style.top = posY2 + "px";
        char2.style.left = posX2 + "px";

        requestAnimationFrame(update);

        //système de lumière 
        //updateDarkness();
    }


//     function updateDarkness() {
//         const lightRadius = 100;

//         const center1X = posX1 + 25;
//         const center1Y = posY1 + 25;
//         const center2X = posX2 + 25;
//         const center2Y = posY2 + 25;

//         const darkness = document.getElementById("darkness");

//         darkness.style.background = `
//     radial-gradient(circle ${lightRadius}px at ${center1X}px ${center1Y}px, 
//     rgba(0, 0, 0, 0) 0%,
//     rgba(0,0,0,0.3) 60%,
//     rgba(0,0,0,0.6) 100%),
//     radial-gradient(circle ${lightRadius}px at ${center2X}px ${center2Y}px,
//     rgba(0, 0, 0, 0) 0%,
//     rgba(0,0,0,0.3) 60%,
//     rgba(0,0,0,0.6) 100%)
// `;

//     }

    requestAnimationFrame(update);
});
