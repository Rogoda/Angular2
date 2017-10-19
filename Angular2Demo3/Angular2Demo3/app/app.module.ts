import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from "./employeeList/employeeList.component";
import { EmployeeTitlePipe } from './employeeList/employeeTitle.pipe';
import { EmployeeCountComponent } from './employeeList/employeeCount.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }