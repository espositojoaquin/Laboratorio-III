namespace personas{
    $("document").ready(function(){
        
        $("#btn").click(prueba);
        
    })
    var lista:Array<Alumno> = new Array();
    export function Agregar()
    {  
      let nombre:string = String($("#nombre").val());
      let apellido:string = String($("#apellido").val());
      let legajo:number = Number($("#cuil").val());
     
      let per = new Alumno(nombre,apellido,legajo);
      lista.push(per);  
      this.llenarGrilla(lista);
      $('html,body').animate({
        scrollTop: $("#tabla").offset().top
    }, 500);

    }

    export function onLoadCheck()
    {
        this.llenarGrilla(lista);
    }

    export function llenarGrilla(arrayClientes: Array<Alumno>)
    {
        let mostrarCuil: boolean = Boolean($("#mostrarID").is(":checked"));
        let mostrarNombre: boolean = Boolean($("#mostrarNombre").is(":checked"));
        let mostrarApellido: boolean = Boolean($("#mostrarApellido").is(":checked"));
       
            $("#tabla").empty();
            if(mostrarCuil)
            {
                let th = document.createElement("th");
                let textTh = document.createTextNode("Cuil/legajo")
                th.appendChild(textTh);
                $("#tabla").append(th);
            }
            if(mostrarNombre)
            {
                let thn = document.createElement("th");
                let textN = document.createTextNode("nombre")
                thn.appendChild(textN);
                $("#tabla").append(thn);
            }
            if(mostrarApellido)
            {
                let thA = document.createElement("th");
                let textA = document.createTextNode("Apellido")
                thA.appendChild(textA);
                $("#tabla").append(thA);
            }

            arrayClientes.forEach(function (per) {

                let tr = document.createElement("tr");
                if (mostrarCuil) {
                  let tdC = document.createElement("td");
                  let textC = document.createTextNode(per.getLegajo().toString())
                  tdC.appendChild(textC);
                  tr.appendChild(tdC);
                 // $("#tabla").append(textC);
                }
                if (mostrarNombre) { 
                    let tdNom = document.createElement("td");
                    let textNom = document.createTextNode(per.getName())
                    tdNom.appendChild(textNom);
                    tr.appendChild(tdNom);
                   // $("#tabla").append(tdNom);

                }
                   
                if (mostrarApellido) {
                    let tdApe = document.createElement("td");
                    let textApe = document.createTextNode(per.getApellido())
                    tdApe.appendChild(textApe);
                    tr.appendChild(tdApe);
                   // $("#tabla").append(tdApe);
                }

                $("#tabla").append(tr);
             
             });

    } 

    export function FiltrarNombre(){
        let filtro: String = String($("#txtFiltroNombre").val());
        let arrayFiltrado: Array<Alumno> = lista.filter(function (Cliente: Alumno) {
            if (Cliente.getName().match("^" + filtro + "[a-zA-Z\s]*")) {
                return true;
            }
            return false;
        });
        this.llenarGrilla(arrayFiltrado);
    }
    
    export function Modificar()
    {
        let resp:number = Indice();

        if(resp > -1)
        {   
            let nombre:string = String($("#nombre").val());
            let apellido:string = String($("#apellido").val());
            let legajo:number = Number($("#cuil").val());
       
            let per = new Alumno(nombre,apellido,legajo);
            
            lista[resp] = per;
            llenarGrilla(lista);
        }
        else
        {
            alert("El legajo ingresado no existe");
        }
    } 
    export function Eliminar()
    { 
        let resp:number = Indice();
        if(resp > -1)
        {
            lista.splice(resp,1);
            llenarGrilla(lista);
        }
        else
        {
            alert("El legajo ingresado no existe");
        }
       
        
    }
    function Indice():number
    {   
        let legajo:number = Number($("#cuil").val());

        let legajos:Array<number> = lista.map(function (item) {
            
            return item.legajo;
        });

        let pos:number = legajos.indexOf(legajo);
        return pos;
       
    }
    export function prueba()
    {
        alert("Funciona");
        $("#table").show();
        
    }
    
}