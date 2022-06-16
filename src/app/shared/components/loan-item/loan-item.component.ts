import { Component, Input, OnInit } from '@angular/core';
import { ILoanItem } from './../../../interfaces/loan.interface';

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.scss']
})
export class LoanItemComponent implements OnInit {
  @Input() loan: ILoanItem;


  constructor() { }

  ngOnInit(): void {
    console.log(this.loan)
  }

}
