import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
    constructor (@Inject(MAT_SNACK_BAR_DATA) public data: any,
     public snackbarRef: MatSnackBarRef<Test2Component>) {}
    
    closeSnackbar () {
        this.snackbarRef.dismiss();
    }
}

