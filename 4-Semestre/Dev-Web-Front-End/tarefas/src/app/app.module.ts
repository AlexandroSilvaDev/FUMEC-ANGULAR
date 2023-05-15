import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers, Storage } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TarefaNovaComponent } from './tarefa-nova/tarefa-nova.component';
import { TarefaAtualizaComponent } from './tarefa-atualiza/tarefa-atualiza.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TarefaNovaComponent,
    TarefaAtualizaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicStorageModule.forRoot({
    name: '_tarefasDB',
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
