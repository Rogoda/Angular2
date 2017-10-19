"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StyleExample1Component = (function () {
    function StyleExample1Component() {
        this.classesToApply = 'italicsClass boldClass';
        this.applyBoldClass = true;
        this.applyItalicsClass = true;
    }
    StyleExample1Component.prototype.addClasses = function () {
        var styles = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return styles;
    };
    return StyleExample1Component;
}());
StyleExample1Component = __decorate([
    core_1.Component({
        selector: 'style-ex1',
        template: "\n                <button class='colorClass' [class]='classesToApply'>My Button</button>\n                <br/><br/>\n                <button class='colorClass italicsClass boldClass' [class.boldClass]='!applyBoldClass'>My Button</button>\n                <br/><br/>\n                <button class='colorClass' [ngClass]='addClasses()'>My Button</button>\n            ",
        styleUrls: ['app/StyleExample1/ButtonStyles.css'],
    })
], StyleExample1Component);
exports.StyleExample1Component = StyleExample1Component;
//# sourceMappingURL=styleExample1.component.js.map