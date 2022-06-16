import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILoanItem } from 'src/app/interfaces/loan.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public investForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ILoanItem,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.investForm = this.fb.group({
      amount: ['', [this.numberValidator]],
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

  numberValidator(control: FormControl) {
    if (isNaN(control?.value)) {
      return {
        number: true
      }
    }
    return null;
  }

}
