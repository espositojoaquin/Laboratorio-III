namespace personas{

    export abstract class Persona{
         name:string;
         apellido:string;
         sexo:string;
         edad:number;  

        constructor(nam:string,ape:string,sex:string,eda:number){
          this.name = nam;
          this.apellido = ape;
          this.sexo = sex;
          this.edad = eda;
        }
     } 
 }