import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin=false;  

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.getLogin().subscribe(value=>this.isLogin=value);
  }

  logOut(){
    this.authService.setLoging(false);
    localStorage.clear();
    this.router.navigate(["/login"]);

  }

}
