var personas;
(function (personas) {
    var Persona = /** @class */ (function () {
        function Persona(nam, ape) {
            this.name = nam;
            this.apellido = ape;
        }
        return Persona;
    }());
    personas.Persona = Persona;
})(personas || (personas = {}));
