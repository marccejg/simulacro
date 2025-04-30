export abstract class Instrumento{
    protected nombre:string;
    protected tipo:string;
    constructor(pNombre:string, pTipo:string){
        this.nombre=pNombre;
        this.tipo=pTipo;
    }
    getNombre():string{
        return this.nombre;}
    setNombre(pNombre:string){
    this.nombre=pNombre;
    }
    getTipo():string{
        return this.tipo;
    }        
    setTipo(pTipo:string){
        this.tipo=pTipo;
    }
    
    }
