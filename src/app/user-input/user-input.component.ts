import {Component, output, signal} from '@angular/core';
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

  enteredInvestment = signal<string>('0');
  enteredAnnualInvestment = signal<string>('0');
  enteredExpectedReturn = signal<string>('5');
  enteredDuration = signal<string>('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    })
    this.enteredInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
