import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentResultsService } from './investment-results.service';
import { IAnnualData } from './investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // public annualData: IAnnualData[] = [];

  private investmentResultsService = inject(InvestmentResultsService);

  get results(): IAnnualData[] {
    return this.investmentResultsService.annualData;
  }
}
