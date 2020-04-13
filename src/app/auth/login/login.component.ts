import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PostCreateComponent } from 'src/app/posts/post-create/post-create.component';
import { AlertService } from 'src/app/customeDialog/alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private alertService:AlertService,private router:Router) { }
  user=new User();

  ngOnInit(): void {
  }

  login(){
    let userExit= this.authService.validateUser(this.user);
    var msg;
    if(userExit){
      msg="login successful"
      this.router.navigate(['/home'])
    }else{
      msg="Wrong email or password"
    }
    this.alertService.openDialog(msg);
    
  }

}
