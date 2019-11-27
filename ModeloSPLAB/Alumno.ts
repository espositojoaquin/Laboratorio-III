namespace personas
{
   export  class  Alumno extends Persona{   // si animal fuera una clase lo puedo heredar asi
        legajo:number; 

        public constructor(name:string,apellido:string,leg:number)
        { super(name,apellido); 
            
            this.legajo=leg;
        } 
        public getName():string{
            return this.name;
        }
        public getApellido():string{
            return this.apellido;
        }
        public getLegajo():number{
            return this.legajo;
        }

    } 

}