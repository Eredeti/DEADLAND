document.addEventListener("DOMContentLoaded", () => {
    const world = document.getElementById("world");
    const char1 = document.getElementById("char_1");
    const char2 = document.getElementById("char_2");
    const minSize = 2000;

    setInterval(() => {
        let posY1 = parseInt(getComputedStyle(char1).top, 10);
        let posX1 = parseInt(getComputedStyle(char1).left, 10);
        let posY2 = parseInt(getComputedStyle(char2).top, 10); 
        let posX2 = parseInt(getComputedStyle(char2).left, 10);

        let difY = Math.abs(posY1 - posY2);
        let difX = Math.abs(posX1 - posX2);

        let newHeight = Math.max(minSize, difY + 100);
        let newWidth = Math.max(minSize, difX + 100);

        world.style.height = newHeight + "px";
        world.style.width = newWidth + "px";

        // Optionnel : centrage de la caméra sur le centre entre les deux persos
        let centerX = (posX1 + posX2) / 2 - newWidth / 2;
        let centerY = (posY1 + posY2) / 2 - newHeight / 2;

        world.style.transform = `translate(-50%, -50%) translate(${-centerX}px, ${-centerY}px)`;

    }, 10);

});

// pour bloquer le viewport
window.addEventListener("resize", () => {
    height = window.innerHeight;
    width = window.innerWidth;

    viewport.style.height = height + "px";
    viewport.style.width = width + "px";
});