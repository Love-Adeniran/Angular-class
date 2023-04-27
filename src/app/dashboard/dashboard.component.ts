import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    myName = "Adeniran love"
    student: {} ={
        firstname: "love",
        lastname : "adeniran",
    }
    score: number = 34.3945;
    myDate = new Date();
    
}
