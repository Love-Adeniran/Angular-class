import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
constructor(public user : UserService){}
 res:any =[]

ngOnInit(){
    this.user.getData().subscribe((response:any)=>{
        console.log(response);
        this.res = response;
    })
}
}
