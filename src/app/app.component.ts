import { Component, OnInit } from '@angular/core';
import { ILoanItem } from './interfaces/loan.interface';

import loansData from './shared/current-loans.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loans: ILoanItem[] = loansData;
  total: number = 0;

  ngOnInit(): void {
    this.loans.forEach( el => {
      this.total += parseFloat(el.available.replace(/,/g, ''))})
  }
  
  
}
