import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                <h1>{{pageHeader}}</h1>
                <my-interp></my-interp>
                <my-employee></my-employee>
                <button [attr.disabled]='disabled'>Click me</button>
                <style-ex1></style-ex1>
                <style-ex2></style-ex2>
            </div>`
})

export class AppComponent {
    disabled = false;
    pageHeader = 'Employee Datails';
}
