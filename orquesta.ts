import { Instrumento } from "./instrumento"

export class Orquesta {
    private instrumentos: Instrumento[];

    constructor() {
        this.instrumentos=[];
    }
    ejecutarOrquesta(): void {
        console.log(this.getInstrumentos())
    }

    setInstrumento(instrumento: Instrumento) {
        this.instrumentos.push(instrumento)
    }

    getInstrumentos(): Instrumento[] {
        return this.instrumentos;
    }
}
