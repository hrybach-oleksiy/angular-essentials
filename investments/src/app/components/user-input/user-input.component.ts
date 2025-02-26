import { Component, inject, signal } from '@angular/core';

import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  public initialInvestment = signal<string>('0');
  public annualInvestment = signal<string>('0');
  public expectedReturn = signal<string>('5');
  public duration = signal<string>('10');

  private investmentResultsService = inject(InvestmentResultsService);

  public onSubmit(): void {
    this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
