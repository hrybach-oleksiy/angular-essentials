import { Injectable } from '@angular/core';

import type { IAnnualData, IInvestmentInput } from './investment-results.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentResultsService {
  public annualData: IAnnualData[] = [];

  constructor() {}

  public calculateInvestmentResults(userInput: IInvestmentInput): void {
    let investmentValue = userInput.initialInvestment;

    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue -
        userInput.annualInvestment * year -
        userInput.initialInvestment;

      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          userInput.initialInvestment + userInput.annualInvestment * year,
      });
    }
  }
}
