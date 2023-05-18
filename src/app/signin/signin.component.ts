import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    email = "";
    password = "";
    constructor( public user: UserService, public router: Router){}

    signIn(){
        let logindetails ={email: this.email, password: this.password}
        this.user.signIn(logindetails).subscribe(data=>{
            console.log(data)
            // this.router.navigate(['/dash'])
            if(data.success){
                localStorage['Userjwt'] = data.jwt;
                this.router.navigate(['/dash'])
            }
            else{
                console.log('e no see jwt ooo')
            }
            
        })
        
    }
}
