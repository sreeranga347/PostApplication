import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { AlertService } from 'src/app/customeDialog/alert.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();

  constructor(private authService: AuthService,private alertService:AlertService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let msg = this.authService.createUser(this.user);
    this.alertService.openDialog(msg);
    

  }

}
