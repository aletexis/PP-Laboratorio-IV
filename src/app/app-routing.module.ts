import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginActiveGuard } from 'src/app/guard/login-active.guard';
import { AdminActiveGuard } from 'src/app/guard/admin-active.guard';
import { AltaRepartidorComponent } from './componentes/alta-repartidor/alta-repartidor.component';
import { MasterRepatidoresComponent } from './componentes/master-repatidores/master-repatidores.component';
import { PizzaComponent } from './componentes/pizza/pizza.component';
import { RegisterComponent } from './componentes/register/register.component';
import { AceptarTerminosComponent } from './componentes/aceptar-terminos/aceptar-terminos.component';
import { TerminosGuardGuard } from './guard/terminos-guard.guard';

const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'aceptar-terminos', component: AceptarTerminosComponent, canDeactivate:[TerminosGuardGuard]},
  {path: 'alta-repartidor', component: AltaRepartidorComponent, canActivate:[LoginActiveGuard], loadChildren: () => import('../app/componentes/alta-repartidor/alta-repartidor.module').then(m => m.AltaRepartidorModule)},
  {path: 'mostrar-repartidores', component: MasterRepatidoresComponent},
  {path: 'pizzas', component: PizzaComponent, canActivate:[AdminActiveGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
