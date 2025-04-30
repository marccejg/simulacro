import { Instrumento } from "./instrumento";
import { iSeAfina } from "./iSeAfina";

export class Violin extends Instrumento implements iSeAfina{



   afinar(): void{
    return console.log("se afina en 440")
    }
}