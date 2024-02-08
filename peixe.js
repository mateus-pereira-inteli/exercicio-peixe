var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var peixinho;
var tubarao;

var resposta = "Sim! Já havia programado antes, iniciei em um estágio trabalhando na área de desenvolvimento web, focado no desenvolvimento de sites, sistemas e ecommerces.";
console.log(resposta);

function preload() {
    //Carregar Mar
    this.load.image('mar', './assets/bg_azul-escuro.png');
    //Carregar Logo
    this.load.image('logo', './assets/logo-inteli_branco.png');
    //Carregar Peixe
    this.load.image('peixe', './assets/peixes/peixinho_laranja.png');
    //Carregar Tubarão
    this.load.image('tubarao', './assets/peixes/tubarao.png');
    //Carregar Coral
    this.load.image('coral', './assets/coral.png');
}

function create() {
    //Adiciona o Mar
    this.add.image(400, 300, 'mar');

    //Adiciona o Logo
    this.add.image(400, 525, 'logo').setScale(.5);

    //Adiciona o Coral
    this.add.image(90, 525, 'coral');

    //Adiciona o Peixe
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setOrigin(0.5, 0.5).setFlip(true, false);

    //Adiciona o Tuburão
    tubarao = this.add.image(400, 300, 'tubarao');
    tubarao.setOrigin(.5, .5).setFlip(true, false);
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    tubarao.x = this.input.x - 200;
    tubarao.y = this.input.y;

}