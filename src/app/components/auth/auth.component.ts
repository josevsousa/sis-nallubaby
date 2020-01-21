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
    public authService: AuthService,
    private router: Router
  ) { }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
    // this.router.navigateByUrl('/login')
  }

}
