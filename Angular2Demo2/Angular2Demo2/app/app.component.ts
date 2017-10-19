import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <div>
                Your Text : <input type='text' [(ngModel)]='userText'/>
                <br/><br/>
                <simple [simpleInput]='userText'></simple>
            </div>
            <br/>
            <hr/>
            <br/>
            <div>
                <list-employee></list-employee>
            </div>`,
})
export class AppComponent  {
    userText: string = 'Pragim';
}
