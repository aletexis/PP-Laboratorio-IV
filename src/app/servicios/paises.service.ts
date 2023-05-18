import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url = 'https://restcountries.com/v2/';

  constructor(private http: HttpClient) { }

  public obtenerPaises(param:string = "") {
    return this.http.get(this.url + param);
  }

  public obtenerPaisesNorthAmerica(){
    return this.http.get(this.url + "regionalbloc/NAFTA");
  }

  public obtenerPaisesXNombre(nombre:string){
    return this.http.get(this.url + `name/${nombre}`);
  }

}
