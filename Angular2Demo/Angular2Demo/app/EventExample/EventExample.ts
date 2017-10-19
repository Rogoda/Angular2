import {Component} from "@angular/core"

@Component({
    selector: 'my-events',
    template: `<button (click)='onClick()'>Click my EVENT</button>`    
})

export class AppEvent {
    onClick(): void {
        console.log('Button Clicked');
    }
}