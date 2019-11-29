var personas;
(function (personas) {
    var Persona = /** @class */ (function () {
        function Persona(nam, ape, sex, eda) {
            this.name = nam;
            this.apellido = ape;
            this.sexo = sex;
            this.edad = eda;
        }
        return Persona;
    }());
    personas.Persona = Persona;
})(personas || (personas = {}));
