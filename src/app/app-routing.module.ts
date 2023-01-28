import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IzlazakComponent } from './izlazak/izlazak.component';
import { ObilazakComponent } from './obilazak/obilazak.component';
import { ObrokComponent } from './obrok/obrok.component';
import { OnamaComponent } from './onama/onama.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { RoomComponent } from './room/room.component';
import { SobaComponent } from './soba/soba.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';

const routes: Routes = [
  {
    path : '',
    component: SobaComponent
  },
  {
    path : 'ponuda',
    component : PonudaComponent
  },
  {
    path : 'onama',
    component : OnamaComponent
  },
  {
    path : 'obrok',
    component : ObrokComponent
  },
  {
    path : 'izlazak',
    component : IzlazakComponent
  },
  {
    path : 'obilazak',
    component : ObilazakComponent
  },
  {
    path : 'room',
    component : RoomComponent
  },
  {
    path : 'todo-home',
    component : TodoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
