var personas;
(function (personas) {
    $("document").ready(function () {
        $("#btn").click(prueba);
        $('#btnPromediar').click(Promedio);
        $('#nombreApellido').click(NombreYApe);
        $('#btnFiltrar').click(filtrar);
    });
    var lista = new Array();
    var filaMod;
    function Agregar() {
        var nombre = String($("#nombre").val());
        var apellido = String($("#apellido").val());
        var legajo = Number($("#cuil").val());
        var edad = Number($("#edad").val());
        var sexo = String($("#sexo").val());
        var per = new personas.Alumno(nombre, apellido, legajo, sexo, edad);
        lista.push(per);
        this.llenarGrilla2(lista);
        $('html,body').animate({
            scrollTop: $("#tabla").offset().top
        }, 500);
    }
    personas.Agregar = Agregar;
    function onLoadCheck() {
        this.llenarGrilla2(lista);
    }
    personas.onLoadCheck = onLoadCheck;
    function filtrar() {
        var sexo = $('#horarioModal').val();
        var valor = lista.filter(function (alumno) { return alumno.sexo === sexo; });
        llenarGrilla2(valor);
        $('html,body').animate({
            scrollTop: $("#tabla").offset().top
        }, 500);
    }
    personas.filtrar = filtrar;
    function llenarGrilla2(arrayClientes) {
        var mostrarCuil = Boolean($("#mostrarID").is(":checked"));
        var mostrarNombre = Boolean($("#mostrarNombre").is(":checked"));
        var mostrarApellido = Boolean($("#mostrarApellido").is(":checked"));
        var mostrarEdad = Boolean($("#mostrarEdad").is(":checked"));
        var mostrarSexo = Boolean($("#mostrarSexo").is(":checked"));
        var arraynew = new Array();
        arraynew = arrayClientes.map(function (item) {
            var aux = Array();
            if (mostrarNombre) {
                aux.push(item.legajo);
            }
            if (mostrarNombre) {
                aux.push(item.name);
            }
            if (mostrarApellido) {
                aux.push(item.apellido);
            }
            if (mostrarEdad) {
                aux.push(item.edad);
            }
            if (mostrarSexo) {
                aux.push(item.sexo);
            }
            return aux;
        });
        $("#tabla").empty();
        if (mostrarCuil) {
            var th = document.createElement("th");
            var textTh = document.createTextNode("Cuil/legajo");
            th.appendChild(textTh);
            $("#tabla").append(th);
        }
        if (mostrarNombre) {
            var thn = document.createElement("th");
            var textN = document.createTextNode("nombre");
            thn.appendChild(textN);
            $("#tabla").append(thn);
        }
        if (mostrarApellido) {
            var thA = document.createElement("th");
            var textA = document.createTextNode("Apellido");
            thA.appendChild(textA);
            $("#tabla").append(thA);
        }
        if (mostrarEdad) {
            var thE = document.createElement("th");
            var textE = document.createTextNode("Edad");
            thE.appendChild(textE);
            $("#tabla").append(thE);
        }
        if (mostrarSexo) {
            var thS = document.createElement("th");
            var textS = document.createTextNode("Sexo");
            thS.appendChild(textS);
            $("#tabla").append(thS);
        }
        var Ac = document.createElement("th");
        var textAc = document.createTextNode("Accion");
        Ac.appendChild(textAc);
        $("#tabla").append(Ac);
        arraynew.forEach(function (per) {
            var tr = document.createElement("tr");
            if (per[0] != undefined) {
                var tdC = document.createElement("td");
                var textC = document.createTextNode(per[0]);
                tdC.appendChild(textC);
                tr.appendChild(tdC);
            }
            if (per[1] != undefined) {
                var tdNom = document.createElement("td");
                var textNom = document.createTextNode(per[1]);
                tdNom.appendChild(textNom);
                tr.appendChild(tdNom);
            }
            if (per[2] != undefined) {
                var tdApe = document.createElement("td");
                var textApe = document.createTextNode(per[2]);
                tdApe.appendChild(textApe);
                tr.appendChild(tdApe);
            }
            if (per[3] != undefined) {
                var tdEdad = document.createElement("td");
                var textEdad = document.createTextNode(per[3]);
                tdEdad.appendChild(textEdad);
                tr.appendChild(tdEdad);
            }
            if (per[4] != undefined) {
                var tdSex = document.createElement("td");
                var textSex = document.createTextNode(per[4]);
                tdSex.appendChild(textSex);
                tr.appendChild(tdSex);
            }
            var btnMod = document.createElement("button");
            btnMod.id = "btnMod";
            btnMod.className = "btn btn-success";
            btnMod.addEventListener("click", Editar);
            var i = document.createElement("i");
            i.className = "far fa-edit";
            btnMod.appendChild(i);
            tr.appendChild(btnMod);
            $("#tabla").append(tr);
        });
    }
    personas.llenarGrilla2 = llenarGrilla2;
    function Promedio() {
        var sexo = $('#horarioModalReduce').val(), valor = lista.filter(function (alumno) { return alumno.sexo === sexo; }).reduce(function (sumador, item) {
            return sumador + item.edad;
        }, 0) / lista.filter(function (alumno) { return alumno.sexo === sexo; }).length;
        $("#Prom").val(valor);
        console.log(valor);
    }
    personas.Promedio = Promedio;
    function llenarGrilla(arrayClientes) {
        var mostrarCuil = Boolean($("#mostrarID").is(":checked"));
        var mostrarNombre = Boolean($("#mostrarNombre").is(":checked"));
        var mostrarApellido = Boolean($("#mostrarApellido").is(":checked"));
        $("#tabla").empty();
        if (mostrarCuil) {
            var th = document.createElement("th");
            var textTh = document.createTextNode("Cuil/legajo");
            th.appendChild(textTh);
            $("#tabla").append(th);
        }
        if (mostrarNombre) {
            var thn = document.createElement("th");
            var textN = document.createTextNode("nombre");
            thn.appendChild(textN);
            $("#tabla").append(thn);
        }
        if (mostrarApellido) {
            var thA = document.createElement("th");
            var textA = document.createTextNode("Apellido");
            thA.appendChild(textA);
            $("#tabla").append(thA);
        }
        arrayClientes.forEach(function (per) {
            var tr = document.createElement("tr");
            if (mostrarCuil) {
                var tdC = document.createElement("td");
                var textC = document.createTextNode(per.getLegajo().toString());
                tdC.appendChild(textC);
                tr.appendChild(tdC);
            }
            if (mostrarNombre) {
                var tdNom = document.createElement("td");
                var textNom = document.createTextNode(per.getName());
                tdNom.appendChild(textNom);
                tr.appendChild(tdNom);
            }
            if (mostrarApellido) {
                var tdApe = document.createElement("td");
                var textApe = document.createTextNode(per.getApellido());
                tdApe.appendChild(textApe);
                tr.appendChild(tdApe);
            }
            $("#tabla").append(tr);
        });
    }
    personas.llenarGrilla = llenarGrilla;
    function NombreYApe() {
        $("#mostrarID").prop("checked", false);
        $("#mostrarNombre").prop("checked", true);
        $("#mostrarApellido").prop("checked", true);
        $("#mostrarEdad").prop("checked", false);
        $("#mostrarSexo").prop("checked", false);
        llenarGrilla2(lista);
        $('html,body').animate({
            scrollTop: $("#tabla").offset().top
        }, 500);
    }
    personas.NombreYApe = NombreYApe;
    function FiltrarNombre() {
        var filtro = String($("#txtFiltroNombre").val());
        var arrayFiltrado = lista.filter(function (Cliente) {
            if (Cliente.getName().match("^" + filtro + "[a-zA-Z\s]*")) {
                return true;
            }
            return false;
        });
        this.llenarGrilla2(arrayFiltrado);
    }
    personas.FiltrarNombre = FiltrarNombre;
    function Editar(e) {
        $("#mostrarID").prop("checked", true);
        $("#mostrarNombre").prop("checked", true);
        $("#mostrarApellido").prop("checked", true);
        $("#mostrarEdad").prop("checked", true);
        $("#mostrarSexo").prop("checked", true);
        var legajo = e.target.parentNode.children[0].innerHTML;
        var obj = lista.filter(function (item) {
            return legajo == item.legajo;
        });
        $("#nombre").val(obj[0].name);
        $("#apellido").val(obj[0].apellido);
        $("#cuil").val(obj[0].legajo);
        $("#edad").val(obj[0].edad);
        $("#sexo").val(obj[0].sexo);
        filaMod = e.target.parentNode;
        $('html,body').animate({
            scrollTop: $("#formulario").offset().top
        }, 500);
    }
    personas.Editar = Editar;
    function Modificar() {
        var resp = Indice();
        if (resp > -1) {
            var nombre = String($("#nombre").val());
            var apellido = String($("#apellido").val());
            var legajo = Number($("#cuil").val());
            var edad = Number($("#edad").val());
            var sexo = String($("#sexo").val());
            var per = new personas.Alumno(nombre, apellido, legajo, sexo, edad);
            lista[resp] = per;
            llenarGrilla2(lista);
            $('html,body').animate({
                scrollTop: $("#tabla").offset().top
            }, 500);
        }
        else {
            alert("El legajo ingresado no existe");
        }
    }
    personas.Modificar = Modificar;
    function Eliminar() {
        var resp = Indice();
        if (resp > -1) {
            lista.splice(resp, 1);
            llenarGrilla2(lista);
        }
        else {
            alert("El legajo ingresado no existe");
        }
    }
    personas.Eliminar = Eliminar;
    function Indice() {
        var legajo = Number($("#cuil").val());
        var legajos = lista.map(function (item) {
            return item.legajo;
        });
        var pos = legajos.indexOf(legajo);
        return pos;
    }
    function prueba() {
        alert("Funciona");
        $("#table").show();
    }
    personas.prueba = prueba;
})(personas || (personas = {}));
