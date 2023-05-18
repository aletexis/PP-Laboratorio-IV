import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivarTerminosService } from '../servicios/activar-terminos.service';

@Injectable({
  providedIn: 'root'
})
export class TerminosGuardGuard implements CanDeactivate<unknown> {


  constructor(private authService: ActivarTerminosService) {
  }
  
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.aceptoTerminos;
  }
  
}
