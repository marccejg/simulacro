import { Instrumento } from "./instrumento";
import { iSeAfina } from "./iSeAfina";

export class Violin extends Instrumento implements iSeAfina{
private cantCuerdas:number;
constructor(pNombre:string, pTipo:string, pCantCuerdas:number){
    super(pNombre,pTipo);
    this.cantCuerdas=pCantCuerdas;
}
getCantCuerdas(){
    return this.cantCuerdas;
}
setCantCuerdas(pCantCuerdas:number):void{
    this.cantCuerdas=pCantCuerdas
}
   afinar(): void{
    return console.log("se afina en 440")
    }
}