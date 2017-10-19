import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employeeList/employeeCount.component.html',
    styleUrls: ['app/employeeList/employeeCount.component.css']
})

export class EmployeeCountComponent {

    selectedRadioButtonValue: string = 'all';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;

    onRadioButtonSelectionChangedEmiter() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}