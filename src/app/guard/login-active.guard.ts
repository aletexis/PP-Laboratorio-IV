import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginActiveGuard implements CanActivate {
  isLoggedIn$: Observable<boolean>; 

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedIn$.subscribe(data => {
        if(!data){
          this.router.navigateByUrl('login');
        }
      })
      return true;
  }
  
}
