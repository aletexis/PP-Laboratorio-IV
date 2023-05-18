import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoRepartidoresComponent } from './componentes/listado-repartidores/listado-repartidores.component';
import { DetalleRepartidoresComponent } from './componentes/detalle-repartidores/detalle-repartidores.component';
import { MasterRepatidoresComponent } from './componentes/master-repatidores/master-repatidores.component';
import { PizzaComponent } from './componentes/pizza/pizza.component';
import { ModificaComponent } from './componentes/pizza/modifica/modifica.component';
import { AltaComponent } from './componentes/pizza/alta/alta.component';
import { ListaComponent } from './componentes/pizza/lista/lista.component';
import { BorraComponent } from './componentes/pizza/borra/borra.component';
import { ToastModule } from 'primeng/toast';

import {ChartModule} from 'primeng/chart';
import { RegisterComponent } from './componentes/register/register.component';
import { AceptarTerminosComponent } from './componentes/aceptar-terminos/aceptar-terminos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BienvenidaComponent,
    DetallePaisComponent,
    LoginComponent,
    ListadoRepartidoresComponent,
    DetalleRepartidoresComponent,
    MasterRepatidoresComponent,
    PizzaComponent,
    ModificaComponent,
    AltaComponent,
    ListaComponent,
    BorraComponent,
    RegisterComponent,
    AceptarTerminosComponent,
    // TablaPaisesComponent,
    // AltaRepartidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    ChartModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
