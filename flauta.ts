    import { Instrumento } from "./instrumento";
    
    export class Flauta extends Instrumento{
        private material:string;
        constructor(pNombre:string, pTipo:string,pMaterial:string){
        super(pNombre,pTipo);
        this.material=pMaterial;
    
        }
        getMaterial(){
            return this.material
        }
        setMaterial(pMaterial:string){
            this.material=pMaterial;
        }
        


    }