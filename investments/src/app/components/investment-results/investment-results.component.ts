import { Component, computed, inject } from '@angular/core';

import { InvestmentResultsService } from './investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentResultsService = inject(InvestmentResultsService);

  public results = computed(() => this.investmentResultsService.resultData());

  // as alternative to the above line, you can use the following line
  // public results = this.investmentResultsService.resultData.asReadonly();
}
