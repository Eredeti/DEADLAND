var height = window.innerHeight;
var width = window.innerWidth;

var tab_blocks_border = [
    [0,0,50,height, "gauche"],
    [width-50,0,50,height, "droite"],
    [0,height-50,width,50,"bas"],
    [0,0,width,50,"haut"],
    ];


function draw_border() {
    tab_blocks_border.forEach((bborder)=>{
        let new_block_border_dom = document.createElement("div");
        new_block_border_dom.setAttribute('class','border');
        new_block_border_dom.setAttribute('id', bborder[4]);

        // Crée un nouvel objet basé sur le prototype block
        let new_block_border = Object.create(block);

        new_block_border.pos_x = bborder[0];
        new_block_border.pos_y = bborder[1];
        new_block_border.width = bborder[2];
        new_block_border.height = bborder[3];
        new_block_border.label = bborder[4];

        // Ajout du style correspondant
        new_block_border_dom.innerText = new_block_border.label;
        new_block_border_dom.style.position = 'absolute'; // Ou 'relative' si nécessaire
        new_block_border_dom.style.left = (new_block_border.pos_x / width) * 100 + '%'; // Utilisation de pourcentage basé sur la largeur de la fenêtre
        new_block_border_dom.style.top = (new_block_border.pos_y / height) * 100 + '%'; // Utilisation de pourcentage basé sur la hauteur de la fenêtre
        new_block_border_dom.style.width = (new_block_border.width / width) * 100 + 'vw'; // Largeur en fonction de la taille de la fenêtre
        new_block_border_dom.style.height = (new_block_border.height / height) * 100 + 'vh'; // Hauteur en fonction de la taille de la fenêtre

        // Ajout dans le DOM et dans le tableau des objets
        document.getElementById("world").appendChild(new_block_border_dom);
    });
}

draw_border();

window.addEventListener("resize", () => {
    height = window.innerHeight;
    width = window.innerWidth;

    world.removeChild(document.getElementById(tab_blocks_border[0][4]));
    world.removeChild(document.getElementById(tab_blocks_border[1][4]));
    world.removeChild(document.getElementById(tab_blocks_border[2][4]));
    world.removeChild(document.getElementById(tab_blocks_border[3][4]));

    tab_blocks_border[0][3] = height;//gauche

    tab_blocks_border[1][0] = width-50;//droite
    tab_blocks_border[1][3] = height;

    tab_blocks_border[2][1] = height-50;//bas
    tab_blocks_border[2][2] = width;
    
    tab_blocks_border[3][2] = width;//gauche

    draw_border();
});

    
