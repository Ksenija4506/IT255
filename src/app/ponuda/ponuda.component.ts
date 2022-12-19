import { Component, OnInit } from '@angular/core';
import { Ponuda } from './ponuda';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {

  ponudas: Ponuda[] = [
    {broj: 1,sprat: 1,cena: 1670}, 
    {broj: 5, sprat: 2, cena: 2000},
    {broj: 9, sprat: 3, cena: 3300} 
  ];
  
  
  constructor() {

  }

  ngOnInit(): void {
    
  }

}
