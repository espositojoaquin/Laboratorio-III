namespace personas
{
   export  class  Alumno extends Persona{   // si animal fuera una clase lo puedo heredar asi
        legajo:number; 

        public constructor(name:string,apellido:string,leg:number,sexo:string,eda:number)
        { super(name,apellido,sexo,eda); 
            
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
        public getSexo():string{
            return this.sexo;
        }
        public getEdad():number{
            return this.edad;
        }
        


    } 

}