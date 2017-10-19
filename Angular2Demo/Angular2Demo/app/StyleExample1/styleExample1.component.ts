import { Component } from "@angular/core"

@Component({
    selector: 'style-ex1',
    template: `
                <button class='colorClass' [class]='classesToApply'>My Button</button>
                <br/><br/>
                <button class='colorClass italicsClass boldClass' [class.boldClass]='!applyBoldClass'>My Button</button>
                <br/><br/>
                <button class='colorClass' [ngClass]='addClasses()'>My Button</button>
            `,
    styleUrls: ['app/StyleExample1/ButtonStyles.css'],
})

export class StyleExample1Component {
    classesToApply: string = 'italicsClass boldClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = true;

    addClasses()
    {
        let styles = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        }
        return styles;
    }
}