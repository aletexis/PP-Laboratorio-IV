import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivarTerminosService {
  
  $aceptoTerminos = new BehaviorSubject<boolean>(false);

  constructor() { }

  get aceptoTerminos() {
    return this.$aceptoTerminos.asObservable();
  }
}
