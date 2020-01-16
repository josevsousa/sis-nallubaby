import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  // canActivate(
  //   router: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): 
  //   Observable<boolean> | boolean {
      
  //     if(!this.authService.statusLogin()){
  //       return false;
  //     }

  //     this.router.navigate(['/inicio']);
  //     return true;
  // }
  
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.afAuth.auth.onAuthStateChanged(user=>{
        if(user) this.router.navigateByUrl('/inicio');

        resolve(!user ? true : false);
      })
    });
  }

}