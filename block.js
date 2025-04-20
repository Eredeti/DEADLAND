//Définition objet block
var block = {
    pos_x : 0,
    pos_y : 0,
    width : 0,
    height : 0, 
    label : "",

    //Fonction qui si les chars touche le bloc
    hit: function (x, y, w = 50, h = 50) {
        //taille des blocks --> TODO
        return (
            x < this.pos_x + this.width &&
            x + w > this.pos_x &&
            y < this.pos_y + this.height &&
            y + h > this.pos_y
        );
    }    
}

const tab_blocks = [
[200,200,50,200],
[300,200,100,50],
[50,650,800,20]
];

//tableau d'objet block
var tab_block_obj = [];

// Parcours du tableau pour créer chaque bloc
tab_blocks.forEach((coords) => {
    let new_block_dom = document.createElement("div");
    new_block_dom.setAttribute('class','block');

    // Crée un nouvel objet basé sur le prototype block
    let new_block = Object.create(block);

    new_block.pos_x = coords[0];
    new_block.pos_y = coords[1];
    new_block.width = coords[2];
    new_block.height = coords[3];
    new_block.label = new_block.pos_x + ";"+ new_block.pos_y + "";

    // Ajout du style correspondant
    new_block_dom.innerText = new_block.label;
    new_block_dom.style.position = 'absolute';
    new_block_dom.style.left = new_block.pos_x + 'px';
    new_block_dom.style.top = new_block.pos_y + 'px';
    new_block_dom.style.width = new_block.width + 'px';
    new_block_dom.style.height = new_block.height + 'px';

    // Ajout dans le DOM et dans le tableau des objets
    document.getElementById("world").appendChild(new_block_dom);
    tab_block_obj.push(new_block);
});

const verif_hit = function(x, y, w = 50, h = 50) {
    for (let obj of tab_block_obj) {
        if (obj.hit(x, y, w, h)) return false;
    }
    return true;
};

