import { Component } from '@angular/core';
import { ILoanItem } from './interfaces/loan.interface';

import loansData from './shared/current-loans.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  loans: ILoanItem[] = loansData
  
}
