var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}

var game = new Phaser.Game(config);

var peixinho;

var tuba;

function preload() {
    this.load.image('oceano', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png');
    this.load.image('tuba', 'assets/peixes/tubarao.png');

}

function create() {
    this.add.image(400, 300, 'oceano');
    this.add.image(400, 525, 'logo').setScale(0.5);
   
    tuba = this.add.image(200, 250, 'tuba');
    //tuba.shake(200)


    peixinho = this.add.image(400, 300, 'peixe');
   peixinho.setFlip(true, false);

   /*peixinho.on('invisible', this.eat);*/

   /*peixinho.on(
    "pointerover",
    function (x=200, y = 250) {
      setVisible(false);
    }, scene
);*/

}

/*function eat() {
    peixinho.setVisible(false);
    peixinho.x.y = this.tuba;
}*/

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
   /*this.input.on('pointerover', this.shake);*/
    /*if(peixinho.x = this.tuba, peixinho.y = this.tuba){
        peixinho.setVisible(false);*/


}

/*function shake () {
    this.tuba.shake(500);
}*/
