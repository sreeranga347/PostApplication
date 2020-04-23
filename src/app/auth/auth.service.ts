import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  configUrl = 'http://54.198.226.103:4500/api/user';

  createUser(user: User) {
    let createdUser = JSON.parse(JSON.stringify(user));
    let body = JSON.parse(JSON.stringify(createdUser));
    let httpHeaders = new HttpHeaders();
    httpHeaders.append("Content-Type", "application/json")
    let options = {
      headers: httpHeaders
    }
    return this.http.post(this.configUrl + "/signup", body, options).pipe(catchError(this.handleError))

    //  var userExists=this.userList.find(userData =>{
    //     if(createdUser.email === userData.email){
    //       return userData;
    //     }else{
    //       return undefined;
    //     }
    //   }
    //      )
    //   if(userExists){
    //     return "Email Id is exist"
    //    }else{
    //     this.userList.push(createdUser);
    //     return "user created successfully"
    //   } 
    // this.userList.push(createdUser)   ;
    // return "agasdg"

  }

  authenticate(user: User) {
    let cloneUser = JSON.parse(JSON.stringify(user));
    let body = JSON.parse(JSON.stringify(cloneUser));
    let httpHeaders = new HttpHeaders();
    httpHeaders.append("Content-Type", "application/json")
    let options = {
      headers: httpHeaders
    }
    return this.http.post(this.configUrl + "/login", body, options).pipe(catchError(this.handleError));
    // return this.user;

    // var valideUser = this.userList.find(userData =>
    //   cloneUser.email == userData.email && cloneUser.password == userData.password
    // )
    // return valideUser;
  }

  private handleError(error: Response) {
    // let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return throwError(error)
  }

  setLoging(value:boolean){
    this.isLogin.next(value);
  }
  
  getLogin(){
  return  this.isLogin;
  }
}
