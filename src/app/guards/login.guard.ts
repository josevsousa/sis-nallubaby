import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.afAuth.auth.onAuthStateChanged(user=>{
        if(user) this.router.navigate(['/inicio']);

        resolve(!user ? true : false);
      })
    });
  }

}