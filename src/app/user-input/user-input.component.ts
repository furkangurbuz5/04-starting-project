import {Component, output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import type {InvestmentInputModel} from "../investment-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInputModel>();

  enteredInvestment: string = '0';
  enteredAnnualInvestment: string = '0';
  enteredExpectedReturn: string = '5';
  enteredDuration: string = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: parseInt(this.enteredInvestment),
      duration: parseInt(this.enteredDuration),
      expectedReturn: parseInt(this.enteredExpectedReturn),
      annualInvestment: parseInt(this.enteredAnnualInvestment),
    })
  }
}
