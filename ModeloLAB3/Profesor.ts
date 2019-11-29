namespace personas
{
   export class Profesor extends Persona{   // si animal fuera una clase lo puedo heredar asi
        cuil:number; 
        public constructor(name:string,apellido:string,cui:number)
        { super(name,apellido); 
            
            this.cuil = cui;
        }  
    } 

}