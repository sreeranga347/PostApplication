import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PostCreateComponent } from 'src/app/posts/post-create/post-create.component';
import { AlertService } from 'src/app/customeDialog/alert.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


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
    this.authService.authenticate(this.user).subscribe(response=> 
      {
        localStorage.setItem("token",response['token'])
        localStorage.setItem("expiresIn",response['expiresIn'])
        localStorage.setItem("userId",response['userId'])
        this.authService.setLoging(true);
        this.router.navigate(['/home'])
      },
      error=>{
        this.alertService.openDialog(error.error.message);
      }
      )
  }

}
