import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { PizzaInterface } from 'src/app/models/pizza-interface';
@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  @Output() nuevaPizza = new EventEmitter<PizzaInterface>();
  public altaPizzaForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    ingredientes: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(20)]],
    weight: [500, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(500), Validators.max(1000)]],
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.altaPizzaForm.controls;
  }

  getErrorMessage(field: string): string {
    let retorno = "";
    if(this.f[field].hasError("required")) {
      retorno = "Éste campo es obligatorio.";
    }
    else if(this.f[field].hasError("min")) {
      if(field == "price")
        retorno = "El precio mínimo es $20";
      else
        retorno = "El peso mínimo es 500gr.";
    }
    else if(this.f[field].hasError("max")) {
      if(field == "weight")
        retorno = "El peso máximo es 1000gr.";
    }
    else if(this.f[field].getError('pattern')){
      retorno = "Formato inválido."
    }
    return retorno;
  }

  isNotValidField(field: string): boolean {
    return (this.f[field].touched || this.f[field].dirty == true)
      && !this.f[field].valid;
  }

  emitNewPizza(){
    let pizza = this.altaPizzaForm.value;
    let nuevaPizza:PizzaInterface = {
      id: Guid.create().toString(),
      name: pizza.nombre,
      ingredientes: pizza.ingredientes,
      price: pizza.price,
      weight: pizza.weight
    }
    this.nuevaPizza.emit(nuevaPizza);
  }
}
