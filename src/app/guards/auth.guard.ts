import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from "../services/auth.service";
// import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean> | boolean {
      
      if(this.authService.statusLogin()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
  
}
