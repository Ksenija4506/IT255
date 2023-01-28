import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { RoomComponent } from './room/room.component';
import { ApiService } from './shared/api.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';



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
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
