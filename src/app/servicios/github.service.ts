import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url = 'https://api.github.com/users/aletexis';

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get(this.url);
  }
}
