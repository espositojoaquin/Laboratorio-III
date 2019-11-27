namespace personas{

    export abstract class Persona{
         name:string;
         apellido:string;  

        constructor(nam:string,ape:string){
          this.name = nam;
          this.apellido = ape;
        }
     } 
 }