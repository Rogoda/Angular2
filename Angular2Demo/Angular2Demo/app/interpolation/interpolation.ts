import { Component } from '@angular/core'

@Component({
    selector: 'my-interp',
    templateUrl: '/app/interpolation/interpolationExamples.html',
})

export class InterpolationExamples
{
    firstName: string = "Tom";
    lastName: string = 'Hopkins';
    hender: string = null;
    imagePath: string = 'http://www.pragimtech.com/Images/Logo.JPG';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}