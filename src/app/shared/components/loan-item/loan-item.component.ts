import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ILoanItem } from './../../../interfaces/loan.interface';

@Component({
  selector: 'app-loan-item',
  templateUrl: './loan-item.component.html',
  styleUrls: ['./loan-item.component.scss']
})
export class LoanItemComponent implements OnInit {
  @Input() loan: ILoanItem;
  invested = false;
  @Output() inputValue = new EventEmitter<string>()

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '630px',
      height: '500px',
      data: this.loan
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.invested = true;
        let newAvailable = (Number(this.loan.available.replace(/,/g, '')) - result).toString();
        let newAmount = (Number(this.loan.amount.replace(/,/g, '')) + result).toString();
        this.loan.available = newAvailable == '0,0' ? newAvailable.slice(0,2) + ',' + newAvailable.slice(-3) : '0'
        this.loan.amount = newAmount.slice(0,2) + ',' + newAmount.slice(-3)
        this.inputValue.emit(result)
      }
    });
  }

}
