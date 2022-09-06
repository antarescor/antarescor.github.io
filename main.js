(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9FI":
/*!****************************************************************!*\
  !*** ./src/app/detalle-proyecto/detalle-proyecto.component.ts ***!
  \****************************************************************/
/*! exports provided: DetalleProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleProyectoComponent", function() { return DetalleProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_proyecto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/proyecto */ "RmHo");
/* harmony import */ var _services_proyectos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/proyectos.service */ "uON1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DetalleProyectoComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const descripcion_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](descripcion_r4);
} }
function DetalleProyectoComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.proyectoDetalle.linkRepo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetalleProyectoComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.proyectoDetalle.linkLive, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetalleProyectoComponent_a_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.proyectoDetalle.linkVideo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class DetalleProyectoComponent {
    constructor(proyectoInyectado, ruta) {
        this.proyectoInyectado = proyectoInyectado;
        this.ruta = ruta;
        this.proyectoDetalle = new _models_proyecto__WEBPACK_IMPORTED_MODULE_1__["Proyecto"]();
        this.lenguajes = "";
        this.proyectoDetalle = this.proyectoInyectado.proyectoDetalle;
        this.descripcionList = this.proyectoDetalle.descripcion.split("#");
        var coma = " | ";
        for (var leng of this.proyectoDetalle.lenguajes) {
            if (leng == this.proyectoDetalle.lenguajes[this.proyectoDetalle.lenguajes.length - 1]) {
                coma = "";
            }
            this.lenguajes = this.lenguajes + leng + coma;
        }
    }
    ngOnInit() {
    }
    back() {
        this.ruta.navigateByUrl('portafolio');
    }
}
DetalleProyectoComponent.ɵfac = function DetalleProyectoComponent_Factory(t) { return new (t || DetalleProyectoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proyectos_service__WEBPACK_IMPORTED_MODULE_2__["ProyectosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DetalleProyectoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalleProyectoComponent, selectors: [["app-detalle-proyecto"]], decls: 33, vars: 9, consts: [[1, "contenedor"], [1, "titulo"], ["type", "button", 3, "click"], ["src", "../../assets/iconos/fi-snsuxm-times-solid.png", "alt", "close icon", 1, "icon-close", "mx-2"], [1, "contenidoIMG", "col"], [1, "row"], [1, "textoGeneral", "col-md-5", "col-sm-12"], [1, "card-img-top", 3, "src", "alt"], [1, "descripcion", "textoGeneral", "col-md-7", "col-sm-12"], [4, "ngFor", "ngForOf"], [1, "textoGeneral"], [1, "negrita"], [1, "item-info"], [1, "row", "justify-content-end", "mr-1"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["src", "../../assets/iconos/fi-snluxm-code.png", "alt", "fi-snluxm-code", 1, "icon-link", "mx-2"], ["src", "../../assets/iconos/fi-snluxm-globe-solid.png", "alt", "fi-snluxm-globe-solid", 1, "icon-link", "mx-2"], ["data-toggle", "tooltip", "data-placement", "top", "title", "ver video", "src", "../../assets/iconos/fi-snluxm-youtube.png", "alt", "fi-snluxm-youtube", 1, "icon-link", "mx-2"]], template: function DetalleProyectoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalleProyectoComponent_Template_a_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetalleProyectoComponent_p_11_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tipo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lenguajes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DetalleProyectoComponent_a_30_Template, 2, 1, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DetalleProyectoComponent_a_31_Template, 2, 1, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DetalleProyectoComponent_a_32_Template, 2, 1, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.proyectoDetalle.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/proyectos/", ctx.proyectoDetalle.titulo, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx.proyectoDetalle.titulo, ".jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.descripcionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.proyectoDetalle.tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lenguajes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proyectoDetalle.linkRepo != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proyectoDetalle.linkLive != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.proyectoDetalle.linkVideo != "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n.contenidoIMG[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  margin-bottom: 2vh;\n  display: flex;\n  justify-content: space-evenly;\n}\n.descripcion[_ngcontent-%COMP%] {\n  padding-right: 6vw;\n  margin-bottom: 2vh;\n}\n.titulo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: #649800 groove;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 5vh;\n  margin-top: 2vh;\n  margin-bottom: 1vh;\n  text-transform: capitalize;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 5vh;\n  color: #2a2b30;\n}\nh1[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\n  font-family: Georgia;\n  font-weight: 400;\n  color: #2a2b30;\n}\n.btn-xl[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  padding: 1rem 1rem;\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n  background-color: #2a2b30;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #649800;\n  font-size: 2.5rem;\n}\n.icon-link[_ngcontent-%COMP%] {\n  height: 2.1rem;\n  width: 2.1rem;\n}\n.icon-link[_ngcontent-%COMP%]:hover {\n  background-color: #649800;\n}\n.icon-close[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: #649800;\n}\n@media screen and (max-width: 780px) {\n  .card-img-top[_ngcontent-%COMP%] {\n    margin-top: 0vh;\n    margin-bottom: 4vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvZGV0YWxsZS1wcm95ZWN0by9kZXRhbGxlLXByb3llY3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKO0FBM0VBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQThFSjtBQTNFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUE4RUo7QUExRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBNkVKO0FBMUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBNkVKO0FBMUVBO0VBQ0ksY0FBQTtFQUNBLGNEZFc7QUMyRmY7QUExRUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0RwQlc7QUNpR2Y7QUF2RUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJEaENXO0VDa0NYLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsY0R2Q2M7RUN3Q2QsaUJBQUE7QUF3RUo7QUFyRUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQXdFSjtBQXJFQTtFQUNJLHlCRGpEYztBQ3lIbEI7QUFyRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRHZEYztBQytIbEI7QUFuRUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQXNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZS1wcm95ZWN0by9kZXRhbGxlLXByb3llY3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL3Ncbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7IFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuXG4vLyAgbWlzIHZhcmlhYmxlcyB5IGNvbG9yZXMgZ2xvYmFsZXNcbiR2ZXJkZS1jbGFybzIgOiNBRkRCMjk7IFxuJHZlcmRlLW9zY3VybzogIzU1QzYyNTsgXG5cbiR2ZXJkZS1wcmltYXJ5IDojOThDOTAwOyBcbiR2ZXJkZS1zZWN1bmRhcnk6ICM2NDk4MDA7XG4kZ3Jpcy1wcmltYXJ5OiAjMmEyYjMwOyBcblxuJGFtYXJpbGxvLWFjdGl2ZTogI2ZmZWUwMDtcbiRibGFuY28tcGVybGE6ICNlZmVmZWY7IFxuLy8gJGJsYW5jby1wZXJsYTogI2RiZDZjYTsgXG5cblxuI3BhcnRpY2xlcy1qc3tcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIG1hcmdpbi1yaWdodDogNHZ3OyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvLXBlcmxhO1xuICAgIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3N7ICAgXG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XG4gfVxuIFxuIC50ZXh0b0dlbmVyYWx7ICAgIFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbGluZS1oZWlnaHQgOiAxLjVyZW07XG4gfVxuXG4uc3VidGl0dWxvcywgLnRleHRvR2VuZXJhbHtcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiB9XG5cbi5uZWdyaXRhe1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuLmJ0bi1wcmluY2lwYWx7XG4gICAgcGFkZGluZzogMS4ydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtcHJpbWFyeTtcbn1cblxuaHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgye1xuICAgIGNvbG9yOiAkZ3Jpcy1wcmltYXJ5O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGV7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuXG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbnMgaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4jcGFydGljbGVzLWpzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBtYXJnaW4tbGVmdDogNHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uc3VidGl0dWxvcyB7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAzdnc7XG59XG5cbi50ZXh0b0dlbmVyYWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWwge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLm5lZ3JpdGEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjNjQ5ODAwO1xufVxuXG4uYnRuLXByaW5jaXBhbCB7XG4gIHBhZGRpbmc6IDEuMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xuICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbmNpcGFsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4QzkwMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjMmEyYjMwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGUge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xufVxuXG4uY29udGVuaWRvSU1HIHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmRlc2NyaXBjaW9uIHtcbiAgcGFkZGluZy1yaWdodDogNnZ3O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5cbi50aXR1bG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206ICM2NDk4MDAgZ3Jvb3ZlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNXZoO1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIG1hcmdpbi1ib3R0b206IDF2aDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmkge1xuICBmb250LXNpemU6IDV2aDtcbiAgY29sb3I6ICMyYTJiMzA7XG59XG5cbmgxLCBpIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWE7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMmEyYjMwO1xufVxuXG4uYnRuLXhsIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYjMwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM2NDk4MDA7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uaWNvbi1saW5rIHtcbiAgaGVpZ2h0OiAyLjFyZW07XG4gIHdpZHRoOiAyLjFyZW07XG59XG5cbi5pY29uLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xufVxuXG4uaWNvbi1jbG9zZSB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk4MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jYXJkLWltZy10b3Age1xuICAgIG1hcmdpbi10b3A6IDB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA0dmg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleProyectoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detalle-proyecto',
                templateUrl: './detalle-proyecto.component.html',
                styleUrls: ['./detalle-proyecto.component.scss']
            }]
    }], function () { return [{ type: _services_proyectos_service__WEBPACK_IMPORTED_MODULE_2__["ProyectosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\~Proyectos~\Webs Projects\Angular\MyCV\MyCV\src\main.ts */"zUnb");


/***/ }),

/***/ "1fes":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../titulo-pagina/titulo-pagina.component */ "RpGh");



class ExperienceComponent {
    constructor() {
        this.index = 6;
    }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 61, vars: 1, consts: [[1, "contenedor"], [3, "index"], [1, "contenidoResume", "row"], [1, "educacion", "col-lg-12", "col-sm-12", "mx-4"], [1, "col", "item-estudio"], [1, "row", "code", "mb-2", "align-items-center"], [1, "col-12"], [1, "titulo"], [1, "fecha"], [1, "item"], [1, "col", "align-self-end"], [1, "verde"], [1, "pie", "intermedio"], [1, "fondo"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-titulo-pagina", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Desarrollador NodeJs, AWS Serverless");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inform\u00E1tica & Tecnolog\u00EDa Stefanini S.A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Octubre 2020 - Actualmente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Desarrollo backend de aplicaciones usando infraestructura de desarrollo orientado a la nube AWS Serverless y funciones lambda con NodeJs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Desarrollo frontend con Angular Framework y TypeScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sugerir e implementar est\u00E1ndares de documentaci\u00F3n de desarrollo como diagramas UML y modelo de datos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Aplicar el marco de trabajo SCRUM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Dise\u00F1o e implementacion de Stored Procedures, functions, y consultas en PostgresSQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Desarrollador full Stack ASP.NET MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Fivetech S.A.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Septiembre 2020 - Septiembre 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " A lo largo de mi estancia alli, participe en el dise\u00F1o y desarrollo de nuevos modulos y funcionalidades del aplicativo de tramites, servicios y movilidad de cuidadanos de Bogot\u00E1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Aport\u00E9 ideas de dise\u00F1o y usabiliad a las interfaces nuevas y existentes del aplicativo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Cre\u00E9 procedimeintos en BD, scripts de consultas directas, consultas usando LinQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Hize parte de la planificacion de tareas y estrategias para el desarollo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Contribui con la documentacion de los procesos internos de desarollo de la empresa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", ctx.index);
    } }, directives: [_titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_1__["TituloPaginaComponent"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n.contenidoResume[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  margin-bottom: 2vh;\n  display: flex;\n  justify-content: space-evenly;\n}\n.titulo[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 2rem;\n  line-height: 2rem;\n  color: #649800;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-align: center;\n}\n.fecha[_ngcontent-%COMP%] {\n  margin-top: 1vh;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.item-estudio[_ngcontent-%COMP%] {\n  margin-bottom: 5vh;\n  padding: 0;\n}\n.code-titulos[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: 500;\n  text-align: center;\n  padding-bottom: 1.5vh;\n  color: #2a2b30;\n  justify-content: center;\n  border-radius: 0.8vw;\n  border-bottom: #649800 groove;\n  margin-bottom: 3vh;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.code[_ngcontent-%COMP%] {\n  border-radius: 0.8vw;\n  padding: 0.5vh;\n  border: 1.5px solid #649800;\n}\n.fondo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #efefef;\n  color: #2a2b30;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  border: 2px solid #649800;\n  font-size: 0.7rem;\n}\n.verde[_ngcontent-%COMP%], .pie[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n}\n.verde[_ngcontent-%COMP%] {\n  background-color: #98C900;\n}\n.pie[_ngcontent-%COMP%] {\n  border: 2px solid #649800;\n}\n.novato[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0deg, #98C900 50%, transparent 50%), linear-gradient(-90deg, #649800 50%, transparent 50%);\n}\n.intermedio[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-90deg, #649800 50%, transparent 50%);\n}\n\n.avanzado[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0deg, #649800 50%, transparent 50%), linear-gradient(-90deg, #649800 50%, transparent 50%);\n}\n.experto[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\n@media screen and (max-width: 400px) {\n  .educacion[_ngcontent-%COMP%] {\n    margin-bottom: 10vh;\n  }\n\n  .subtitulos[_ngcontent-%COMP%] {\n    margin-bottom: 8vh;\n  }\n\n  .fecha[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKO0FBM0VBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQThFSjtBQTNFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0RHYztFQ0ZkLHFEQUFBO0VBQ0Esa0JBQUE7QUE4RUo7QUEzRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUE4RUo7QUEzRUE7RUFDSSxnQkFBQTtFQUNBLGNEWlc7RUNhWCxxREFBQTtBQThFSjtBQTNFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQThFSjtBQTNFQTtFQUNJLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjRDNCVztFQzRCWCx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQThFSjtBQTNFQTtFQUNJLGtCQUFBO0FBOEVKO0FBM0VBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUE4RUo7QUExRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHlCRC9DVztFQ2dEWCxjRG5EVztFQ29EWCxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQTRFSjtBQXpFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTRFSjtBQXpFQTtFQUNJLHlCRHZFWTtBQ21KaEI7QUF6RUE7RUFDSSx5QkFBQTtBQTRFSjtBQXpFQTtFQUNJLDRIQUNBO0FBMkVKO0FBdkVBO0VBQ0ksdUVBQ0E7QUF5RUo7QUF0RUE7aUNBQUE7QUFHQTtFQUNJLDRIQUNBO0FBdUVKO0FBbkVBO0VBQ0kseUJEbEdjO0FDd0tsQjtBQW5FQTtFQUNJO0lBQ0ksbUJBQUE7RUFzRU47O0VBbkVFO0lBQ0ksa0JBQUE7RUFzRU47O0VBbkVFO0lBQ0ksc0JBQUE7RUFzRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9zXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwOyBcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG59XG5cblxuLy8gIG1pcyB2YXJpYWJsZXMgeSBjb2xvcmVzIGdsb2JhbGVzXG4kdmVyZGUtY2xhcm8yIDojQUZEQjI5OyBcbiR2ZXJkZS1vc2N1cm86ICM1NUM2MjU7IFxuXG4kdmVyZGUtcHJpbWFyeSA6Izk4QzkwMDsgXG4kdmVyZGUtc2VjdW5kYXJ5OiAjNjQ5ODAwO1xuJGdyaXMtcHJpbWFyeTogIzJhMmIzMDsgXG5cbiRhbWFyaWxsby1hY3RpdmU6ICNmZmVlMDA7XG4kYmxhbmNvLXBlcmxhOiAjZWZlZmVmOyBcbi8vICRibGFuY28tcGVybGE6ICNkYmQ2Y2E7IFxuXG5cbiNwYXJ0aWNsZXMtanN7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDR2dzsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jby1wZXJsYTtcbiAgICBoZWlnaHQ6IDk1dmg7XG59XG5cbi5zdWJ0aXR1bG9zeyAgIFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogM3Z3O1xuIH1cbiBcbiAudGV4dG9HZW5lcmFseyAgICBcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0IDogMS41cmVtO1xuIH1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWx7XG4gICAgY29sb3I6ICRncmlzLXByaW1hcnk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gfVxuXG4ubmVncml0YXtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICR2ZXJkZS1zZWN1bmRhcnk7XG59XG5cbi5idG4tcHJpbmNpcGFse1xuICAgIHBhZGRpbmc6IDEuMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1zZWN1bmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogMC44dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmluY2lwYWw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXByaW1hcnk7XG59XG5cbmhye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1zZWN1bmRhcnk7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMntcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmJvcmRle1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG59XG5cblxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5zIGh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuI3BhcnRpY2xlcy1qcyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uY29udGVuZWRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3Mge1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogM3Z3O1xufVxuXG4udGV4dG9HZW5lcmFsIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5zdWJ0aXR1bG9zLCAudGV4dG9HZW5lcmFsIHtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5uZWdyaXRhIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgIzY0OTgwMDtcbn1cblxuLmJ0bi1wcmluY2lwYWwge1xuICBwYWRkaW5nOiAxLjJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTgwMDtcbiAgYm9yZGVyLXJhZGl1czogMC44dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OEM5MDA7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTgwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDIge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmJvcmRlIHtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuLmNvbnRlbmlkb1Jlc3VtZSB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi50aXR1bG8ge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogIzY0OTgwMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmVjaGEge1xuICBtYXJnaW4tdG9wOiAxdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5pdGVtLWVzdHVkaW8ge1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb2RlLXRpdHVsb3Mge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMS41dmg7XG4gIGNvbG9yOiAjMmEyYjMwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC44dnc7XG4gIGJvcmRlci1ib3R0b206ICM2NDk4MDAgZ3Jvb3ZlO1xuICBtYXJnaW4tYm90dG9tOiAzdmg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29kZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHZ3O1xuICBwYWRkaW5nOiAwLjV2aDtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNjQ5ODAwO1xufVxuXG4uZm9uZG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY0OTgwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi52ZXJkZSwgLnBpZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi52ZXJkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OEM5MDA7XG59XG5cbi5waWUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjQ5ODAwO1xufVxuXG4ubm92YXRvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICM5OEM5MDAgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjNjQ5ODAwIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbn1cblxuLmludGVybWVkaW8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjNjQ5ODAwIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbn1cblxuLyogU2xpY2VzIGdyZWF0ZXIgdGhhbiA1MCUgcmVxdWlyZSBmaXJzdCBncmFkaWVudCB0byBiZSAgXG4kdmVyZGUtc2VjdW5kYXJ5IC0+IHRyYW5zcGFyZW50ICovXG4uYXZhbnphZG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzY0OTgwMCA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICM2NDk4MDAgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xufVxuXG4uZXhwZXJ0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk4MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5lZHVjYWNpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gIH1cblxuICAuc3VidGl0dWxvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHZoO1xuICB9XG5cbiAgLmZlY2hhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class NavBarComponent {
    constructor() { }
    ngOnInit() { }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 39, vars: 7, consts: [[1, "contenedorNavbar"], [1, "imagen"], ["src", "../../assets/perfil/yo2.jpeg", "alt", "perfil"], [1, "nav-items"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "fi-xnsuxl-house-solid", "nav-link-icon"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "fi-xnsuxl-user-solid", "nav-link-icon"], [1, "fi-xnsuhl-git-logo", "nav-link-icon"], [1, "fi-xnsuxl-file-cv-solid", "nav-link-icon"], [1, "fi-xwsuxl-folder-up-solid", "nav-link-icon"], [1, "footter"], [1, "social"], ["href", "https://www.linkedin.com/in/manuel-doncel/", "target", "_blank", "rel", "noopener noreferrer"], [1, "fi-snsuxl-linkedin"], ["href", "https://github.com/antarescor", "target", "_blank", "rel", "noopener noreferrer"], [1, "fi-snsuxl-github-alt"], ["href", "mailto:antarescor@hotmail.com", "target", "_blank", "rel", "noopener noreferrer"], [1, "fi-swsuxl-envelope-solid"], ["href", "https://www.youtube.com/user/kentaurox", "target", "_blank", "rel", "noopener noreferrer"], [1, "fi-snsuxl-youtube"], [1, "derechos"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PORTAFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 2021 \u00A9Manuel Doncel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " All Right Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/aboutMe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/portafolio");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n.contenedorNavbar[_ngcontent-%COMP%] {\n  margin-bottom: 2vh;\n  display: flex;\n  flex-direction: column;\n}\n.imagen[_ngcontent-%COMP%] {\n  height: 13vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.nav-items[_ngcontent-%COMP%] {\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 1vw;\n  transition: background-color 0.2s;\n  text-decoration: none;\n  color: #98C900;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  background-color: #98C900;\n}\n.active[_ngcontent-%COMP%] {\n  color: #ffee00;\n}\n.nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 1vw;\n  margin-left: 1vw;\n}\n.nav-link-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.footter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  bottom: 0;\n  width: 100%;\n  height: 15vh;\n}\n.derechos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 1vh;\n  margin-bottom: 2vh;\n}\n.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #98C900;\n}\n.derechos[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0vw;\n  color: #98C900;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n@media screen and (max-width: 780px) and (orientation: landscape) {\n  .nav-link[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 1.5vh;\n  }\n\n  .nav-items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .footter[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 780px) {\n  .nav-link[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 1.5vh;\n  }\n\n  .nav-items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: medium;\n    padding: 0.5vh;\n  }\n\n  .derechos[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (min-width: 801px) and (max-width: 1200px) {\n  .nav-link[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .nav-items[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKO0FBNUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUErRUo7QUE1RUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUErRUo7QUE1RUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQStFSjtBQTNFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQThFSjtBQTFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7RUFDQSxjRHBCWTtFQ3FCWixxREFBQTtBQTZFSjtBQXZFQTs7RUFFSSxjRDNCVztFQzRCWCx5QkQ5Qlk7QUN3R2hCO0FBdkVBO0VBQ0ksY0Q5QmM7QUN3R2xCO0FBdkVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQTBFSjtBQXZFQTtFQUNJLGlCQUFBO0FBMEVKO0FBdEVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF3RUo7QUFyRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQXdFSjtBQXJFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXdFSjtBQXJFQTtFQUNJLGNEdkVZO0FDK0loQjtBQXJFQTtFQUNJLFdBQUE7RUFDQSxjRDVFWTtFQzZFWixxREFBQTtBQXdFSjtBQXJFQTtFQUVJO0lBQ0ksc0JBQUE7SUFDQSxjQUFBO0VBdUVOOztFQXBFRTtJQUNJLGFBQUE7RUF1RU47O0VBcEVFO0lBQ0ksYUFBQTtFQXVFTjtBQUNGO0FBcEVBO0VBRUk7SUFDSSxzQkFBQTtJQUNBLGNBQUE7RUFxRU47O0VBbEVFO0lBQ0ksYUFBQTtFQXFFTjs7RUFsRUU7SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0VBcUVOOztFQWxFRTtJQUNJLGlCQUFBO0lBQ0EsY0FBQTtFQXFFTjs7RUFsRUU7SUFDSSxhQUFBO0VBcUVOO0FBQ0Y7QUFsRUE7RUFDSTtJQUNJLHNCQUFBO0VBb0VOOztFQWpFRTtJQUNJLGFBQUE7RUFvRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9zXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwOyBcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG59XG5cblxuLy8gIG1pcyB2YXJpYWJsZXMgeSBjb2xvcmVzIGdsb2JhbGVzXG4kdmVyZGUtY2xhcm8yIDojQUZEQjI5OyBcbiR2ZXJkZS1vc2N1cm86ICM1NUM2MjU7IFxuXG4kdmVyZGUtcHJpbWFyeSA6Izk4QzkwMDsgXG4kdmVyZGUtc2VjdW5kYXJ5OiAjNjQ5ODAwO1xuJGdyaXMtcHJpbWFyeTogIzJhMmIzMDsgXG5cbiRhbWFyaWxsby1hY3RpdmU6ICNmZmVlMDA7XG4kYmxhbmNvLXBlcmxhOiAjZWZlZmVmOyBcbi8vICRibGFuY28tcGVybGE6ICNkYmQ2Y2E7IFxuXG5cbiNwYXJ0aWNsZXMtanN7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDR2dzsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jby1wZXJsYTtcbiAgICBoZWlnaHQ6IDk1dmg7XG59XG5cbi5zdWJ0aXR1bG9zeyAgIFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogM3Z3O1xuIH1cbiBcbiAudGV4dG9HZW5lcmFseyAgICBcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0IDogMS41cmVtO1xuIH1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWx7XG4gICAgY29sb3I6ICRncmlzLXByaW1hcnk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gfVxuXG4ubmVncml0YXtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICR2ZXJkZS1zZWN1bmRhcnk7XG59XG5cbi5idG4tcHJpbmNpcGFse1xuICAgIHBhZGRpbmc6IDEuMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1zZWN1bmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogMC44dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmluY2lwYWw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXByaW1hcnk7XG59XG5cbmhye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1zZWN1bmRhcnk7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMntcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmJvcmRle1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG59XG5cblxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5zIGh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuI3BhcnRpY2xlcy1qcyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uY29udGVuZWRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3Mge1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogM3Z3O1xufVxuXG4udGV4dG9HZW5lcmFsIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5zdWJ0aXR1bG9zLCAudGV4dG9HZW5lcmFsIHtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5uZWdyaXRhIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgIzY0OTgwMDtcbn1cblxuLmJ0bi1wcmluY2lwYWwge1xuICBwYWRkaW5nOiAxLjJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTgwMDtcbiAgYm9yZGVyLXJhZGl1czogMC44dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OEM5MDA7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTgwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDIge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmJvcmRlIHtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuLmNvbnRlbmVkb3JOYXZiYXIge1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pbWFnZW4ge1xuICBoZWlnaHQ6IDEzdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1hZ2VuIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtaXRlbXMge1xuICBoZWlnaHQ6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdi1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXZ3O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5OEM5MDA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5uYXYtbGluazpob3Zlcixcbi5uYXYtbGluazpob3ZlciBpIHtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OEM5MDA7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZWUwMDtcbn1cblxuLm5hdi1saW5rIGkge1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbiAgbWFyZ2luLWxlZnQ6IDF2dztcbn1cblxuLm5hdi1saW5rLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmZvb3R0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXZoO1xufVxuXG4uZGVyZWNob3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc29jaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDF2aDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xufVxuXG4uc29jaWFsIGkge1xuICBjb2xvcjogIzk4QzkwMDtcbn1cblxuLmRlcmVjaG9zIGg1IHtcbiAgbWFyZ2luOiAwdnc7XG4gIGNvbG9yOiAjOThDOTAwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5uYXYtbGluayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxLjV2aDtcbiAgfVxuXG4gIC5uYXYtaXRlbXMgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mb290dGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuICAubmF2LWxpbmsge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMS41dmg7XG4gIH1cblxuICAubmF2LWl0ZW1zIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc29jaWFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc29jaWFsIGEge1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHBhZGRpbmc6IDAuNXZoO1xuICB9XG5cbiAgLmRlcmVjaG9zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAubmF2LWxpbmsge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAubmF2LWl0ZW1zIGkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 17, vars: 0, consts: [["id", "particles-js"], ["id", "particles-js", 1, "contenedorHome"], [1, "layer"], [1, "show"], [1, "barra"], [1, "hide"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00AB Manuel Alejandro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Doncel Castro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00AB Manuel AlejandroDoncel Castro \u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00BB System Engineer \u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00BB Information Systems Technologist \u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00BB Scientist at heart \u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n.contenedorHome[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-image: url('f3.jpg');\n  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.layer[_ngcontent-%COMP%] {\n  margin-left: 0vh;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 4.2rem;\n  color: #98C900;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  margin-bottom: 8vh;\n}\nh5[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #98C900;\n  font-family: monospace;\n  font-weight: 500;\n  margin-bottom: 4vh;\n}\n.barra[_ngcontent-%COMP%] {\n  background-color: #2a2b30;\n  border: #98C900 solid 1px;\n  padding-left: 2vh;\n  padding-right: 2vh;\n  border-radius: 0.4rem;\n}\n@media screen and (max-width: 780px) {\n  .contenedorHome[_ngcontent-%COMP%] {\n    align-items: unset;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.8rem;\n    margin-top: 8vh;\n    margin-inline: 3vh;\n    justify-content: center;\n  }\n\n  .hide[_ngcontent-%COMP%] {\n    display: flex;\n    text-align: center;\n  }\n\n  .show[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    font-weight: 400;\n    margin-bottom: 1.5vh;\n    margin-inline: 4vh;\n    justify-content: center;\n  }\n}\n@media screen and (min-device-width: 780px) and (max-device-width: 1500px) {\n  .contenedorHome[_ngcontent-%COMP%] {\n    align-items: unset;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n    margin-top: 20vh;\n  }\n\n  h5[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    font-weight: 400;\n    margin-bottom: 2vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKO0FBNUVBO0VBQ0ksc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBK0VKO0FBNUVBO0VBQ0ksZ0JBQUE7QUErRUo7QUE1RUE7RUFDSSxhQUFBO0FBK0VKO0FBNUVBO0VBQ0ksaUJBQUE7RUFDQSxjRE5ZO0VDT1oscURBQUE7RUFDQSxrQkFBQTtBQStFSjtBQTVFQTtFQUNJLGlCQUFBO0VBQ0EsY0RiWTtFQ2NaLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQStFSjtBQTVFQTtFQUNJLHlCRGxCVztFQ21CWCx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQStFSjtBQTVFQTtFQUNJO0lBQ0ksa0JBQUE7RUErRU47O0VBNUVFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtFQStFTjs7RUE1RUU7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7RUErRU47O0VBNUVFO0lBQ0ksYUFBQTtFQStFTjs7RUEzRUU7SUFDSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0VBOEVOO0FBQ0Y7QUE1RUE7RUFDSTtJQUNJLGtCQUFBO0VBOEVOOztFQTNFRTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUE4RU47O0VBM0VFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBOEVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovc1xuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5e1xuICAgIG1hcmdpbjogMDsgXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG5cbi8vICBtaXMgdmFyaWFibGVzIHkgY29sb3JlcyBnbG9iYWxlc1xuJHZlcmRlLWNsYXJvMiA6I0FGREIyOTsgXG4kdmVyZGUtb3NjdXJvOiAjNTVDNjI1OyBcblxuJHZlcmRlLXByaW1hcnkgOiM5OEM5MDA7IFxuJHZlcmRlLXNlY3VuZGFyeTogIzY0OTgwMDtcbiRncmlzLXByaW1hcnk6ICMyYTJiMzA7IFxuXG4kYW1hcmlsbG8tYWN0aXZlOiAjZmZlZTAwO1xuJGJsYW5jby1wZXJsYTogI2VmZWZlZjsgXG4vLyAkYmxhbmNvLXBlcmxhOiAjZGJkNmNhOyBcblxuXG4jcGFydGljbGVzLWpze1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5O1xufVxuXG4uY29udGVuZWRvcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMXZoO1xuICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgbWFyZ2luLXJpZ2h0OiA0dnc7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFuY28tcGVybGE7XG4gICAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uc3VidGl0dWxvc3sgICBcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDN2dztcbiB9XG4gXG4gLnRleHRvR2VuZXJhbHsgICAgXG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodCA6IDEuNXJlbTtcbiB9XG5cbi5zdWJ0aXR1bG9zLCAudGV4dG9HZW5lcmFse1xuICAgIGNvbG9yOiAkZ3Jpcy1wcmltYXJ5O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuIH1cblxuLm5lZ3JpdGF7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAkdmVyZGUtc2VjdW5kYXJ5O1xufVxuXG4uYnRuLXByaW5jaXBhbHtcbiAgICBwYWRkaW5nOiAxLjJ2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtc2VjdW5kYXJ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbmNpcGFsOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1wcmltYXJ5O1xufVxuXG5ocntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtc2VjdW5kYXJ5O1xufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDJ7XG4gICAgY29sb3I6ICRncmlzLXByaW1hcnk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbi5ib3JkZXtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xufVxuXG5cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xucyBodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG59XG5cbiNwYXJ0aWNsZXMtanMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxdmg7XG4gIG1hcmdpbi1sZWZ0OiA0dnc7XG4gIG1hcmdpbi1yaWdodDogNHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBoZWlnaHQ6IDk1dmg7XG59XG5cbi5zdWJ0aXR1bG9zIHtcbiAgZm9udC1zaXplOiAyLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDN2dztcbn1cblxuLnRleHRvR2VuZXJhbCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4uc3VidGl0dWxvcywgLnRleHRvR2VuZXJhbCB7XG4gIGNvbG9yOiAjMmEyYjMwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4ubmVncml0YSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICM2NDk4MDA7XG59XG5cbi5idG4tcHJpbmNpcGFsIHtcbiAgcGFkZGluZzogMS4ydmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmluY2lwYWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThDOTAwO1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk4MDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgyIHtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5ib3JkZSB7XG4gIGJvcmRlcjogc29saWQgYmxhY2s7XG59XG5cbi5jb250ZW5lZG9ySG9tZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvZm9uZG9zL2YzLmpwZyk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDEwMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGF5ZXIge1xuICBtYXJnaW4tbGVmdDogMHZoO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0LjJyZW07XG4gIGNvbG9yOiAjOThDOTAwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiA4dmg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiAjOThDOTAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA0dmg7XG59XG5cbi5iYXJyYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJiMzA7XG4gIGJvcmRlcjogIzk4QzkwMCBzb2xpZCAxcHg7XG4gIHBhZGRpbmctbGVmdDogMnZoO1xuICBwYWRkaW5nLXJpZ2h0OiAydmg7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLmNvbnRlbmVkb3JIb21lIHtcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gIH1cblxuICBoMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbiAgICBtYXJnaW4taW5saW5lOiAzdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuaGlkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2hvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXZoO1xuICAgIG1hcmdpbi1pbmxpbmU6IDR2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc4MHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDE1MDBweCkge1xuICAuY29udGVuZWRvckhvbWUge1xuICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Czq1":
/*!*******************************************!*\
  !*** ./src/assets/archive/proyectos.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"titulo\":\"Software bancario\",\"descripcion\":\"Software bancario para manejo de registro de transacciones bancarias.#Aplicativo desarrollado en nube, haciendo uso de la infraestructura de AWS para serverless mediente funciones lambda.\",\"tipo\":\"Academico\",\"lenguajes\":[\"NodeJs\",\"AWS\",\"Lambda\",\"Typescript\",\"Javascript\",\"PostgresSQL\",\"AmazonDynamoDB\"],\"linkRepo\":\"\",\"linkLive\":\"\",\"linkVideo\":\"\"},{\"titulo\":\"Trabajo de Grado\",\"descripcion\":\"Prototipo traductor de video de YouTube a Lengua de Señas Colombiana (LSC). Proyecto final para optar por el titulo de Ingeniero de Sistemas en la Universidad Del Valle.#Aplicativo web que mediente un link de Youtube, crea un video de subtitulos LSC. Se busca con este aplicativo brindar accesibilidad a los contenidos multimedia por parte de la comunidad sorda de Colombia.#Se aplicaron conceptos de usabilidad, accesibiliad, tecnicas PLN, tecnitas de procesamiento de video, obtencion de subtitulos mediante API's\",\"tipo\":\"Academico\",\"lenguajes\":[\"Django\",\"Python\",\"HTML\",\"CSS\",\"Javascript\",\"Bootstrap\",\"SQLite3\"],\"linkRepo\":\"\",\"linkLive\":\"\",\"linkVideo\":\"https://www.youtube.com/watch?v=jrl1U3Ijn4U\"},{\"titulo\":\"Appdirdom\",\"descripcion\":\"Fue creado como un prototipo de directorio de domicilios publico.#Los usuarios pueden crear una publicacion para promocionar algun servicio que ofrezcan que incluya servicio a domiclio.#No necesita ningun registro\",\"tipo\":\"Personal\",\"lenguajes\":[\"Django\",\"Python\",\"HTML\",\"CSS\",\"Javascript\",\"Bootstrap\",\"SQLite3\"],\"linkRepo\":\"https://antarescor.github.io/\",\"linkLive\":\"https://appdirdom2.herokuapp.com/\",\"linkVideo\":\"\"},{\"titulo\":\"Ciudadano360\",\"descripcion\":\"Proyecto al cual hice parte en la empresa Fivetech S.A.S. Es un aplicativo web, encaminado a servir como facilitador para tramies generales del ciudadano de la ciudad de Bogotá. En este aporté en cuanto a diseño y creación interfaces de usuario, optimizaciones de consultas en backend usando LinQ, implementacion de procedimientos almacenados en BD, lógica de negocio en backend, entre otros.\",\"tipo\":\"Profesional, laboral\",\"lenguajes\":[\"CSharp\",\"HTML\",\"CSS\",\"Javascript\",\"Bootstrap\"],\"linkRepo\":\"\",\"linkLive\":\"https://ciudadano.movilidadbogota.gov.co/loginciudadano/loginciudadano#no-back-button\",\"linkVideo\":\"\"},{\"titulo\":\"Novamat\",\"descripcion\":\"Es un proyecto hecho para la asignatura de Metodologias Multimedias en la Universidad Del Valle.#Es el traspaso del contenido ofical de matematicas de noveno grado del ministerio de educaion.#Alli se aplicaron tecnicas de diseño de navegacion, teoria de color, UX, Edicion de imagenes, optimizadion de web, e implantacion en la web, entre otros\",\"tipo\":\"Academico\",\"lenguajes\":[\"HTML\",\"CSS\",\"Javascript\",\"Materialize\"],\"linkRepo\":\"https://github.com/antarescor/novamat\",\"linkLive\":\"https://novamat.netlify.app/\",\"linkVideo\":\"\"},{\"titulo\":\"MyCV\",\"descripcion\":\"Aplicativo WEB donde se reune a manera de resumen informacion sobre mi, mi carrera, y los algunos de los proyetos que he realizado.#Se aplicaron conocimiento de responsive desing, diseño WEB entre otros\",\"tipo\":\"Personal\",\"lenguajes\":[\"Angular\",\"HTML\",\"SASS\",\"CSS\",\"Typescript\",\"Bootstrap\"],\"linkRepo\":\"\",\"linkLive\":\"https://antarescor.github.io/\",\"linkVideo\":\"\"},{\"titulo\":\"Bomberman\",\"descripcion\":\"Proyecto final hecho para la asignatura de I.A. en la Universidad del Valle.#En el, tanto como el personaje principal, como los enemigos, estan controlados por I.A.#Para el personaje principal se implemento el algoritmo A* para intentar encuentrar la salida y para los enemigos se uso una I.A de tablas con estados predefinidos \",\"tipo\":\"Academico\",\"lenguajes\":[\"Python\"],\"linkRepo\":\"https://github.com/antarescor/BombermanIA\",\"linkLive\":\"\",\"linkVideo\":\"https://youtu.be/ZM2VF_78AcU\"},{\"titulo\":\"Pokemon\",\"descripcion\":\"Es un proyecto hecho para la asignatura de I.A en la Universidad Del Valle.#Con este proyecto se busco emular un juego de comabtes pokemon aplicando el algoritmo MiniMax, con el fin de emular una pelea justa humano vs maquina o maquina vs maquina\",\"tipo\":\"Academico\",\"lenguajes\":[\"Python\"],\"linkRepo\":\"https://antarescor.github.io/\",\"linkLive\":\"\",\"linkVideo\":\"https://antarescor.github.io/\"},{\"titulo\":\"Spooky Trees\",\"descripcion\":\"Es un proyecto hecho para la asignatura de Computacion grafica en la Universidad Del Valle.#Se trata de un videojuego de terror donde la meta es encontrar todos, los 'Spooky Trees', hallar la misteriosa salida, y sobretodo, no morir en el intento.#Aplicaion de tipos de iluminacion, renderizados, texturas, modelado de Objetos 3D con Blender\",\"tipo\":\"Academico\",\"lenguajes\":[\"Unity\",\"CSharp\"],\"linkRepo\":\"https://1drv.ms/u/s!AvO0NE-FDsOwoVr6Zpbbim4hXdVz?e=Q2ysp3\",\"linkLive\":\"\",\"linkVideo\":\"\"},{\"titulo\":\"Enfriamiento de Newton\",\"descripcion\":\"Es un proyecto hecho para la asignatura de Ecuaciones Diferenciales en la Universidad Del Valle.#Proyecto donde se aplican las ecuaciones diferenciales intrinsecas al la ley del enfriamiento de Newton.#Se simula y predice el tiempo de enfriamiento de tres metales, cobre, hierro y aluminio, segun sus temperatura y la ambiente y medidas como el volumen y area de contacto\",\"tipo\":\"Academico\",\"lenguajes\":[\"Java\"],\"linkRepo\":\"https://github.com/antarescor/Enfriamiento-de-Newton\",\"linkLive\":\"\",\"linkVideo\":\"\"},{\"titulo\":\"Sodoku\",\"descripcion\":\"Es un proyecto hecho para la asignatura de F.A.D.A en la Universidad Del Valle.#Poryecto final 1 Donde se aplican los conceptos de pilas y colas, arboles rojinegros, y arboles balanceados\",\"tipo\":\"Academico\",\"lenguajes\":[\"Java\"],\"linkRepo\":\"https://github.com/antarescor/sodoku-FADA\",\"linkLive\":\"\",\"linkVideo\":\"\"},{\"titulo\":\"Cartas 21\",\"descripcion\":\"Es un proyecto hecho para la asignatura de Programacion Interectiva en la Universidad Del Valle.#Implementacion basica de juego de cartas 21 Humano vs Maquina (Cupier).#Uso de Java Swing, eventos, contadores e imagenes\",\"tipo\":\"Academico\",\"lenguajes\":[\"Java\"],\"linkRepo\":\"https://github.com/antarescor/Cartas-21\",\"linkLive\":\"\",\"linkVideo\":\"\"}]");

/***/ }),

/***/ "H69E":
/*!****************************************************!*\
  !*** ./src/app/portafolio/portafolio.component.ts ***!
  \****************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_proyectos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/proyectos.service */ "uON1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../titulo-pagina/titulo-pagina.component */ "RpGh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PortafolioComponent_div_22_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const lenguaje_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/iconos-lenguajes/", lenguaje_r3, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", lenguaje_r3);
} }
function PortafolioComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortafolioComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const proyecto_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.detalleProyecto(proyecto_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PortafolioComponent_div_22_img_10_Template, 1, 2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proyecto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/proyectos/", proyecto_r1.titulo, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r1.descripcion.length > 45 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 4, proyecto_r1.descripcion, 0, 45) + ".." : proyecto_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proyecto_r1.lenguajes);
} }
class PortafolioComponent {
    constructor(proyectosInyectado, ruta) {
        this.proyectosInyectado = proyectosInyectado;
        this.ruta = ruta;
        this.index = 3;
        this.lenguajes = "";
        this.proyectosList = this.proyectosInyectado.proyectoLista;
    }
    ngOnInit() {
    }
    detalleProyecto(proyecto) {
        this.proyectosInyectado.proyectoDetalle = proyecto;
        this.ruta.navigateByUrl('detalle');
    }
}
PortafolioComponent.ɵfac = function PortafolioComponent_Factory(t) { return new (t || PortafolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proyectos_service__WEBPACK_IMPORTED_MODULE_1__["ProyectosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PortafolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortafolioComponent, selectors: [["app-portafolio"]], decls: 23, vars: 2, consts: [[1, "contenedor"], [3, "index"], [1, "pills"], [1, "sub-pills"], ["type", "button", "id", "all", 1, "btn", "active"], ["type", "button", "id", "Python", 1, "btn"], ["type", "button", "id", "Java", 1, "btn"], ["type", "button", "id", "C#", 1, "btn"], ["type", "button", "id", "Javascript", 1, "btn"], ["type", "button", "id", "Angular", 1, "btn"], ["type", "button", "id", "HTML", 1, "btn"], ["type", "button", "id", "CSS", 1, "btn"], ["id", "parent", 1, "contenidoPortafolio"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", 3, "click"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "stretched-link", 3, "routerLink"], [1, "iconos"], ["class", "icon-lenguaje", 3, "src", "alt", 4, "ngFor", "ngForOf"], [1, "icon-lenguaje", 3, "src", "alt"]], template: function PortafolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-titulo-pagina", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PortafolioComponent_div_22_Template, 11, 8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectosList);
    } }, directives: [_titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_3__["TituloPaginaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n.contenidoPortafolio[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-flow: wrap;\n  justify-content: space-evenly;\n}\n.pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-self: center;\n  justify-content: space-between;\n  border: dotted #649800;\n  border-radius: 4rem;\n  margin-top: 10vh;\n  margin-bottom: 4vh;\n  height: 3rem;\n  padding: 0.2vh;\n}\n.sub-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 4rem;\n  font-size: 1rem;\n  border: solid 1px #2a2b30;\n  color: #2a2b30;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\n.card-deck[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: wrap;\n}\n.card[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  margin-bottom: 2vw;\n  border-radius: 0.8vw;\n}\n.card[_ngcontent-%COMP%]:hover {\n  background-color: #2a2b30;\n  color: #98C900;\n  transition-duration: 0.3s;\n  transform: scale(1.1);\n  transition-timing-function: ease;\n  transition-property: background-color color scale;\n}\n.card[_ngcontent-%COMP%]:hover   .iconos[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  filter: grayscale(1) contrast(2) drop-shadow(2px 2px 2px #649800);\n}\n.card-body[_ngcontent-%COMP%]:hover   h1[_ngcontent-%COMP%] {\n  border-bottom: solid #ffee00;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5vh;\n}\n.card-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  border-bottom: solid #98C900;\n}\n.card-body[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 0.8vw;\n}\n.card-img-top[_ngcontent-%COMP%] {\n  height: 18vh;\n  width: auto;\n  border-radius: 0.8vw 0.8vw 0 0;\n}\n.iconos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n}\n.icon-lenguaje[_ngcontent-%COMP%] {\n  height: 1.2rem;\n  width: auto;\n  margin-left: 0.2rem;\n  margin-right: 0.2rem;\n}\n@media screen and (max-width: 400px) {\n  .pills[_ngcontent-%COMP%] {\n    flex-direction: column;\n    border-radius: 1.5rem;\n    margin-top: 5vh;\n    padding: 0.2vh;\n    height: 7.2rem;\n  }\n\n  .sub-pills[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .pills[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 8vh;\n    width: 90%;\n  }\n\n  .card[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n  }\n\n  .card-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .card-img-top[_ngcontent-%COMP%] {\n    height: 35vh;\n  }\n\n  .iconos[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .icon-lenguaje[_ngcontent-%COMP%] {\n    margin-top: 0.3rem;\n    margin-bottom: 0.3rem;\n  }\n}\n@media screen and (min-width: 401px) and (max-width: 800px) {\n  .pills[_ngcontent-%COMP%] {\n    flex-direction: column;\n    border-radius: 1.5rem;\n    margin-top: 5vh;\n    padding: 0.2vh;\n    height: 7.2rem;\n  }\n\n  .sub-pills[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .pills[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 7vh;\n    width: 90%;\n  }\n\n  .card[_ngcontent-%COMP%]:hover {\n    transform: scale(1.08);\n  }\n\n  .card-img-top[_ngcontent-%COMP%] {\n    height: 30vh;\n  }\n\n  .iconos[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .icon-lenguaje[_ngcontent-%COMP%] {\n    margin-top: 0.2rem;\n    margin-bottom: 0.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvcG9ydGFmb2xpby9wb3J0YWZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKO0FBM0VBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBOEVKO0FBM0VBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUE2RUo7QUExRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUE2RUo7QUExRUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNEZlc7QUM0RmY7QUExRUE7RUFDSSx5QkRwQmM7QUNpR2xCO0FBMUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUE2RUo7QUExRUE7RUFDSSxjRDVCVztFQzZCWCxrQkFBQTtFQUNBLG9CQUFBO0FBNkVKO0FBMUVBO0VBQ0kseUJEbENXO0VDbUNYLGNEckNZO0VDdUNaLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0FBNEVKO0FBekVBO0VBQ0ksaUVBQUE7QUE0RUo7QUF6RUE7RUFDSSw0QkFBQTtBQTRFSjtBQXpFQTtFQUNJLGNBQUE7QUE0RUo7QUF6RUE7RUFDSSw0QkFBQTtBQTRFSjtBQXpFQTtFQUNJLG9CQUFBO0FBNEVKO0FBekVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQTRFSjtBQTFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBNkVKO0FBMUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBNkVKO0FBekVBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBNEVOOztFQXpFRTtJQUNJLHVCQUFBO0VBNEVOOztFQXpFRTtJQUNJLGlCQUFBO0VBNEVOOztFQXpFRTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtFQTRFTjs7RUF6RUU7SUFDSSxzQkFBQTtFQTRFTjs7RUF6RUU7SUFDSSxhQUFBO0VBNEVOOztFQXpFRTtJQUNJLFlBQUE7RUE0RU47O0VBekVFO0lBQ0ksdUJBQUE7RUE0RU47O0VBekVFO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtFQTRFTjtBQUNGO0FBdkVBO0VBRUk7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBd0VOOztFQXJFRTtJQUNJLHVCQUFBO0VBd0VOOztFQXJFRTtJQUNJLGVBQUE7RUF3RU47O0VBckVFO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0VBd0VOOztFQXJFRTtJQUNJLHNCQUFBO0VBd0VOOztFQXJFRTtJQUNJLFlBQUE7RUF3RU47O0VBckVFO0lBQ0ksdUJBQUE7RUF3RU47O0VBckVFO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtFQXdFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGFmb2xpby9wb3J0YWZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL3Ncbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7IFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuXG4vLyAgbWlzIHZhcmlhYmxlcyB5IGNvbG9yZXMgZ2xvYmFsZXNcbiR2ZXJkZS1jbGFybzIgOiNBRkRCMjk7IFxuJHZlcmRlLW9zY3VybzogIzU1QzYyNTsgXG5cbiR2ZXJkZS1wcmltYXJ5IDojOThDOTAwOyBcbiR2ZXJkZS1zZWN1bmRhcnk6ICM2NDk4MDA7XG4kZ3Jpcy1wcmltYXJ5OiAjMmEyYjMwOyBcblxuJGFtYXJpbGxvLWFjdGl2ZTogI2ZmZWUwMDtcbiRibGFuY28tcGVybGE6ICNlZmVmZWY7IFxuLy8gJGJsYW5jby1wZXJsYTogI2RiZDZjYTsgXG5cblxuI3BhcnRpY2xlcy1qc3tcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIG1hcmdpbi1yaWdodDogNHZ3OyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvLXBlcmxhO1xuICAgIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3N7ICAgXG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XG4gfVxuIFxuIC50ZXh0b0dlbmVyYWx7ICAgIFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbGluZS1oZWlnaHQgOiAxLjVyZW07XG4gfVxuXG4uc3VidGl0dWxvcywgLnRleHRvR2VuZXJhbHtcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiB9XG5cbi5uZWdyaXRhe1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuLmJ0bi1wcmluY2lwYWx7XG4gICAgcGFkZGluZzogMS4ydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtcHJpbWFyeTtcbn1cblxuaHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgye1xuICAgIGNvbG9yOiAkZ3Jpcy1wcmltYXJ5O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGV7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuXG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbnMgaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4jcGFydGljbGVzLWpzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBtYXJnaW4tbGVmdDogNHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uc3VidGl0dWxvcyB7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAzdnc7XG59XG5cbi50ZXh0b0dlbmVyYWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWwge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLm5lZ3JpdGEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjNjQ5ODAwO1xufVxuXG4uYnRuLXByaW5jaXBhbCB7XG4gIHBhZGRpbmc6IDEuMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xuICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbmNpcGFsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4QzkwMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjMmEyYjMwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGUge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xufVxuXG4uY29udGVuaWRvUG9ydGFmb2xpbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5waWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IGRvdHRlZCAjNjQ5ODAwO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBtYXJnaW4tYm90dG9tOiA0dmg7XG4gIGhlaWdodDogM3JlbTtcbiAgcGFkZGluZzogMC4ydmg7XG59XG5cbi5zdWItcGlsbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMmEyYjMwO1xuICBjb2xvcjogIzJhMmIzMDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk4MDA7XG59XG5cbi5jYXJkLWRlY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG59XG5cbi5jYXJkIHtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIG1hcmdpbi1ib3R0b206IDJ2dztcbiAgYm9yZGVyLXJhZGl1czogMC44dnc7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmIzMDtcbiAgY29sb3I6ICM5OEM5MDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IgY29sb3Igc2NhbGU7XG59XG5cbi5jYXJkOmhvdmVyIC5pY29ub3MgPiBpbWcge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBjb250cmFzdCgyKSBkcm9wLXNoYWRvdygycHggMnB4IDJweCAjNjQ5ODAwKTtcbn1cblxuLmNhcmQtYm9keTpob3ZlciBoMSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNmZmVlMDA7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjV2aDtcbn1cblxuLmNhcmQtYm9keSBoMSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkICM5OEM5MDA7XG59XG5cbi5jYXJkLWJvZHkgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHZ3O1xufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgaGVpZ2h0OiAxOHZoO1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMC44dncgMC44dncgMCAwO1xufVxuXG4uaWNvbm9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5pY29uLWxlbmd1YWplIHtcbiAgaGVpZ2h0OiAxLjJyZW07XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnBpbGxzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgcGFkZGluZzogMC4ydmg7XG4gICAgaGVpZ2h0OiA3LjJyZW07XG4gIH1cblxuICAuc3ViLXBpbGxzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5waWxscyAuYnRuIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4dmg7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG5cbiAgLmNhcmQtdGV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jYXJkLWltZy10b3Age1xuICAgIGhlaWdodDogMzV2aDtcbiAgfVxuXG4gIC5pY29ub3Mge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmljb24tbGVuZ3VhamUge1xuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnBpbGxzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgcGFkZGluZzogMC4ydmg7XG4gICAgaGVpZ2h0OiA3LjJyZW07XG4gIH1cblxuICAuc3ViLXBpbGxzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5waWxscyAuYnRuIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogN3ZoO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgfVxuXG4gIC5jYXJkLWltZy10b3Age1xuICAgIGhlaWdodDogMzB2aDtcbiAgfVxuXG4gIC5pY29ub3Mge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmljb24tbGVuZ3VhamUge1xuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortafolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portafolio',
                templateUrl: './portafolio.component.html',
                styleUrls: ['./portafolio.component.scss']
                // directives: [TituloPaginaComponent]
            }]
    }], function () { return [{ type: _services_proyectos_service__WEBPACK_IMPORTED_MODULE_1__["ProyectosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_secciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/secciones.service */ "zyN2");
/* harmony import */ var _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../titulo-pagina/titulo-pagina.component */ "RpGh");




class BlogComponent {
    constructor(secciones) {
        this.secciones = secciones;
        this.index = 4;
    }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_secciones_service__WEBPACK_IMPORTED_MODULE_1__["SeccionesService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 2, vars: 1, consts: [[1, "contenedor"], [3, "index"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-titulo-pagina", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", ctx.index);
    } }, directives: [_titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_2__["TituloPaginaComponent"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL3Ncbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7IFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuXG4vLyAgbWlzIHZhcmlhYmxlcyB5IGNvbG9yZXMgZ2xvYmFsZXNcbiR2ZXJkZS1jbGFybzIgOiNBRkRCMjk7IFxuJHZlcmRlLW9zY3VybzogIzU1QzYyNTsgXG5cbiR2ZXJkZS1wcmltYXJ5IDojOThDOTAwOyBcbiR2ZXJkZS1zZWN1bmRhcnk6ICM2NDk4MDA7XG4kZ3Jpcy1wcmltYXJ5OiAjMmEyYjMwOyBcblxuJGFtYXJpbGxvLWFjdGl2ZTogI2ZmZWUwMDtcbiRibGFuY28tcGVybGE6ICNlZmVmZWY7IFxuLy8gJGJsYW5jby1wZXJsYTogI2RiZDZjYTsgXG5cblxuI3BhcnRpY2xlcy1qc3tcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIG1hcmdpbi1yaWdodDogNHZ3OyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvLXBlcmxhO1xuICAgIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3N7ICAgXG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XG4gfVxuIFxuIC50ZXh0b0dlbmVyYWx7ICAgIFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbGluZS1oZWlnaHQgOiAxLjVyZW07XG4gfVxuXG4uc3VidGl0dWxvcywgLnRleHRvR2VuZXJhbHtcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiB9XG5cbi5uZWdyaXRhe1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuLmJ0bi1wcmluY2lwYWx7XG4gICAgcGFkZGluZzogMS4ydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtcHJpbWFyeTtcbn1cblxuaHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgye1xuICAgIGNvbG9yOiAkZ3Jpcy1wcmltYXJ5O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGV7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuXG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbnMgaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4jcGFydGljbGVzLWpzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBtYXJnaW4tbGVmdDogNHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uc3VidGl0dWxvcyB7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAzdnc7XG59XG5cbi50ZXh0b0dlbmVyYWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWwge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLm5lZ3JpdGEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjNjQ5ODAwO1xufVxuXG4uYnRuLXByaW5jaXBhbCB7XG4gIHBhZGRpbmc6IDEuMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xuICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbmNpcGFsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4QzkwMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjMmEyYjMwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGUge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return [{ type: _services_secciones_service__WEBPACK_IMPORTED_MODULE_1__["SeccionesService"] }]; }, null); })();


/***/ }),

