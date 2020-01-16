import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.afAuth.auth.onAuthStateChanged(user=>{
        if(!user) this.router.navigateByUrl('/login');

        resolve(user ? true : false);
      })
    });
  }

}
