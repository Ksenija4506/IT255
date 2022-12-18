import { Component, OnInit } from '@angular/core';
import { Soba } from './soba';
@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})
export class SobaComponent  implements OnInit{

  sobas: Soba[] = [
    {broj: 1,sprat: 1,cena: 1670}, 
    {broj: 5, sprat: 2, cena: 2000},
    {broj: 9, sprat: 3, cena: 3300} 
  ];
  

  constructor() {

  }

  ngOnInit(): void {
    }
    
  addSoba(broj: HTMLInputElement, sprat: HTMLInputElement, cena: HTMLInputElement): boolean {
    console.log(`Dodavanje broja sobe: ${broj.value}, sprata na kome se soba nalazi: ${sprat.value} i cene sobe po nocenju: ${cena.value}`);      
    this.sobas.push(new Soba(broj.value, sprat.value, cena.value));
    broj.value = '';
    sprat.value = '';
    cena.value = '';
    return false;
  }
}
