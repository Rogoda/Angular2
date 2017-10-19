import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                <div style="padding:5px">
                    <ul class="nav nav-tabs">
                        <li routerLinkActive="active">
                            <a routerLink="home">Home</a>
                        </li>
                        <li routerLinkActive="active">
                            <a routerLink="employees">Employees</a>
                        </li>
                    </ul>
                    <br />
                    <router-outlet></router-outlet>
                </div>
                
                <br/>
                <hr/>                
                <br/>

                <list-employee></list-employee>
            </div>`,
})
export class AppComponent  {
}
