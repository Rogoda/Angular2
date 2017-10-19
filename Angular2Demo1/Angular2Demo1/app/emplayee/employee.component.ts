import { Component } from "@angular/core"

@Component({
    selector: 'my-emplyee',
    templateUrl: 'app/emplayee/employee.component.html'
})

export class EemployeeModel
{
    name: string = "Tom";
    showDetalis: boolean = false;

    toggleDetais(): void {
        this.showDetalis = !this.showDetalis;
    }
}