import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Location } from "@angular/common";
import { Observable } from 'rxjs';
// import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public location: Location
    ) { }

  ngOnInit() {
  }

  login(): void{
    this.authService.login();
  }

  backPage(){
    this.location.back();
  }

  logout(): void{
    this.authService.logout()
  }

}
