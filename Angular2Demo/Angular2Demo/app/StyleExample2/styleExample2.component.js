"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StyleExample2Component = (function () {
    function StyleExample2Component() {
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
    }
    StyleExample2Component.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal',
        };
        return styles;
    };
    return StyleExample2Component;
}());
StyleExample2Component = __decorate([
    core_1.Component({
        selector: 'style-ex2',
        template: "\n                <button style='color:red;' [style.font-weight]=\"isBold ? 'bold' : 'normal'\">My Button</button>\n                <br/><br/>\n                <button style='color:red;' [style.font-size.px]=\"fontSize\">My Button</button>\n                <br/><br/>\n                <button style='color:red;' [ngStyle]=\"addStyles()\">My Button</button>\n            ",
    })
], StyleExample2Component);
exports.StyleExample2Component = StyleExample2Component;
//# sourceMappingURL=styleExample2.component.js.map