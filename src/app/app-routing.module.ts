import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './home/personajes/personajes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { DetallesComponent } from './home/personajes/detalles/detalles.component';

const routes: Routes = [
  {
    path: `` ,
    component: HomeComponent
  },
  {
    path: `home` ,
    component: HomeComponent
  },
  {
    path: `personajes`,
    component: PersonajesComponent
  },
  {
    path: `detalles/:personaje`,
    component: DetallesComponent
  },
  {
    path: `login`,
    component: LoginComponent
  },
  {
    path: `register`,
    component: RegisterComponent
  },
  {
    path: `about`,
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