/***/ "Q0x9":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../titulo-pagina/titulo-pagina.component */ "RpGh");



class ResumeComponent {
    constructor() {
        this.index = 2;
    }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 172, vars: 1, consts: [[1, "contenedor"], [3, "index"], [1, "contenidoResume", "row"], [1, "educacion", "col-lg-4", "col-sm-12", "mx-4"], [1, "subtitulos"], [1, "col", "item-estudio"], [1, "titulo"], [1, "fecha"], [1, "item"], [1, "skills", "col-lg-7", "col-sm-12", "mx-4"], [1, "subtitulos", "mb-3"], [1, "row"], [1, "col-6"], [1, "code-titulos"], [1, "col"], [1, "row", "code", "mb-2", "align-items-center"], [1, "col-9"], [1, "col-3"], [1, "verde"], [1, "pie", "intermedio"], [1, "fondo"], [1, "pie", "novato"], [1, "pie", "avanzado"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-titulo-pagina", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ingenieria de Sistemas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Universidad del valle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Dic 2017 - Dic 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tecnologia en Sistemas de Informacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Universidad del valle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Dic 2010 - Dic 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Lenguajes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Frameworks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "AWS Serverless");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "NodeJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "ASP.NET MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Entity Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Materialize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", ctx.index);
    } }, directives: [_titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_1__["TituloPaginaComponent"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n.contenidoResume[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  margin-bottom: 2vh;\n  display: flex;\n  justify-content: space-evenly;\n}\n.titulo[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 2rem;\n  line-height: 2rem;\n  color: #649800;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-align: center;\n}\n.fecha[_ngcontent-%COMP%] {\n  margin-top: 1vh;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.item-estudio[_ngcontent-%COMP%] {\n  margin-bottom: 5vh;\n  padding: 0;\n}\n.code-titulos[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-weight: 500;\n  text-align: center;\n  padding-bottom: 1.5vh;\n  color: #2a2b30;\n  justify-content: center;\n  border-radius: 0.8vw;\n  border-bottom: #649800 groove;\n  margin-bottom: 3vh;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.code[_ngcontent-%COMP%] {\n  border-radius: 0.8vw;\n  padding: 0.5vh;\n  border: 1.5px solid #649800;\n}\n.fondo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #efefef;\n  color: #2a2b30;\n  height: 1.8rem;\n  width: 1.8rem;\n  border-radius: 50%;\n  border: 2px solid #649800;\n  font-size: 0.7rem;\n}\n.verde[_ngcontent-%COMP%], .pie[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n.verde[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\n.pie[_ngcontent-%COMP%] {\n  border: 2px solid #98C900;\n}\n.novato[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0deg, #649800 50%, transparent 50%), linear-gradient(-90deg, #98C900 50%, transparent 50%);\n}\n.intermedio[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-90deg, #98C900 50%, transparent 50%);\n}\n\n.avanzado[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0deg, #98C900 50%, transparent 50%), linear-gradient(-90deg, #98C900 50%, transparent 50%);\n}\n.experto[_ngcontent-%COMP%] {\n  background-color: #98C900;\n}\n@media screen and (max-width: 400px) {\n  .educacion[_ngcontent-%COMP%] {\n    margin-bottom: 10vh;\n  }\n\n  .subtitulos[_ngcontent-%COMP%] {\n    margin-bottom: 8vh;\n  }\n\n  .fecha[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUErRTs7RUFFM0UsWUFBQTtBQ0VKO0FEQ0E7RUFDSSxTQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtBQ0VKO0FEZUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDWko7QURlQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBakJXO0VBa0JYLFlBQUE7QUNaSjtBRGVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWko7QURlQztFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQXJDVztFQXNDWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FDWko7QURlQTtFQUNJLGNBQUE7RUFDQSx5QkFqRGM7RUFrRGQsb0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNaSjtBRGVBO0VBQ0kseUJBekRZO0FDNkNoQjtBRGVBO0VBQ0kseUJBNURjO0FDZ0RsQjtBRGVBO0VBQ0kscUJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FuRVc7RUFvRVgscURBQUE7QUNaSjtBRGVBO0VBQ0ksbUJBQUE7QUNaSjtBQTNFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUE4RUo7QUEzRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNER2M7RUNGZCxxREFBQTtFQUNBLGtCQUFBO0FBOEVKO0FBM0VBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBOEVKO0FBM0VBO0VBQ0ksZ0JBQUE7RUFDQSxjRFpXO0VDYVgscURBQUE7QUE4RUo7QUEzRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUE4RUo7QUEzRUE7RUFDSSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0QzQlc7RUM0QlgsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUE4RUo7QUEzRUE7RUFDSSxrQkFBQTtBQThFSjtBQTNFQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBOEVKO0FBMUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkQvQ1c7RUNnRFgsY0RuRFc7RUNvRFgsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUE0RUo7QUF6RUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE0RUo7QUF6RUE7RUFDSSx5QkR0RWM7QUNrSmxCO0FBekVBO0VBQ0kseUJBQUE7QUE0RUo7QUF6RUE7RUFDSSw0SEFDQTtBQTJFSjtBQXZFQTtFQUNJLHVFQUNBO0FBeUVKO0FBdEVBO2lDQUFBO0FBR0E7RUFDSSw0SEFDQTtBQXVFSjtBQW5FQTtFQUNJLHlCRG5HWTtBQ3lLaEI7QUFuRUE7RUFDSTtJQUNJLG1CQUFBO0VBc0VOOztFQW5FRTtJQUNJLGtCQUFBO0VBc0VOOztFQW5FRTtJQUNJLHNCQUFBO0VBc0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL3Ncbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7IFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuXG4vLyAgbWlzIHZhcmlhYmxlcyB5IGNvbG9yZXMgZ2xvYmFsZXNcbiR2ZXJkZS1jbGFybzIgOiNBRkRCMjk7IFxuJHZlcmRlLW9zY3VybzogIzU1QzYyNTsgXG5cbiR2ZXJkZS1wcmltYXJ5IDojOThDOTAwOyBcbiR2ZXJkZS1zZWN1bmRhcnk6ICM2NDk4MDA7XG4kZ3Jpcy1wcmltYXJ5OiAjMmEyYjMwOyBcblxuJGFtYXJpbGxvLWFjdGl2ZTogI2ZmZWUwMDtcbiRibGFuY28tcGVybGE6ICNlZmVmZWY7IFxuLy8gJGJsYW5jby1wZXJsYTogI2RiZDZjYTsgXG5cblxuI3BhcnRpY2xlcy1qc3tcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIG1hcmdpbi1yaWdodDogNHZ3OyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvLXBlcmxhO1xuICAgIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3N7ICAgXG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XG4gfVxuIFxuIC50ZXh0b0dlbmVyYWx7ICAgIFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbGluZS1oZWlnaHQgOiAxLjVyZW07XG4gfVxuXG4uc3VidGl0dWxvcywgLnRleHRvR2VuZXJhbHtcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiB9XG5cbi5uZWdyaXRhe1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuLmJ0bi1wcmluY2lwYWx7XG4gICAgcGFkZGluZzogMS4ydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtcHJpbWFyeTtcbn1cblxuaHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgye1xuICAgIGNvbG9yOiAkZ3Jpcy1wcmltYXJ5O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGV7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuXG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbnMgaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4jcGFydGljbGVzLWpzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBtYXJnaW4tbGVmdDogNHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uc3VidGl0dWxvcyB7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAzdnc7XG59XG5cbi50ZXh0b0dlbmVyYWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWwge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLm5lZ3JpdGEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjNjQ5ODAwO1xufVxuXG4uYnRuLXByaW5jaXBhbCB7XG4gIHBhZGRpbmc6IDEuMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xuICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbmNpcGFsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4QzkwMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjMmEyYjMwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGUge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xufVxuXG4uY29udGVuaWRvUmVzdW1lIHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiAjNjQ5ODAwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mZWNoYSB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLml0ZW0ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLml0ZW0tZXN0dWRpbyB7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvZGUtdGl0dWxvcyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxLjV2aDtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjh2dztcbiAgYm9yZGVyLWJvdHRvbTogIzY0OTgwMCBncm9vdmU7XG4gIG1hcmdpbi1ib3R0b206IDN2aDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2RlIHtcbiAgYm9yZGVyLXJhZGl1czogMC44dnc7XG4gIHBhZGRpbmc6IDAuNXZoO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICM2NDk4MDA7XG59XG5cbi5mb25kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjb2xvcjogIzJhMmIzMDtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIHdpZHRoOiAxLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzY0OTgwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi52ZXJkZSwgLnBpZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi52ZXJkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk4MDA7XG59XG5cbi5waWUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjOThDOTAwO1xufVxuXG4ubm92YXRvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICM2NDk4MDAgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjOThDOTAwIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbn1cblxuLmludGVybWVkaW8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjOThDOTAwIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbn1cblxuLyogU2xpY2VzIGdyZWF0ZXIgdGhhbiA1MCUgcmVxdWlyZSBmaXJzdCBncmFkaWVudCB0byBiZSAgXG4kdmVyZGUtc2VjdW5kYXJ5IC0+IHRyYW5zcGFyZW50ICovXG4uYXZhbnphZG8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzk4QzkwMCA1MCUsIHRyYW5zcGFyZW50IDUwJSksIGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICM5OEM5MDAgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xufVxuXG4uZXhwZXJ0byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OEM5MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5lZHVjYWNpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gIH1cblxuICAuc3VidGl0dWxvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHZoO1xuICB9XG5cbiAgLmZlY2hhIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RmHo":
/*!************************************!*\
  !*** ./src/app/models/proyecto.ts ***!
  \************************************/
/*! exports provided: Proyecto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proyecto", function() { return Proyecto; });
class Proyecto {
}


/***/ }),

/***/ "RpGh":
/*!**********************************************************!*\
  !*** ./src/app/titulo-pagina/titulo-pagina.component.ts ***!
  \**********************************************************/
/*! exports provided: TituloPaginaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TituloPaginaComponent", function() { return TituloPaginaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_secciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/secciones.service */ "zyN2");



