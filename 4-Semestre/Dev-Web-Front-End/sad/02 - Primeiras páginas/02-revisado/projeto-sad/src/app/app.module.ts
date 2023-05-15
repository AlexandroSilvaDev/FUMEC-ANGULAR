import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthService } from './services/auth.service';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { DeletePageComponent } from './delete-page/delete-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiniCardComponent,
    DashboardComponent,
    CardComponent,
    ManagerPageComponent,
    NavBarComponent,
    RegisterPageComponent,
    UpdatePageComponent,
    DeletePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
