import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmplyeeComponent } from './employee/employee.component'
import { InterpolationExamples } from './interpolation/interpolation'
import { StyleExample1Component } from './StyleExample1/styleExample1.component'
import { StyleExample2Component } from './StyleExample2/styleExample2.component'
import { AppEvent } from './EventExample/EventExample'

@NgModule({
    imports:[BrowserModule],
    declarations: [AppComponent, EmplyeeComponent, InterpolationExamples, StyleExample2Component, StyleExample1Component, AppEvent],
    bootstrap: [StyleExample2Component, AppComponent,   AppEvent]
})
export class AppModule { }
