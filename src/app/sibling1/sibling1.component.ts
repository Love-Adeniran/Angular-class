import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
    constructor(public userService : UserService){}
    public itemArray=[
        {item:"Yam", Price: 2000, status: "Available"},
        {item:"Beans", Price: 4000, status: "not-available"},
        {item:"Rice", Price: 5000, status: "Available"},
        {item:"cocoa", Price: 6000, status: "not-available"},
    ];
    ngOnInit():void{
        // this.getArray()
    }

    updateItem(items:object){
        this.userService.items.next(items)
    }
    // getArray(){
    //     console.log(this.itemArray);
    // }
}
