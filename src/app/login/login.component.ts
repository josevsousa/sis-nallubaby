import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  login(): void{
    this.authService.login();

    // this.authService.login().then(()=>{
    //   this.router.navigateByUrl('/home')
    // });
  }

}
