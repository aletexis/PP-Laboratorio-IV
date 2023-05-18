import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: UserInterface;
  public username = new BehaviorSubject<string>("");
  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private fauth: AngularFireAuth) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  logout(): Promise<void> {
    return this.fauth.signOut();
  }

  register(email: string, password: string): Promise<any> {
    return this.fauth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<any> {
    return this.fauth.signInWithEmailAndPassword(email, password);
  }

  refreshData(userParam: UserInterface) {
    this.user = userParam;
    this.username.next(userParam.username);
    this.loggedIn.next(true);
  }
}
