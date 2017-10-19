"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var interpolation_1 = require("./interpolation/interpolation");
var styleExample1_component_1 = require("./StyleExample1/styleExample1.component");
var styleExample2_component_1 = require("./StyleExample2/styleExample2.component");
var EventExample_1 = require("./EventExample/EventExample");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, employee_component_1.EmplyeeComponent, interpolation_1.InterpolationExamples, styleExample2_component_1.StyleExample2Component, styleExample1_component_1.StyleExample1Component, EventExample_1.AppEvent],
        bootstrap: [styleExample2_component_1.StyleExample2Component, app_component_1.AppComponent, EventExample_1.AppEvent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map