import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILoanItem } from 'src/app/interfaces/loan.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  investForm: FormGroup;
  available = 0;


  constructor(public dialogRef: MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ILoanItem,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.available = parseFloat(this.data.available.replace(/,/g, ''))
    this.investForm = this.fb.group({
      amount: ['', [Validators.min(0), Validators.max(this.available)]],
    });


  }

  closeDialog() {
    this.dialogRef.close();
  }

  invest() {
    this.dialogRef.close(this.investForm.value.amount);
  }

}
