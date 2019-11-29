namespace personas{
    $("document").ready(function(){
        
        $("#btn").click(prueba);
        $('#btnPromediar').click(Promedio);
        $('#nombreApellido').click(NombreYApe);
        $('#btnFiltrar').click(filtrar);
       
        
    })
    var lista:Array<Alumno> = new Array();
    var filaMod;
    export function Agregar()
    { 
        if(validarLegajo())
        {

            let nombre:string = String($("#nombre").val());
            let apellido:string = String($("#apellido").val());
            let legajo:number = Number($("#cuil").val());
            let edad:number = Number($("#edad").val());
            let sexo:string =  String($("#sexo").val());
           
            let per = new Alumno(nombre,apellido,legajo,sexo,edad);
            lista.push(per);  
            this.llenarGrilla2(lista);
            $('html,body').animate({
              scrollTop: $("#tabla").offset().top
          }, 500);
        } 
        else
        {
         alert("El legajo ingresado corresponde a otro usuario");
        }

    }

    export function onLoadCheck()
    {
        this.llenarGrilla2(lista);
    }
     
  export function filtrar()
  { 
    let sexo = $('#horarioModal').val();
       
    let valor:Array<Alumno> = lista.filter(alumno => alumno.sexo === sexo);
     
    llenarGrilla2(valor);
    $('html,body').animate({
        scrollTop: $("#tabla").offset().top
    }, 500);
    
  }

    export function llenarGrilla2(arrayClientes: Array<Alumno>)
    { 
        let mostrarCuil: boolean = Boolean($("#mostrarID").is(":checked"));
        let mostrarNombre: boolean = Boolean($("#mostrarNombre").is(":checked"));
        let mostrarApellido: boolean = Boolean($("#mostrarApellido").is(":checked"));
        let mostrarEdad: boolean = Boolean($("#mostrarEdad").is(":checked"));
        let mostrarSexo: boolean = Boolean($("#mostrarSexo").is(":checked"));
        let arraynew:Array<object> = new Array(); 

       arraynew = arrayClientes.map(function(item){
            let aux = Array();
            if(mostrarNombre)
            {
                aux.push(item.legajo);

            }   
            if(mostrarNombre) 
            {
                aux.push(item.name);
            }
            if(mostrarApellido)
            {
                aux.push(item.apellido);
            }
            if(mostrarEdad)
            {
                aux.push(item.edad);
            }
            if(mostrarSexo)
            {
                aux.push(item.sexo);
            }
            return aux;
        }) 
        $("#tabla").empty();
        if(mostrarCuil)
        {
            let th = document.createElement("th");
            let textTh = document.createTextNode("Cuil/legajo");
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
        if(mostrarEdad)
        {
            let thE = document.createElement("th");
            let textE = document.createTextNode("Edad")
            thE.appendChild(textE);
            $("#tabla").append(thE);
        }
        if(mostrarSexo)
        {
            let thS = document.createElement("th");
            let textS = document.createTextNode("Sexo")
            thS.appendChild(textS);
            $("#tabla").append(thS);
        } 
        let Ac = document.createElement("th");
            let textAc = document.createTextNode("Accion")
            Ac.appendChild(textAc);
            $("#tabla").append(Ac);

        arraynew.forEach(function(per){
            let tr = document.createElement("tr");
             if(per[0]!=undefined)
             {
                 let tdC = document.createElement("td");
                 let textC = document.createTextNode(per[0]);
                 tdC.appendChild(textC);
                 tr.appendChild(tdC);
             }
             
             if(per[1]!=undefined)
             {
                 let tdNom = document.createElement("td");
                 let textNom = document.createTextNode(per[1]);
                 tdNom.appendChild(textNom);
                 tr.appendChild(tdNom);
                

             }
             if(per[2]!=undefined)
             {
                 let tdApe = document.createElement("td");
                 let textApe = document.createTextNode(per[2]);
                 tdApe.appendChild(textApe);
                 tr.appendChild(tdApe);

             }
             if(per[3]!=undefined)
             {
                 let tdEdad = document.createElement("td");
                 let textEdad = document.createTextNode(per[3]);
                 tdEdad.appendChild(textEdad);
                 tr.appendChild(tdEdad);

             }
             if(per[4]!=undefined)
             {
                 let tdSex = document.createElement("td");
                 let textSex = document.createTextNode(per[4]);
                 tdSex.appendChild(textSex);
                 tr.appendChild(tdSex);

             } 
             let btnMod = document.createElement("button");
             btnMod.id="btnMod";
             btnMod.className="btn btn-success";
             btnMod.addEventListener("click",Editar);
             let i= document.createElement("i");
             i.className="far fa-edit";
             btnMod.appendChild(i);
             tr.appendChild(btnMod);
            $("#tabla").append(tr);
        })     
    } 

    export function Promedio()
    {
      
        let sexo = $('#horarioModalReduce').val(),
       
        valor = lista.filter(alumno => alumno.sexo === sexo).reduce(function(sumador, item){
            return sumador + item.edad;
        },0) / lista.filter(alumno => alumno.sexo === sexo).length;
        
        $("#Prom").val(valor);
       console.log(valor);
          
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
                let textTh = document.createTextNode("Cuil/legajo");
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
                
                }
                if (mostrarNombre) { 
                    let tdNom = document.createElement("td");
                    let textNom = document.createTextNode(per.getName())
                    tdNom.appendChild(textNom);
                    tr.appendChild(tdNom);
                   

                }
                   
                if (mostrarApellido) {
                    let tdApe = document.createElement("td");
                    let textApe = document.createTextNode(per.getApellido())
                    tdApe.appendChild(textApe);
                    tr.appendChild(tdApe);
                  
                }

                $("#tabla").append(tr);
             
             });

    } 
    export function NombreYApe()
    {
        $("#mostrarID").prop("checked",false);
        $("#mostrarNombre").prop("checked",true);
        $("#mostrarApellido").prop("checked",true);
        $("#mostrarEdad").prop("checked",false);
        $("#mostrarSexo").prop("checked",false);
        llenarGrilla2(lista);
        $('html,body').animate({
            scrollTop: $("#tabla").offset().top
        }, 500);
    }

    export function FiltrarNombre(){
        let filtro: String = String($("#txtFiltroNombre").val());
        let arrayFiltrado: Array<Alumno> = lista.filter(function (Cliente: Alumno) {
            if (Cliente.getName().match("^" + filtro + "[a-zA-Z\s]*")) {
                return true;
            }
            return false;
        });
        this.llenarGrilla2(arrayFiltrado);
    }
    export function Editar(e)
    {  
        $("#mostrarID").prop("checked",true);
        $("#mostrarNombre").prop("checked",true);
        $("#mostrarApellido").prop("checked",true);
        $("#mostrarEdad").prop("checked",true);
        $("#mostrarSexo").prop("checked",true);
       
        let legajo = e.target.parentNode.children[0].innerHTML;
        let obj= lista.filter(function(item){
            return legajo == item.legajo
        })
   
        $("#nombre").val(obj[0].name)
        $("#apellido").val(obj[0].apellido)
        $("#cuil").val(obj[0].legajo)
        $("#edad").val(obj[0].edad)
        $("#sexo").val(obj[0].sexo);
     
        filaMod=e.target.parentNode;
        $('html,body').animate({
            scrollTop: $("#navegador").offset().top
        }, 500);
    } 

    export function validarNombreYApe()
    {
        if($("#nombre").val()=="")
        {
            $("#nombre").addClass("has-error has-feedback");
        }
        else
        {
            $("#nombre").removeClass("has-error has-feedback"); 
        }
        if($("#apellido").val()=="")
        {
            $("#apellido").addClass("has-error has-feedback");
        }
        else
        {
            $("#apellido").removeClass("has-error has-feedback"); 
        }
    }

    export function Modificar()
    {
        let resp:number = Indice();

        if(resp > -1)
        {   
            let nombre:string = String($("#nombre").val());
            let apellido:string = String($("#apellido").val());
            let legajo:number = Number($("#cuil").val());
            let edad:number = Number($("#edad").val());
            let sexo:string =  String($("#sexo").val());
       
            let per = new Alumno(nombre,apellido,legajo,sexo,edad);
            
            lista[resp] = per;
            llenarGrilla2(lista);
            $('html,body').animate({
                scrollTop: $("#tabla").offset().top
            }, 500);
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
            llenarGrilla2(lista);
            
           
           $('html,body').animate({
           scrollTop: $("#tabla").offset().top
           }, 500);
        }
        else
        {
            alert("El legajo ingresado no existe");
        }        
        
    } 
    export function validarLegajo():boolean
    {
        let legajo:number = Number($("#cuil").val()); 
        let retorno:boolean=false;
        let resp = lista.filter(function(item){
            return item.legajo == legajo;
        })
        if(resp.length==0)
        {
            retorno = true;
        }
        
     return retorno;
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