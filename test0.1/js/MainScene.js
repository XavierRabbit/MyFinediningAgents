import Player from "./Player.js";

export default class MainScene extends Phaser.Scene {
    constructor(){
        super("MainScene");
    }

    preload(){
        Player.preload(this);
        this.load.image('tiles', 'assests/images/medieval tileset interior.png')
        this.load.tilemapTiledJSON('map', 'assests/images/map.json')
    }

    create(){
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('medieval tileset interior','tiles',16,16,0,0);
        const layer1 = map.createLayer('Ground',tileset,0,0);
        const layer2 = map.createLayer('Chair',tileset,0,0);
        const layer3 = map.createLayer('Table',tileset,0,0);
        // layer2.setCollisionByProperty({collides:true});
        layer3.setCollisionByProperty({collides:true});
        // this.matter.world.convertTilemapLayer(layer2);
        this.matter.world.convertTilemapLayer(layer3);
    
        this.player = new Player({scene:this, x:0, y:0, texture:'ch1', frame:'townsfolk_m_idle_1'});
        let testplayer = new Player({scene:this, x:100, y:100, texture:'ch1', frame:'townsfolk_m_idle_1'});
        
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })

    }

    update(){
        this.player.update();
    }

}