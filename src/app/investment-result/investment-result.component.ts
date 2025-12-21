import {Component, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  @Input() investment!: number;
  @Input() annualInvestment!: number;
  @Input() expectedReturn!: number;
  @Input() duration!: number;



  calculateInvestmentResults() {
    const annualData = [];
    let investmentValue = this.investment;



    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.investment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.investment + this.annualInvestment * year,
      });
    }

    return annualData;
  }

}
