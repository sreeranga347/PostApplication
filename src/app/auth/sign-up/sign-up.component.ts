import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { AlertService } from 'src/app/customeDialog/alert.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();

  constructor(private authService: AuthService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.createUser(this.user).subscribe(response => {
      this.alertService.openDialog(response['message'])
    },
      error => {
        this.alertService.openDialog(error.error.message)
      }
    )
  }

}
