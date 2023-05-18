import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaRepartidorComponent } from '../alta-repartidor/alta-repartidor.component';
import { ListadoPaisesComponent } from '../listado-paises/listado-paises.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AltaRepartidorComponent,
    ListadoPaisesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class AltaRepartidorModule { }
