import { Component, OnInit } from '@angular/core';
import { Obilazak } from './obilazak';

@Component({
  selector: 'app-obilazak',
  templateUrl: './obilazak.component.html',
  styleUrls: ['./obilazak.component.css']
})
export class ObilazakComponent  implements OnInit {

  obilazaks: Obilazak[] = [
    {naziv: 'Dvorac Karadojrdjevica',cena: 1200,ocena: 10}, 
    {naziv: 'Dvorac kraljice Sisi', cena:  1000, ocena: 10},
    {naziv: 'Narodni muzej', cena: 500,ocena: 9},
    {naziv: 'Muzej savremene umetnosti', cena: 450, ocena: 10},
    {naziv: 'Botanicka basta', cena: 700, ocena: 9},
    {naziv: 'Muzej cokolae', cena: 300, ocena: 8},
    {naziv: 'Galerija', cena: 600, ocena: 8} 
  ];

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
