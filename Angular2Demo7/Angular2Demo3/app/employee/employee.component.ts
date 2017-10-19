import { Component , OnInit } from "@angular/core";
import { IEmployee } from "../employeeList/employee";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../employeeList/employee.service";
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/scan'
import { ISubscription } from 'rxjs/Subscription'

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = "Loading data. Please wait...";

    subscription: ISubscription;

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router)
    {

    }

    onCancelButtonClick(): void {
        this.statusMessage = "Request Canceled";
        this.subscription.unsubscribe();
    }

    onBackButtonClick() {
        this._router.navigate(['/employees']);
    }

    ngOnInit()
    {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this.subscription = this._employeeService.getEmployeeByCode(empCode)
            //.retry()
            //.retry(3)
            //.retryWhen((err)=>err.delay(1000))
            .retryWhen((err) => {
                return err.scan((retryCount) => {
                    retryCount += 1;
                    if (retryCount < 6)
                    {
                        this.statusMessage = "Retrying...Attempt #" + retryCount;
                        return retryCount;
                    }
                    else
                    {
                        throw (err);
                    }
                }, 0).delay(1000)
            })
            .subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = "Employee with the specified code does not exist";
                }
                else
                {
                    this.employee = employeeData
                }
            },(error) => {
            this.statusMessage = "Problem with the service. Please try again after sometime";
            console.log(error);
        })
    }
}