class TituloPaginaComponent {
    constructor(secciones) {
        this.secciones = secciones;
    }
    ngOnInit() {
        this.titulos = this.secciones.titulos;
        this.titulo = this.titulos[this.index];
        this.iconos = this.secciones.iconos;
        this.icono = this.iconos[this.index];
    }
}
TituloPaginaComponent.ɵfac = function TituloPaginaComponent_Factory(t) { return new (t || TituloPaginaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_secciones_service__WEBPACK_IMPORTED_MODULE_1__["SeccionesService"])); };
TituloPaginaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TituloPaginaComponent, selectors: [["app-titulo-pagina"]], inputs: { index: "index" }, decls: 4, vars: 3, consts: [[1, "titulo"], [1, "nav-link-icon", 3, "src", "alt"]], template: function TituloPaginaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/iconos/", ctx.icono, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.icono);
    } }, styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n.titulo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: #649800 groove;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 5vh;\n  font-weight: 400;\n  margin-top: 2vh;\n  margin-bottom: 1vh;\n  text-transform: capitalize;\n  font-family: Georgia;\n  color: #2a2b30;\n}\nimg[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  color: #2a2b30;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvdGl0dWxvLXBhZ2luYS90aXR1bG8tcGFnaW5hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKO0FBNUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQStFSjtBQTVFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjREVXO0FDNkVmO0FBNUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjREpXO0FDbUZmIiwiZmlsZSI6InNyYy9hcHAvdGl0dWxvLXBhZ2luYS90aXR1bG8tcGFnaW5hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL3Ncbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7IFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuXG4vLyAgbWlzIHZhcmlhYmxlcyB5IGNvbG9yZXMgZ2xvYmFsZXNcbiR2ZXJkZS1jbGFybzIgOiNBRkRCMjk7IFxuJHZlcmRlLW9zY3VybzogIzU1QzYyNTsgXG5cbiR2ZXJkZS1wcmltYXJ5IDojOThDOTAwOyBcbiR2ZXJkZS1zZWN1bmRhcnk6ICM2NDk4MDA7XG4kZ3Jpcy1wcmltYXJ5OiAjMmEyYjMwOyBcblxuJGFtYXJpbGxvLWFjdGl2ZTogI2ZmZWUwMDtcbiRibGFuY28tcGVybGE6ICNlZmVmZWY7IFxuLy8gJGJsYW5jby1wZXJsYTogI2RiZDZjYTsgXG5cblxuI3BhcnRpY2xlcy1qc3tcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIG1hcmdpbi1yaWdodDogNHZ3OyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvLXBlcmxhO1xuICAgIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3N7ICAgXG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XG4gfVxuIFxuIC50ZXh0b0dlbmVyYWx7ICAgIFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbGluZS1oZWlnaHQgOiAxLjVyZW07XG4gfVxuXG4uc3VidGl0dWxvcywgLnRleHRvR2VuZXJhbHtcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiB9XG5cbi5uZWdyaXRhe1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuLmJ0bi1wcmluY2lwYWx7XG4gICAgcGFkZGluZzogMS4ydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtcHJpbWFyeTtcbn1cblxuaHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgye1xuICAgIGNvbG9yOiAkZ3Jpcy1wcmltYXJ5O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGV7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuXG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbnMgaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4jcGFydGljbGVzLWpzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBtYXJnaW4tbGVmdDogNHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uc3VidGl0dWxvcyB7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAzdnc7XG59XG5cbi50ZXh0b0dlbmVyYWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWwge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLm5lZ3JpdGEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjNjQ5ODAwO1xufVxuXG4uYnRuLXByaW5jaXBhbCB7XG4gIHBhZGRpbmc6IDEuMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xuICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbmNpcGFsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4QzkwMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjMmEyYjMwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGUge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xufVxuXG4udGl0dWxvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAjNjQ5ODAwIGdyb292ZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDV2aDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogR2VvcmdpYTtcbiAgY29sb3I6ICMyYTJiMzA7XG59XG5cbmltZyB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGNvbG9yOiAjMmEyYjMwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TituloPaginaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-titulo-pagina',
                templateUrl: './titulo-pagina.component.html',
                styleUrls: ['./titulo-pagina.component.scss']
            }]
    }], function () { return [{ type: _services_secciones_service__WEBPACK_IMPORTED_MODULE_1__["SeccionesService"] }]; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["sidenav2"];
class AppComponent {
    constructor(changeDetectorRef, media) {
        this.title = 'MyCV';
        this.mdq = media.matchMedia('(max-width: 780px)');
        this.mediaQueryListener = () => {
            changeDetectorRef.detectChanges();
            this.openValue = this.mdq.matches;
            console.log("Match?: ", this.openValue);
            if (this.openValue) {
                console.log("close");
                this.sidenav.close();
            }
            else {
                console.log("open");
                this.sidenav.open();
            }
        };
        this.mdq.addListener(this.mediaQueryListener);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 16, vars: 0, consts: [[1, "example-container"], ["mode", "side", "opened", ""], ["sidenav2", ""], [1, "sticky-top", "navbar", "row"], [1, "navbar-brand", "m-3", "show"], [1, "navbar-brand", "m-3", "hide"], [1, "navbar-toggler", "mr-3", 3, "click"], [1, "navbar-toggler-icon"], [1, "fi-xwluxl-three-bars-wide"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manuel Alejandro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Doncel Castro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "M.A.D.C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 13vw;\n  position: fixed;\n  background-color: #2a2b30;\n}\nmat-sidenav-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #efefef;\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  color: #649800;\n  border-color: #649800;\n}\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  border-color: tomato;\n}\n.navbar[_ngcontent-%COMP%] {\n  display: none;\n  background-color: #2a2b30;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.show[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 350px) {\n  .show[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .hide[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 780px) {\n  .navbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media screen and (min-width: 780px) {\n  mat-sidenav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKO0FBNUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkRhVztBQ2tFZjtBQTNFQTtFQUNJLGFBQUE7RUFDQSx5QkRVVztBQ29FZjtBQTNFQTtFQUNJLGNERWM7RUNEZCxxQkRDYztBQzZFbEI7QUEzRUE7RUFDSSxvQkFBQTtBQThFSjtBQTNFQTtFQUNJLGFBQUE7RUFDQSx5QkRQVztBQ3FGZjtBQTNFQTtFQUNJLGlCQUFBO0VBQ0EscURBQUE7QUE4RUo7QUEzRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUE4RUo7QUEzRUE7RUFDSSxhQUFBO0FBOEVKO0FBM0VBO0VBQ0k7SUFDSSxhQUFBO0VBOEVOOztFQTFFRTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQTZFTjtBQUNGO0FBMUVBO0VBQ0k7SUFDSSxhQUFBO0VBNEVOO0FBQ0Y7QUExRUE7RUFDSTtJQUNJLGFBQUE7RUE0RU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9zXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwOyBcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG59XG5cblxuLy8gIG1pcyB2YXJpYWJsZXMgeSBjb2xvcmVzIGdsb2JhbGVzXG4kdmVyZGUtY2xhcm8yIDojQUZEQjI5OyBcbiR2ZXJkZS1vc2N1cm86ICM1NUM2MjU7IFxuXG4kdmVyZGUtcHJpbWFyeSA6Izk4QzkwMDsgXG4kdmVyZGUtc2VjdW5kYXJ5OiAjNjQ5ODAwO1xuJGdyaXMtcHJpbWFyeTogIzJhMmIzMDsgXG5cbiRhbWFyaWxsby1hY3RpdmU6ICNmZmVlMDA7XG4kYmxhbmNvLXBlcmxhOiAjZWZlZmVmOyBcbi8vICRibGFuY28tcGVybGE6ICNkYmQ2Y2E7IFxuXG5cbiNwYXJ0aWNsZXMtanN7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDR2dzsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jby1wZXJsYTtcbiAgICBoZWlnaHQ6IDk1dmg7XG59XG5cbi5zdWJ0aXR1bG9zeyAgIFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogM3Z3O1xuIH1cbiBcbiAudGV4dG9HZW5lcmFseyAgICBcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0IDogMS41cmVtO1xuIH1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWx7XG4gICAgY29sb3I6ICRncmlzLXByaW1hcnk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gfVxuXG4ubmVncml0YXtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICR2ZXJkZS1zZWN1bmRhcnk7XG59XG5cbi5idG4tcHJpbmNpcGFse1xuICAgIHBhZGRpbmc6IDEuMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1zZWN1bmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogMC44dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmluY2lwYWw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXByaW1hcnk7XG59XG5cbmhye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1zZWN1bmRhcnk7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMntcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmJvcmRle1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG59XG5cblxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5zIGh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuI3BhcnRpY2xlcy1qcyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uY29udGVuZWRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3Mge1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogM3Z3O1xufVxuXG4udGV4dG9HZW5lcmFsIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5zdWJ0aXR1bG9zLCAudGV4dG9HZW5lcmFsIHtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5uZWdyaXRhIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgIzY0OTgwMDtcbn1cblxuLmJ0bi1wcmluY2lwYWwge1xuICBwYWRkaW5nOiAxLjJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTgwMDtcbiAgYm9yZGVyLXJhZGl1czogMC44dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OEM5MDA7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTgwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDIge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmJvcmRlIHtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMTN2dztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYjMwO1xufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6ICM2NDk4MDA7XG4gIGJvcmRlci1jb2xvcjogIzY0OTgwMDtcbn1cblxuLm5hdmJhci10b2dnbGVyLWljb24ge1xuICBib3JkZXItY29sb3I6IHRvbWF0bztcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJiMzA7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5zaG93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmhpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLm5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcbiAgbWF0LXNpZGVuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav2']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contenido_prueba_contenido_prueba_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contenido-prueba/contenido-prueba.component */ "ipNU");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portafolio/portafolio.component */ "H69E");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./titulo-pagina/titulo-pagina.component */ "RpGh");
/* harmony import */ var _services_secciones_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/secciones.service */ "zyN2");
/* harmony import */ var _services_proyectos_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/proyectos.service */ "uON1");
/* harmony import */ var _detalle_proyecto_detalle_proyecto_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./detalle-proyecto/detalle-proyecto.component */ "+9FI");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_secciones_service__WEBPACK_IMPORTED_MODULE_16__["SeccionesService"],
        _services_proyectos_service__WEBPACK_IMPORTED_MODULE_17__["ProyectosService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
        _contenido_prueba_contenido_prueba_component__WEBPACK_IMPORTED_MODULE_6__["ContenidoPruebaComponent"],
        _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_9__["AboutmeComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
        _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_11__["PortafolioComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_15__["TituloPaginaComponent"],
        _detalle_proyecto_detalle_proyecto_component__WEBPACK_IMPORTED_MODULE_18__["DetalleProyectoComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_19__["ExperienceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                    _contenido_prueba_contenido_prueba_component__WEBPACK_IMPORTED_MODULE_6__["ContenidoPruebaComponent"],
                    _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_9__["AboutmeComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                    _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_11__["PortafolioComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                    _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_15__["TituloPaginaComponent"],
                    _detalle_proyecto_detalle_proyecto_component__WEBPACK_IMPORTED_MODULE_18__["DetalleProyectoComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_19__["ExperienceComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
                ],
                providers: [
                    _services_secciones_service__WEBPACK_IMPORTED_MODULE_16__["SeccionesService"],
                    _services_proyectos_service__WEBPACK_IMPORTED_MODULE_17__["ProyectosService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b2u2":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../titulo-pagina/titulo-pagina.component */ "RpGh");



class AboutmeComponent {
    constructor() {
        this.index = 1;
    }
    ngOnInit() {
        let birth = new Date('11/21/1987');
        let now = new Date();
        let beforeBirth = ((() => {
            birth.setDate(now.getDate());
            birth.setMonth(now.getMonth());
            return birth.getTime();
        })() < birth.getTime()) ? 0 : 1;
        this.edad = now.getFullYear() - birth.getFullYear() - beforeBirth;
        console.log(this.edad);
    }
}
AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) { return new (t || AboutmeComponent)(); };
AboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutmeComponent, selectors: [["app-aboutme"]], decls: 46, vars: 2, consts: [[1, "contenedor"], [3, "index"], [1, "contenidoAboutme", "col"], [1, "row"], [1, "descripcion", "textoGeneral", "col-md-8", "col-sm-12"], [1, "subtitulos"], [1, "textoGeneral", "col-md-4", "col-sm-12"], [1, "negrita"], [1, "item-info"], ["href", "../../assets/archive/resume.pdf", 1, "descargar"], [1, "btn-principal"]], template: function AboutmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-titulo-pagina", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ingeniero de Sistemas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ingeniero de Sistemas con gran capacidad para trabajar en equipo presencial o remoto, pero tambi\u00E9n capacidad de trabajo independiente An\u00E1lisis y levantamiento de requerimientos, generaci\u00F3n de artefactos para la documentaci\u00F3n. Dise\u00F1o e implementacion de bases de datos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Apasionado por la ciencia y la tecnologia, y por adquirir y aplicar los conocimientos que puedan brindar soluciones en multiples areas empresariales, economicas y sociales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Inteligente, curioso, creativo, autodidacta, y con una mente dispuesta a afrontar nuevos retos profesionales y personales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Informaci\u00F3n personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nombre: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Manuel Alejandro Doncel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edad: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pais: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Colombia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "antarescor@hotmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lemma: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "La medida perfecta de las cosas imperfectas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "DESCARGAR CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.edad);
    } }, directives: [_titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_1__["TituloPaginaComponent"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n.contenidoAboutme[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  margin-bottom: 2vh;\n  display: flex;\n  justify-content: space-evenly;\n}\n.descripcion[_ngcontent-%COMP%] {\n  padding-right: 6vw;\n  margin-bottom: 2vh;\n}\n@media screen and (max-width: 780px) {\n  p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n    text-align: start;\n    line-height: 1.8rem;\n  }\n\n  .subtitulos[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n    margin-bottom: 5vh;\n  }\n\n  .textoGeneral[_ngcontent-%COMP%] {\n    padding-bottom: 8vh;\n  }\n\n  .contenedorHome[_ngcontent-%COMP%] {\n    align-items: unset;\n  }\n\n  .descargar[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKO0FBM0VBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQThFSjtBQTNFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUE4RUo7QUEzRUE7RUFFSTtJQUNJLGlCQUFBO0lBQ0EsbUJBQUE7RUE2RU47O0VBMUVFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtFQTZFTjs7RUExRUU7SUFDSSxtQkFBQTtFQTZFTjs7RUExRUU7SUFDSSxrQkFBQTtFQTZFTjs7RUEzRUU7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7RUE4RU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0bWUvYWJvdXRtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9zXG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgbWFyZ2luOiAwOyBcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG59XG5cblxuLy8gIG1pcyB2YXJpYWJsZXMgeSBjb2xvcmVzIGdsb2JhbGVzXG4kdmVyZGUtY2xhcm8yIDojQUZEQjI5OyBcbiR2ZXJkZS1vc2N1cm86ICM1NUM2MjU7IFxuXG4kdmVyZGUtcHJpbWFyeSA6Izk4QzkwMDsgXG4kdmVyZGUtc2VjdW5kYXJ5OiAjNjQ5ODAwO1xuJGdyaXMtcHJpbWFyeTogIzJhMmIzMDsgXG5cbiRhbWFyaWxsby1hY3RpdmU6ICNmZmVlMDA7XG4kYmxhbmNvLXBlcmxhOiAjZWZlZmVmOyBcbi8vICRibGFuY28tcGVybGE6ICNkYmQ2Y2E7IFxuXG5cbiNwYXJ0aWNsZXMtanN7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9ye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDR2dzsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYW5jby1wZXJsYTtcbiAgICBoZWlnaHQ6IDk1dmg7XG59XG5cbi5zdWJ0aXR1bG9zeyAgIFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogM3Z3O1xuIH1cbiBcbiAudGV4dG9HZW5lcmFseyAgICBcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0IDogMS41cmVtO1xuIH1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWx7XG4gICAgY29sb3I6ICRncmlzLXByaW1hcnk7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gfVxuXG4ubmVncml0YXtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICR2ZXJkZS1zZWN1bmRhcnk7XG59XG5cbi5idG4tcHJpbmNpcGFse1xuICAgIHBhZGRpbmc6IDEuMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1zZWN1bmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogMC44dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmluY2lwYWw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXByaW1hcnk7XG59XG5cbmhye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR2ZXJkZS1zZWN1bmRhcnk7XG59XG5cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMntcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmJvcmRle1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG59XG5cblxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5zIGh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuI3BhcnRpY2xlcy1qcyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uY29udGVuZWRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3Mge1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogM3Z3O1xufVxuXG4udGV4dG9HZW5lcmFsIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5zdWJ0aXR1bG9zLCAudGV4dG9HZW5lcmFsIHtcbiAgY29sb3I6ICMyYTJiMzA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5uZWdyaXRhIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgIzY0OTgwMDtcbn1cblxuLmJ0bi1wcmluY2lwYWwge1xuICBwYWRkaW5nOiAxLjJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTgwMDtcbiAgYm9yZGVyLXJhZGl1czogMC44dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OEM5MDA7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTgwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDIge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLmJvcmRlIHtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuLmNvbnRlbmlkb0Fib3V0bWUge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZGVzY3JpcGNpb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA2dnc7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgcCwgaDEge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gIH1cblxuICAuc3VidGl0dWxvcyB7XG4gICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICB9XG5cbiAgLnRleHRvR2VuZXJhbCB7XG4gICAgcGFkZGluZy1ib3R0b206IDh2aDtcbiAgfVxuXG4gIC5jb250ZW5lZG9ySG9tZSB7XG4gICAgYWxpZ24taXRlbXM6IHVuc2V0O1xuICB9XG5cbiAgLmRlc2NhcmdhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutme',
                templateUrl: './aboutme.component.html',
                styleUrls: ['./aboutme.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../titulo-pagina/titulo-pagina.component */ "RpGh");



class ContactComponent {
    constructor() {
        this.index = 5;
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 1, consts: [[1, "contenedor"], [3, "index"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-titulo-pagina", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", ctx.index);
    } }, directives: [_titulo_pagina_titulo_pagina_component__WEBPACK_IMPORTED_MODULE_1__["TituloPaginaComponent"]], styles: ["s[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  background-color: lightyellow;\n}\n#particles-js[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n}\n.contenedor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1vh;\n  margin-left: 4vw;\n  margin-right: 4vw;\n  background-color: #efefef;\n  height: 95vh;\n}\n.subtitulos[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 500;\n  margin-bottom: 3vw;\n}\n.textoGeneral[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  text-align: justify;\n  line-height: 1.5rem;\n}\n.subtitulos[_ngcontent-%COMP%], .textoGeneral[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.negrita[_ngcontent-%COMP%] {\n  font-weight: 900;\n  border-bottom: solid #649800;\n}\n.btn-principal[_ngcontent-%COMP%] {\n  padding: 1.2vh;\n  background-color: #649800;\n  border-radius: 0.8vh;\n  display: flex;\n  justify-self: center;\n}\n.btn-principal[_ngcontent-%COMP%]:hover {\n  background-color: #98C900;\n}\nhr[_ngcontent-%COMP%] {\n  background-color: #649800;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nh2[_ngcontent-%COMP%] {\n  color: #2a2b30;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.borde[_ngcontent-%COMP%] {\n  border: solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQStFOztFQUUzRSxZQUFBO0FDRUo7QURDQTtFQUNJLFNBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0FDRUo7QURlQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNaSjtBRGVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFqQlc7RUFrQlgsWUFBQTtBQ1pKO0FEZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWko7QURlQTtFQUNJLGNBckNXO0VBc0NYLHFEQUFBO0FDWko7QURlQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNaSjtBRGVBO0VBQ0ksY0FBQTtFQUNBLHlCQWpEYztFQWtEZCxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ1pKO0FEZUE7RUFDSSx5QkF6RFk7QUM2Q2hCO0FEZUE7RUFDSSx5QkE1RGM7QUNnRGxCO0FEZUE7RUFDSSxxQkFBQTtBQ1pKO0FEZUE7RUFDSSxjQW5FVztFQW9FWCxxREFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL3Ncbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBtYXJnaW46IDA7IFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuXG4vLyAgbWlzIHZhcmlhYmxlcyB5IGNvbG9yZXMgZ2xvYmFsZXNcbiR2ZXJkZS1jbGFybzIgOiNBRkRCMjk7IFxuJHZlcmRlLW9zY3VybzogIzU1QzYyNTsgXG5cbiR2ZXJkZS1wcmltYXJ5IDojOThDOTAwOyBcbiR2ZXJkZS1zZWN1bmRhcnk6ICM2NDk4MDA7XG4kZ3Jpcy1wcmltYXJ5OiAjMmEyYjMwOyBcblxuJGFtYXJpbGxvLWFjdGl2ZTogI2ZmZWUwMDtcbiRibGFuY28tcGVybGE6ICNlZmVmZWY7IFxuLy8gJGJsYW5jby1wZXJsYTogI2RiZDZjYTsgXG5cblxuI3BhcnRpY2xlcy1qc3tcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTtcbn1cblxuLmNvbnRlbmVkb3J7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIG1hcmdpbi1yaWdodDogNHZ3OyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhbmNvLXBlcmxhO1xuICAgIGhlaWdodDogOTV2aDtcbn1cblxuLnN1YnRpdHVsb3N7ICAgXG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzdnc7XG4gfVxuIFxuIC50ZXh0b0dlbmVyYWx7ICAgIFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbGluZS1oZWlnaHQgOiAxLjVyZW07XG4gfVxuXG4uc3VidGl0dWxvcywgLnRleHRvR2VuZXJhbHtcbiAgICBjb2xvcjogJGdyaXMtcHJpbWFyeTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiB9XG5cbi5uZWdyaXRhe1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuLmJ0bi1wcmluY2lwYWx7XG4gICAgcGFkZGluZzogMS4ydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYnRuLXByaW5jaXBhbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmVyZGUtcHJpbWFyeTtcbn1cblxuaHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZlcmRlLXNlY3VuZGFyeTtcbn1cblxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmgye1xuICAgIGNvbG9yOiAkZ3Jpcy1wcmltYXJ5O1xuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGV7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuXG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbnMgaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4jcGFydGljbGVzLWpzIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMXZoO1xuICBtYXJnaW4tbGVmdDogNHZ3O1xuICBtYXJnaW4tcmlnaHQ6IDR2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgaGVpZ2h0OiA5NXZoO1xufVxuXG4uc3VidGl0dWxvcyB7XG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAzdnc7XG59XG5cbi50ZXh0b0dlbmVyYWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnN1YnRpdHVsb3MsIC50ZXh0b0dlbmVyYWwge1xuICBjb2xvcjogIzJhMmIzMDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLm5lZ3JpdGEge1xuICBmb250LXdlaWdodDogOTAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAjNjQ5ODAwO1xufVxuXG4uYnRuLXByaW5jaXBhbCB7XG4gIHBhZGRpbmc6IDEuMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xuICBib3JkZXItcmFkaXVzOiAwLjh2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbmNpcGFsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4QzkwMDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5ODAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjMmEyYjMwO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4uYm9yZGUge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





const materialComponents = [
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[materialComponents], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [materialComponents],
                exports: [materialComponents]
            }]
    }], null, null); })();


/***/ }),

/***/ "ipNU":
/*!****************************************************************!*\
  !*** ./src/app/contenido-prueba/contenido-prueba.component.ts ***!
  \****************************************************************/
/*! exports provided: ContenidoPruebaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenidoPruebaComponent", function() { return ContenidoPruebaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContenidoPruebaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContenidoPruebaComponent.ɵfac = function ContenidoPruebaComponent_Factory(t) { return new (t || ContenidoPruebaComponent)(); };
ContenidoPruebaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContenidoPruebaComponent, selectors: [["app-contenido-prueba"]], decls: 161, vars: 0, consts: [["lang", "es"], ["charset", "UTF-8"], [1, "datos"], [1, "contdatos"], [1, "mifoto"], ["src", "https://via.placeholder.com/150", "alt", "Mi foto"], [1, "secciones"], [1, "proyectos"], [1, "hobbies"], [1, "h_item"], ["src", "https://via.placeholder.com/150", "alt", "astronomia"], ["src", "https://via.placeholder.com/150", "alt", "ciclismo"], ["src", "https://via.placeholder.com/150", "alt", "natacion"], ["src", "https://via.placeholder.com/150", "alt", "cine"], ["src", "https://via.placeholder.com/150", "alt", "musica"], ["src", "https://via.placeholder.com/150", "alt", "manualidades"], ["src", "https://via.placeholder.com/150", "alt", "games"], ["src", "https://via.placeholder.com/150", "alt", "programacion"], ["src", "https://via.placeholder.com/150", "alt", "cocinar"], [1, "paz"], ["src", "https://www.youtube.com/embed/_COHlie5-gA", "allowfullscreen", ""]], template: function ContenidoPruebaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Manuel Doncel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "MANUEL ALEJANDRO DONCEL CASTRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Estudiante de Ingenieria de Sistemas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Universidad del Valle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "28 a\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PROYECTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "NOMBRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "DESCRIPCION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "LENGUAJES USADOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "TIPO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sistema Transaccional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Sistema de gestion mudular, para creacion, edicion, actualizacion y eliminado de articulos, categorias, usuarios, perfiles de usuario, temas de estilos y mudulos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " PHP, MySQL, HTML, CSS, Javascript, UML. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Academico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Facturador e inventariado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Sistema de manejo de inventario que permte hacer CRUD sobre categorias y articulos. Cuenta con un modulo de facturacion a la hora de realizar una venta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " PHP, MySQL, HTML, CSS, Javascript, UML. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Academico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Facturador e inventariado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Sistema de manejo de inventario que permte hacer CRUD sobre categorias, articulos y usuarios. Cuenta con un modulo de facturacion a la hora de realizar una venta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Java, MySQL, UML. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Academico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Asistente Virtual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Es un sistema de asisstencia basado en la tecnologia de reconocimiento de voz de Windows. Dentro de sus modulos se encuentran: Control musica, agenda, recordatorios, busquedas en directorios y en la Web y ejecucion de programas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " C#, UML, XAML. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Personal (en curso) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Generador de crucigramas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Este sistema genera, a partir de una lista indefinida de palabras, un crucigrama totalmente funcional. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Java. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Academico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sodoku");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Juego de Sodoku tradcional. cuenta con una interfaz amigable y facil de usar.s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Java. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Academico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "HOBBIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Astronomia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Para mi, es donde convergen todas las ciencia y conocimiento de los seres humanos, alli se puede integrar todo, con tal exactitud que te sorprenderia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Ciclismo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Me permite liberar estres y al mismo tiempo conocer lugares y compartir con amigos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Natacion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " La mejor forma de ejercitarme, lo unico que mantiene mi estado fisico optimo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Cine: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Es la manera, que tengo de visitar infinidad de historias, en infinidad de univeros, sin salir de casa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Musica:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Con la musica, obtengo contacto con los sentimientos, el ritmo, y por que no, el alma. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Manualidades de todo tipo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Arte, reciclaje, electronica, quimica, mecanica, decoracion, cosplays... Me ayuda a la cretividad personal, y a estar motivado por alguna meta en particular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Videojuegos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Perfecto para ratos de mero ocio y reto con amigos, obligatiriamente en vacaiones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Programacion:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Complementa mis conocimientos laborales y de paso, experiencia y creatividad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Cocinar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "que mejor que disfrutar de buen plato de comida, sobretodo si tu mismo lo preparaste.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "MI OPINION SOBRE PROCESO DE PAZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "iframe", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  background-color: mediumaquamarine;\n  border-image-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: 100% 100%;\n}\n\n\n\n.datos[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  float: left;\n  position: fixed;\n}\n\n.contdatos[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 94%;\n  height: 97%;\n  margin-top: 10px;\n  margin-left: 10px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n}\n\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: italic;\n  color: #6CE2D6;\n  padding: 5px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.datos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 210px;\n  margin: auto;\n  display: block;\n  border-radius: 50%;\n  box-shadow: 0px 0px 50px rgba(0, 125, 125, 0.8);\n}\n\n.mifoto[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n\n\n.secciones[_ngcontent-%COMP%] {\n  width: 80%;\n  position: relative;\n  left: 20%;\n  float: left;\n}\n\n.proyectos[_ngcontent-%COMP%], .hobbies[_ngcontent-%COMP%], .paz[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 93%;\n  height: 93%;\n  margin-left: 10px;\n  margin-top: 10px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 15px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n\n\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1), td[_ngcontent-%COMP%]:nth-child(3), td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 15%;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 55%;\n  text-align: left;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  text-align: left;\n}\n\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: midnightblue;\n  border-image-repeat: no-repeat;\n  font-size: 20px;\n  padding: 10px;\n  color: #382100;\n  border: solid #6CE2D6 1px;\n}\n\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: rgba(208, 167, 121, 0.6);\n  font-size: 20px;\n  padding: 10px;\n  border: solid #6CE2D6 1px;\n  color: #382100;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #40260E;\n}\n\n\n\n.h_item[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 200px;\n  border-radius: 15px;\n  padding: 15px;\n  margin-bottom: 25px;\n  font-size: 24px;\n  color: #6CE2D6;\n  text-align: center;\n  border-style: dashed;\n}\n\n.h_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 198px;\n  float: left;\n  margin-right: 20px;\n  border-radius: 15px;\n}\n\n.h_item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n  font-style: italic;\n  color: #382100;\n  margin-bottom: 15px;\n  text-shadow: 1px 1px 0 #6CE2D6, -1px -1px 0 #6CE2D6, 1px -1px 0 #6CE2D6, -1px 1px 0 #6CE2D6, 1px 1px 0 #6CE2D6;\n}\n\n.h_item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transition: all 0.5s ease;\n  transform: scale(1.08, 1.08);\n}\n\n\n\niframe[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 480px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuaWRvLXBydWViYS9jb250ZW5pZG8tcHJ1ZWJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBRUEsa0NBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUFBRDs7QUFHQTs7bUNBQUE7O0FBSUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREQ7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFERDs7QUFJQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUREOztBQUlBO0VBQ0MsZUFBQTtBQUREOztBQUlBO0VBQ0MsZUFBQTtBQUREOztBQUtBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUFGRDs7QUFLQTtFQUNDLGlCQUFBO0FBRkQ7O0FBTUE7O21DQUFBOztBQUdBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFIRDs7QUFNQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhEOztBQU1BOzttQ0FBQTs7QUFJQTtFQUNDLHlCQUFBO0FBSkQ7O0FBT0E7RUFDQyxVQUFBO0FBSkQ7O0FBT0E7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7QUFKRDs7QUFPQTtFQUNDLGdCQUFBO0FBSkQ7O0FBT0E7RUFFQyw4QkFBQTtFQUNBLDhCQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFORDs7QUFTQTtFQUNDLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFORDs7QUFTQTtFQUNDLHlCQUFBO0FBTkQ7O0FBVUE7O21DQUFBOztBQUdBO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQVBEOztBQVdBO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVJEOztBQVdBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFFRyw4R0FDRztBQVZQOztBQWtCQTtFQUNDLHlCQUFBO0VBQ0EsNEJBQUE7QUFmRDs7QUFrQkE7O21DQUFBOztBQUlBO0VBQ0MsVUFBQTtFQUNBLGFBQUE7QUFoQkQiLCJmaWxlIjoic3JjL2FwcC9jb250ZW5pZG8tcHJ1ZWJhL2NvbnRlbmlkby1wcnVlYmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHQvLyBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi9JbWFnZXMvZm9uZG9zL2ZvbmRvczguanBnKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1hcXVhbWFyaW5lO1xyXG5cdGJvcmRlci1pbWFnZS1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBwYXJhIHBhbmVsIGRlIHBlcmZpbFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5kYXRvcyB7XHJcblx0d2lkdGg6IDIwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uY29udGRhdG9zIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDk0JTtcclxuXHRoZWlnaHQ6IDk3JTtcdFxyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbmgyLCBoM3tcdFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0Y29sb3I6ICM2Q0UyRDY7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5oMntcclxuXHRmb250LXNpemU6IDIycHg7XHRcdFxyXG59XHJcblxyXG5oM3tcclxuXHRmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uZGF0b3MgaW1nIHtcclxuXHR3aWR0aDogXHQyMTBweDtcclxuXHRoZWlnaHQ6IDIxMHB4O1x0XHRcclxuXHRtYXJnaW46IGF1dG87XHRcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCA1MHB4IHJnYmEoMCwgMTI1LCAxMjUsIDAuOCk7XHJcbn1cclxuXHJcbi5taWZvdG8ge1xyXG5cdHBhZGRpbmctdG9wOiAzMHB4O1x0XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIHBhcmEgc2VjY2lvbmVzIGRlIGRhdG9zXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uc2VjY2lvbmVzIHtcclxuXHR3aWR0aDogODAlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcdFxyXG5cdGxlZnQ6IDIwJTtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnByb3llY3RvcywgLmhvYmJpZXMsIC5wYXp7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiA5MyU7XHJcblx0aGVpZ2h0OiA5MyU7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHRcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBwYXJhIGxhIHRhYmxhIGRlIHByb3llY3Rvc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbnRhYmxle1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn0gXHJcblxyXG50YWJsZSB0ZDpudGgtY2hpbGQoMSksIHRkOm50aC1jaGlsZCgzKSwgdGQ6bnRoLWNoaWxkKDQpIHtcclxuXHR3aWR0aDogMTUlO1xyXG59XHJcblxyXG50YWJsZSB0ZDpudGgtY2hpbGQoMikge1xyXG5cdHdpZHRoOiA1NSU7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGFibGUgdGQ6bnRoLWNoaWxkKDMpe1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkIHRyIHRoe1xyXG5cdC8vIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uL0ltYWdlcy9mb25kb3MvdGFibGExLmpwZyk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xyXG5cdGJvcmRlci1pbWFnZS1yZXBlYXQ6bm8tcmVwZWF0O1xyXG5cclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRjb2xvcjogcmdiKDU2LCAzMywgMCk7XHJcblx0Ym9yZGVyOiBzb2xpZCAjNkNFMkQ2IDFweDtcclxufVxyXG5cclxudGFibGUgdGJvZHkgdHIgdGR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDE2NywgMTIxLCAwLjYpO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRwYWRkaW5nOiAxMHB4O1x0XHJcblx0Ym9yZGVyOiBzb2xpZCAjNkNFMkQ2IDFweDsgXHJcblx0Y29sb3I6IHJnYig1NiwgMzMsIDApO1xyXG59XHJcblxyXG50cjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDAyNjBFO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBzdWJzZWNjaW9uIGRlIGRpdnMgZGUgaG9iYmllc1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLmhfaXRlbSB7XHJcblx0d2lkdGg6IDk3JTtcclxuXHRoZWlnaHQ6IDIwMHB4O1x0XHJcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdGNvbG9yOiAjNkNFMkQ2O1x0XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG59XHJcblxyXG5cclxuLmhfaXRlbSBpbWd7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRoZWlnaHQ6IDE5OHB4O1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uaF9pdGVtIGgze1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGNvbG9yOiByZ2IoNTYsIDMzLCAwKTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgXHR0ZXh0LXNoYWRvdzpcclxuICAgICAgIDFweCAxcHggMCAjNkNFMkQ2LFxyXG4gICAgIC0xcHggLTFweCAwICM2Q0UyRDYsICBcclxuICAgICAgMXB4IC0xcHggMCAjNkNFMkQ2LFxyXG4gICAgICAtMXB4IDFweCAwICM2Q0UyRDYsXHJcbiAgICAgICAxcHggMXB4IDAgIzZDRTJENjtcclxufVxyXG5cclxuXHJcbi5oX2l0ZW0gIGltZzpob3ZlcntcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdHRyYW5zZm9ybTogXHRzY2FsZSgxLjA4LDEuMDgpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gIHBhcmEgdmlkZW9cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5pZnJhbWUge1xyXG5cdHdpZHRoOiA5OCU7XHJcblx0aGVpZ2h0OiA0ODBweDsgXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContenidoPruebaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contenido-prueba',
                templateUrl: './contenido-prueba.component.html',
                styleUrls: ['./contenido-prueba.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uON1":
/*!***********************************************!*\
  !*** ./src/app/services/proyectos.service.ts ***!
  \***********************************************/
/*! exports provided: ProyectosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosService", function() { return ProyectosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_proyecto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/proyecto */ "RmHo");
/* harmony import */ var _assets_archive_proyectos_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/archive/proyectos.json */ "Czq1");
var _assets_archive_proyectos_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/archive/proyectos.json */ "Czq1", 1);




