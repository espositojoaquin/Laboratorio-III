var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var personas;
(function (personas) {
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(name, apellido, leg, sexo, eda) {
            var _this = _super.call(this, name, apellido, sexo, eda) || this;
            _this.legajo = leg;
            return _this;
        }
        Alumno.prototype.getName = function () {
            return this.name;
        };
        Alumno.prototype.getApellido = function () {
            return this.apellido;
        };
        Alumno.prototype.getLegajo = function () {
            return this.legajo;
        };
        Alumno.prototype.getSexo = function () {
            return this.sexo;
        };
        Alumno.prototype.getEdad = function () {
            return this.edad;
        };
        return Alumno;
    }(personas.Persona));
    personas.Alumno = Alumno;
})(personas || (personas = {}));
