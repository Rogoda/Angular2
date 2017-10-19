"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InterpolationExamples = (function () {
    function InterpolationExamples() {
        this.firstName = "Tom";
        this.lastName = 'Hopkins';
        this.hender = null;
        this.imagePath = 'http://www.pragimtech.com/Images/Logo.JPG';
    }
    InterpolationExamples.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return InterpolationExamples;
}());
InterpolationExamples = __decorate([
    core_1.Component({
        selector: 'my-interp',
        templateUrl: '/app/interpolation/interpolationExamples.html',
    })
], InterpolationExamples);
exports.InterpolationExamples = InterpolationExamples;
//# sourceMappingURL=interpolation.js.map