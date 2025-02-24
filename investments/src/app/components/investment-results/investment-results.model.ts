export interface IAnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

export interface IInvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}
