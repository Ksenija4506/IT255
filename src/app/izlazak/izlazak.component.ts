import { Component, OnInit } from '@angular/core';
import { Izlazak } from './izlazak';

@Component({
  selector: 'app-izlazak',
  templateUrl: './izlazak.component.html',
  styleUrls: ['./izlazak.component.css']
})
export class IzlazakComponent implements OnInit {

  izlazaks: Izlazak[] = [
    {naziv: 'Gradska kafana',adresa: 'Savski kej 78a',ocena: 10}, 
    {naziv: 'Up & Down', adresa: 'Mihajla Pupina1 8', ocena: 9},
    {naziv: 'Druga kuca', adresa: 'Ivana Milutinovica 14a',ocena: 9},
    {naziv: 'Tarapana', adresa: 'Usce 48', ocena: 8},
    {naziv: 'River', adresa: 'Usce bb', ocena: 7} 
  ];
  

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
