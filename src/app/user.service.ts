import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) { }
  myName = "Kunle"
  public baseUrl = environment.baseUrl;


  public items = new BehaviorSubject({});
  
//   ngOnInit(){}
    getData(){
        // return this.http.get("http://jsonplaceholder.typicode.com/users");
        return this.http.get("http://api.github.com/users");

    } 

    public signUp (obj:any) {
        return this.http.post<any>(`${this.baseUrl}/signup.php`, obj)
    }

    public signIn(login:object){
        return this.http.post<any>(`${this.baseUrl}/login.php`, login);
        // let localStorage['jwt-token'] = 
        
    }

    displayBlog(){
        return this.http.get<any>(`${this.baseUrl}/displaymyBlog.php`);
    }

    // sendData(data){
    //     return this.http.post("http://jsonplaceholder.typicode.com/users",data)
    // }
}
