import { Component } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { TestComponent } from '../test/test.component';
import { Test2Component } from '../test2/test2.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(public router: Router, public snackbar: MatSnackBar, public dialog: MatDialog) {}
  public spinner = false
  public first_name = "";
  test() {
    alert('is working!')
    this.router.navigate(['/user'])
  }

  showSpinner() {
    this.spinner = true
    // this.snackbar.open("Heello", "", {
    //     duration: 6000
    // });

    this.snackbar.openFromComponent(Test2Component, {
        data: {message: "Deleted"},
        duration: 2000
    });
  }

  openDialog () {
    let dialog = this.dialog.open(TestComponent, {
        width: "600px",
        data: {name: "Dorcas", gender: "Female"}
    })
    dialog.afterClosed().subscribe(data => {
       if (data) {
        console.log(data.name);
       }
    })
  }
}
