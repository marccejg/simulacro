import { Instrumento } from "./instrumento";
import { iSeAfina } from "./iSeAfina";

export class Piano extends Instrumento implements iSeAfina {
    private cantTeclas: number;
    constructor(pNombre: string, pTipo: string, pCantTeclas: number) {
        super(pNombre, pTipo);
        this.cantTeclas = pCantTeclas;
    }
    getCantTeclas() {
        return this.cantTeclas
    }
    setCantTeclas(pCantTeclas: number): void {
        this.cantTeclas = pCantTeclas
    }

    afinar(): void {
        return console.log("se afina en 440")
    };

};