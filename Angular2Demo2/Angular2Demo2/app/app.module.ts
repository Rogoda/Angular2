import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from "./employeeList/employeeList.component";
import { EmployeeTitlePipe } from './employeeList/employeeTitle.pipe';
import { EmployeeCountComponent } from './employeeList/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
