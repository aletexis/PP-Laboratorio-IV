import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivarTerminosService } from '../../servicios/activar-terminos.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-aceptar-terminos',
  templateUrl: './aceptar-terminos.component.html',
  styleUrls: ['./aceptar-terminos.component.scss'],
  providers: [MessageService]
})
export class AceptarTerminosComponent implements OnInit {

  activarTerminosForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private formBuilder: FormBuilder, private aceptarTerminosService:ActivarTerminosService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.activarTerminosForm.controls;
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

  aceptarTerminos(){
    this.aceptarTerminosService.$aceptoTerminos.next(true);
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Ya puede viajar a otras rutas!'});
  }

}
