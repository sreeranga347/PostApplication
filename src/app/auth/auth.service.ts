import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userList: User[] = [];
  constructor() { }

  createUser(user: User):string {
   let createdUser=JSON.parse(JSON.stringify(user));
   var userExists=this.userList.find(userData =>{
      if(createdUser.email === userData.email){
        return userData;
      }else{
        return undefined;
      }
    }
       )
    if(userExists){
      return "Email Id is exist"
     }else{
      this.userList.push(createdUser);
      return "user created successfully"
    } 
    // this.userList.push(createdUser)   ;
    // return "agasdg"
    
  }

  validateUser(user: User):User {
    let cloneUser=JSON.parse(JSON.stringify(user));
    var valideUser = this.userList.find(userData =>
      cloneUser.email == userData.email && cloneUser.password == userData.password
    )
    return valideUser;
  }

}
