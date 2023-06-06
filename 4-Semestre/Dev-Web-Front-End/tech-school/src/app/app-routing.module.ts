import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './pages/curso/curso.component';
import { HomeComponent } from './pages/home/home.component';
import { CursoNovoComponent } from './pages/curso-novo/curso-novo.component';
import { CursoDetalhesComponent } from './pages/curso-detalhes/curso-detalhes.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'curso/:id',
    component: CursoComponent
  },
  {
    path: 'curso-novo',
    component: CursoNovoComponent
  },
  {
    path: 'curso-detalhes/:id',
    component: CursoDetalhesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrar',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
