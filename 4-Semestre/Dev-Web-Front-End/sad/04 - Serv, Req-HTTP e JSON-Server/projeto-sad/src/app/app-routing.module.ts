import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DeletePageComponent } from './pages/delete-page/delete-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'manager-page', component: ManagerPageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'delete-page', component: DeletePageComponent },
  { path: 'update-page', component: UpdatePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
