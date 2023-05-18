import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { BehaviorSubject } from 'rxjs';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public cargando: boolean = false;
  public hide: boolean = false;
  public usuario: string = "";
  public error: boolean = false;
  public errorMsj = new BehaviorSubject<string>("");
  public regisForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required,  Validators.minLength(6)]],
  });


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private afs: FirebaseService) {

  }

  ngOnInit() { }

  get f(): { [key: string]: AbstractControl } {
    return this.regisForm.controls;
  }

  onRegister() {
    this.cargando = true;
    this.error = false;
    this.auth.register(this.regisForm.value.email, this.regisForm.value.password).then((resp) => {
      if (resp) {
        let user = this.regisForm.value as UserInterface;
        user.id = Guid.create().toString();
        this.afs.setObj('users', user).then(() => {
            let userInterface = this.regisForm.value as UserInterface;
            // this.auth.refreshData(userInterface);
            this.router.navigateByUrl("aceptar-terminos");
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
    if(this.f[field].hasError("required")) {
      retorno = "Complete este campo.";
    }
    else if(this.f[field].hasError("minlength")) {
      retorno = "Mínimo de carácteres 6";
    }
    else if(this.f[field].hasError("email")){
      retorno = "Not valid email.";
    }
    return retorno;
  }

  isNotValidField(field: string): boolean {
    return (this.f[field].touched || this.f[field].dirty)
      && !this.f[field].valid;
  }

}
