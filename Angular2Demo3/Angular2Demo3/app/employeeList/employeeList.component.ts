import { Component ,OnInit} from "@angular/core"
import { IEmployee } from "./employee"
import { EmployeeService } from "./employee.service"

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employeeList/employeeList.component.html',
    styleUrls: ['app/employeeList/employeeList.component.css'],
    providers: [EmployeeService],
})

export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';

    statusMessage: string = "Loading data. Please wait...";

    private _employeeService: EmployeeService;
    //Wywołany bez angular dependency injection
    constructor(_employeeService: EmployeeService) {
        this._employeeService = _employeeService;
    }

    ngOnInit(): void {
        //this.employees = this._employeeService.getEmployees();
        this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData,
            (error) => {
                this.statusMessage = "Problem with the service. Please thy again after some time."
                console.error(error);
            });
    }

    onEmployeeCountRadioButton(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }
}