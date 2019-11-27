var personas;
(function (personas) {
    $("document").ready(function () {
        $("#btn").click(prueba);
    });
    var lista = new Array();
    function Agregar() {
        var nombre = String($("#nombre").val());
        var apellido = String($("#apellido").val());
        var legajo = Number($("#cuil").val());
        var per = new personas.Alumno(nombre, apellido, legajo);
        lista.push(per);
        this.llenarGrilla(lista);
        $('html,body').animate({
            scrollTop: $("#tabla").offset().top
        }, 500);
    }
    personas.Agregar = Agregar;
    function onLoadCheck() {
        this.llenarGrilla(lista);
    }
    personas.onLoadCheck = onLoadCheck;
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
                // $("#tabla").append(textC);
            }
            if (mostrarNombre) {
                var tdNom = document.createElement("td");
                var textNom = document.createTextNode(per.getName());
                tdNom.appendChild(textNom);
                tr.appendChild(tdNom);
                // $("#tabla").append(tdNom);
            }
            if (mostrarApellido) {
                var tdApe = document.createElement("td");
                var textApe = document.createTextNode(per.getApellido());
                tdApe.appendChild(textApe);
                tr.appendChild(tdApe);
                // $("#tabla").append(tdApe);
            }
            $("#tabla").append(tr);
        });
    }
    personas.llenarGrilla = llenarGrilla;
    function FiltrarNombre() {
        var filtro = String($("#txtFiltroNombre").val());
        var arrayFiltrado = lista.filter(function (Cliente) {
            if (Cliente.getName().match("^" + filtro + "[a-zA-Z\s]*")) {
                return true;
            }
            return false;
        });
        this.llenarGrilla(arrayFiltrado);
    }
    personas.FiltrarNombre = FiltrarNombre;
    function Modificar() {
        var resp = Indice();
        if (resp > -1) {
            var nombre = String($("#nombre").val());
            var apellido = String($("#apellido").val());
            var legajo = Number($("#cuil").val());
            var per = new personas.Alumno(nombre, apellido, legajo);
            lista[resp] = per;
            llenarGrilla(lista);
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
            llenarGrilla(lista);
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
