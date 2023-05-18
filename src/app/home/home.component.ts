import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor (public userService: UserService, public router: Router) {
    };

    public first_name = "";
    public last_name = "";
    public email = "";
    public password = "";
    ngOnInit () {

    }

    signUp () {
        let obj = {first_name: this.first_name, last_name: this.last_name, email: this.email, password: this.password};
        this.userService.signUp(obj).subscribe(data => {
            console.log(data);
        })
        this.router.navigate(['/signin'])
    }
}
