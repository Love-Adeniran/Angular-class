import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent {
    constructor(public actRoute:ActivatedRoute){}
    ngOnInit(){
        console.log(this.actRoute.snapshot.params['username'])
    }
}
