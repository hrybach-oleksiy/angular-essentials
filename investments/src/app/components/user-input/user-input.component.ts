import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  public initialInvestment: string = '0';
  public annualInvestment: string = '0';
  public expectedReturn: string = '5';
  public duration: string = '10';

  private investmentResultsService = inject(InvestmentResultsService);

  public onSubmit(): void {
    this.investmentResultsService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
