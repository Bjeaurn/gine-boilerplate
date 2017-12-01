import { Config, Gine } from "gine"

const cfg: Config = {
    canvas: <HTMLCanvasElement> document.querySelector("#canvas"),
    height: 400,
    maxFps: 60,
    tickRate: 110,
    tileSize: 16,
    usesTiles: true,
    width: 600,
}

const game = new Gine(cfg)
game.start()
