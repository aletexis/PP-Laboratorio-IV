import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminActiveGuard implements CanActivate {
  isLoggedIn$: Observable<boolean>; 

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isLoggedIn$.subscribe(data => {
        if(!data || this.authService.user.rol != 'admin'){
          this.router.navigateByUrl('login');
          alert("Debes inciar sesión como Administrador para ver este contenido.")
        }
      })
      return true;
  }
  
}
