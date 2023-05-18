import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

    


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public userService: UserService) {}
        ngOnInit(){
            this.userService.displayBlog().subscribe(data=>{
                console.log(data);
            })
        }
    // public getArray(){
    //     console.log(this.itemArray);
        
    // }

//   createBlog(addblog:object){
//     this.userService.displayBlog().subscribe(data=>{
//         console.log(data);
        
//     })
//   }

}
