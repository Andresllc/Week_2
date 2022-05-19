"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elementos = Vector1(n, k);
        function Vector1(n, k) {
            var vector1 = [];
            for (var i = 0; i < n; i++) {
                vector1[i] = (Math.round(Math.random() * k));
            }
            return vector1;
        }
    }
    //Metodos
    Vector.prototype.print = function () {
        console.log(this.elementos);
    };
    Vector.prototype.add = function (v1) {
        for (var i = 0; i < this.elementos.length; i++) {
            this.elementos[i] = this.elementos[i] + v1.elementos[i];
        }
        return this;
    };
    Vector.prototype.subs = function (v1) {
        for (var i = 0; i < this.elementos.length; i++) {
            this.elementos[i] = this.elementos[i] - v1.elementos[i];
        }
        return this;
    };
    Vector.prototype.mult = function (v1) {
        for (var i = 0; i < this.elementos.length; i++) {
            this.elementos[i] = this.elementos[i] * v1.elementos[i];
        }
        return this;
    };
    Vector.prototype.multn = function (n) {
        for (var i = 0; i < this.elementos.length; i++) {
            this.elementos[i] = this.elementos[i] * n;
        }
        return this;
    };
    return Vector;
}());
exports.Vector = Vector;
