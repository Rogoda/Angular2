import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from "./employeeList/employeeList.component";
import { EmployeeTitlePipe } from './employeeList/employeeTitle.pipe';
import { EmployeeCountComponent } from './employeeList/employeeCount.component';
import { HomeComponent } from './Home/home.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';
import { EmployeeComponent } from './employee/employee.component';

import { EmployeeService } from './employeeList/employee.service';
import { UserPreferencesService } from './employee/userPreferences.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash : true })],
    declarations: [AppComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, HomeComponent, PageNotFoundComponent, EmployeeComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService, UserPreferencesService],
})
export class AppModule { }