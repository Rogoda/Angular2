"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var userPreferences_service_1 = require("../employee/userPreferences.service");
var EmployeeListComponent = (function () {
    //Wywołany bez angular dependency injection
    function EmployeeListComponent(_employeeService, _userPreferencesService) {
        this._userPreferencesService = _userPreferencesService;
        this.selectedEmployeeCountRadioButton = 'All';
        this.statusMessage = "Loading data. Please wait...";
        this._employeeService = _employeeService;
    }
    Object.defineProperty(EmployeeListComponent.prototype, "colour", {
        get: function () {
            return this._userPreferencesService.colourPreference;
        },
        set: function (value) {
            this._userPreferencesService.colourPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployees().subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = "Problem with the service. Please thy again after some time.";
            console.error(error);
        });
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButton = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employeeList/employeeList.component.html',
        styleUrls: ['app/employeeList/employeeList.component.css'],
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, userPreferences_service_1.UserPreferencesService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map