class ProyectosService {
    constructor() {
        this.proyectoDetalle = new _models_proyecto__WEBPACK_IMPORTED_MODULE_1__["Proyecto"]();
        this.proyectoLista = _assets_archive_proyectos_json__WEBPACK_IMPORTED_MODULE_2__;
        console.log(this.proyectoLista);
    }
}
ProyectosService.ɵfac = function ProyectosService_Factory(t) { return new (t || ProyectosService)(); };
ProyectosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProyectosService, factory: ProyectosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "b2u2");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _contenido_prueba_contenido_prueba_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contenido-prueba/contenido-prueba.component */ "ipNU");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portafolio/portafolio.component */ "H69E");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/resume.component */ "Q0x9");
/* harmony import */ var _detalle_proyecto_detalle_proyecto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detalle-proyecto/detalle-proyecto.component */ "+9FI");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");













const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'prueba', component: _contenido_prueba_contenido_prueba_component__WEBPACK_IMPORTED_MODULE_5__["ContenidoPruebaComponent"] },
    { path: 'aboutMe', component: _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_2__["AboutmeComponent"] },
    { path: 'myBlog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'portafolio', component: _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_7__["PortafolioComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"] },
    { path: 'detalle', component: _detalle_proyecto_detalle_proyecto_component__WEBPACK_IMPORTED_MODULE_9__["DetalleProyectoComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_10__["ExperienceComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyN2":
/*!***********************************************!*\
  !*** ./src/app/services/secciones.service.ts ***!
  \***********************************************/
/*! exports provided: SeccionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionesService", function() { return SeccionesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SeccionesService {
    constructor() {
        this.titulos = ['HOME',
            'ABOUT ME',
            'RESUME',
            'PORTAFOLIO',
            'BLOG',
            'CONTACT',
            'EXPERIENCE'];
        this.iconos = ['fi-xnsuxm-home-solid',
            'fi-xnsuxm-user-solid.png',
            'fi-xnsuxm-file-cv-solid.png',
            'fi-xwsuxl-folder-up-solid.png',
            'fi-xnsuxl-spreadsheet-solid.png',
            'fi-xwsuxl-envelope-solid.png',
            'fi-xnsuhm-git-logo.png'];
    }
}
SeccionesService.ɵfac = function SeccionesService_Factory(t) { return new (t || SeccionesService)(); };
SeccionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeccionesService, factory: SeccionesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeccionesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map