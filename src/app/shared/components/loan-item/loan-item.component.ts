import { Component, Input, OnInit } from '@angular/core';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.loan)
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '630px',
      height: '500px',
      data: this.loan
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
