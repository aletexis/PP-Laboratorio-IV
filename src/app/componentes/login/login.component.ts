import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from 'src/app/models/user-interface';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public cargando: boolean = false;
  public hide: boolean = false;
  public usuario: string = "";
  public error: boolean = false;
  public errorMsj = new BehaviorSubject<string>("");
  public loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private afs: FirebaseService) {
  }

  ngOnInit() { }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onLogin() {
    this.cargando = true;
    this.error = false;
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password).then((resp) => {
      if (resp) {
        this.afs.getWithFilter('users', 'email', this.loginForm.value.username).subscribe(user => {
          if (user) {
            let userInterface = user[0] as UserInterface;
            this.auth.refreshData(userInterface);
            this.router.navigateByUrl("");
          }
        })
      }
    }).catch(e => {
      this.errorMsj.next(e.message);
      this.error = true;
      this.cargando = false;
      console.info("ERROR ->", e);
    });
  }

  getErrorMessage(field: string): string {
    let retorno = "";
    if (this.f[field].hasError("required")) {
      retorno = "Complete este campo";
    }
    else if (this.f[field].hasError("minlength")) {
      retorno = "Mínimo de carácteres 6";
    }
    else if (this.f[field].hasError("email")) {
      retorno = "Correo no válido.";
    }
    return retorno;
  }

  isNotValidField(field: string): boolean {
    return (this.f[field].touched || this.f[field].dirty)
      && !this.f[field].valid;
  }

  completarLogin(tipo: string) {
    if (tipo == "admin") {
      this.loginForm.setValue({ username: "usuarioadmin@gmail.com", password: "123456admin" });
    }
    else if (tipo == "employee") {
      this.loginForm.setValue({ username: "usuario@gmail.com", password: "123456" });
    }
  }
}