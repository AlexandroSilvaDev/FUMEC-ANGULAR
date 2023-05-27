import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { CardComponent } from './components/card/card.component';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthService } from './services/auth.service';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { DeletePageComponent } from './pages/delete-page/delete-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiniCardComponent,
    DashboardComponent,
    // CardComponent,
    ManagerPageComponent,
    NavBarComponent,
    RegisterPageComponent,
    UpdatePageComponent,
    DeletePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
