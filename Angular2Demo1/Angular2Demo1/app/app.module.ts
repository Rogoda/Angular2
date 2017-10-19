import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EemployeeModel } from './emplayee/employee.component'
import { EmployeeListComponent } from './employeeList/employeeList.component'
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EemployeeModel, EmployeeListComponent],
    bootstrap: [AppComponent, EmployeeListComponent]
})
export class AppModule { }
