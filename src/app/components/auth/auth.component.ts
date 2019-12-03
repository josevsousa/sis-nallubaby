import { Component} from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(){
    this.authService.login();
    this.router.navigate(['/inicio']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
