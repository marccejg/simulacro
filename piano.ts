import { Instrumento } from "./instrumento";
import { iSeAfina } from "./iSeAfina";

export class Piano extends Instrumento implements iSeAfina{
    constructor(){
        super()
    }


    afinar(): void{
        
    }
    
}