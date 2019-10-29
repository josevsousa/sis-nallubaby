import { Component} from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(
    private authService: AuthService
  ) { }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
