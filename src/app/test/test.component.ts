import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
    constructor (@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TestComponent>) {}

    public name = '';
    public gender = '';

    ngOnInit () {
        this.name = this.data.name;
        this.gender = this.data.gender
    }

    submit() {
        let obj = {name: this.name, gender: this.gender};
        this.dialogRef.close(obj);
    }

}
