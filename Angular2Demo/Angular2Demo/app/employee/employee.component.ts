import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})

export class EmplyeeComponent {
    colspanSize = 2;
    tableTitle = "Tytuł tabeli"
    firstname: string = 'Tom';
    lastname: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}