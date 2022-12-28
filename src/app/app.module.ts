import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { OnamaComponent } from './onama/onama.component';
import { ObrokComponent } from './obrok/obrok.component';
import { IzlazakComponent } from './izlazak/izlazak.component';
import { ObilazakComponent } from './obilazak/obilazak.component';
import { ZavisnostiComponent } from './zavisnosti/zavisnosti.component';


@NgModule({
  declarations: [
    AppComponent,
    SobaComponent,
    NavbarComponent,
    PonudaComponent,
    OnamaComponent,
    ObrokComponent,
    IzlazakComponent,
    ObilazakComponent,
    ZavisnostiComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
