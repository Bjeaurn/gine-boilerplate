import { Gine, Config } from 'gine'

const cfg: Config = {
    maxFps: 60,
    tickRate: 110,
    width: 600,
    height: 400,
    usesTiles: true,
    tileSize: 16,
    canvas: <HTMLCanvasElement>document.querySelector('#canvas')
}

const game = new Gine(cfg)
console.log('test')
console.log(game)
console.log(game.canvas)