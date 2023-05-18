import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {
    public itemDetails: any = {}
    constructor(public userService : UserService){}
    ngOnInit():void{
        this.getItemDetails()
    }

    public getItemDetails(){
        this.userService.items.subscribe(data=>{
            console.log(data);
            this.itemDetails = data;
            
        })
    }
}
