export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;

    //computeMonthlySalary(annualSalary: number): number;
}

//export class Employee implements IEmployee {

//    //Konsutrukore w type script pozwala na deklarację zmiennych implementowanych w parametrach konstruktora
//    constructor(public code: string, public name: string, public gender: string, public annualSalary: number, public dateOfBirth: string)
//    {

//    }

//    computeMonthlySalary(annualSalary: number): number {
//        return annualSalary / 12;
//    }

//}