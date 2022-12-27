import { TitleCasePipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Soba } from './soba';
@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})
export class SobaComponent  implements OnInit{

  forma: FormGroup;
  id: AbstractControl;
  broj: AbstractControl;
  sprat: AbstractControl;
  tip: AbstractControl;
  cena: AbstractControl;

  sobas: Soba[] = [
    {id: 1, broj: 1, sprat: 1, tip: 'Jednokrevetna', cena: 1670}, 
    {id: 2, broj: 5, sprat: 2, tip: 'Dvokrevetna', cena: 2000},
    {id: 3, broj: 9, sprat: 3, tip: 'Trokrevetna', cena: 3300} 
  ];
  
  numertRegex = /\-?\d*\.?\d{1,2}/;

  constructor(private fb: FormBuilder) {   
    this.forma = this.fb.group({
      id: ['', Validators.compose([Validators.required, Validators.pattern(this.numertRegex)])],
      broj: ['', Validators.compose([Validators.required, Validators.pattern(this.numertRegex)])],
      sprat: ['', Validators.compose([Validators.required, Validators.pattern(this.numertRegex)])],
      tip: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      cena: ['', Validators.compose([Validators.required, Validators.pattern(this.numertRegex)])]
    })

    this.id = this.forma.controls['id'];
    this.broj = this.forma.controls['broj'];
    this.sprat = this.forma.controls['sprat'];
    this.tip = this.forma.controls['tip'];
    this.cena = this.forma.controls['cena'];
  }

    onSubmit() {
      console.log('Poslali ste vrednosti:', this.forma)
    }
    
  addSoba(id: HTMLInputElement, broj: HTMLInputElement, sprat: HTMLInputElement, tip: HTMLInputElement, cena: HTMLInputElement): boolean {
    console.log(`Dodavanje id-a sobe: ${id.value}, broja sobe: ${broj.value}, sprata na kome se soba nalazi: ${sprat.value}, tipa sobe: ${tip.value} i cene sobe po nocenju: ${cena.value}`);      
    this.sobas.push(new Soba(id.value, broj.value, sprat.value, tip.value, cena.value));
    id.value = '';
    broj.value = '';
    sprat.value = '';
    tip.value = '';
    cena.value = '';
    return false;
  }

  proveraTipa() {
    if(this.tip.value.match(`Jednokrevetna`) || this.tip.value.match(`Dvokrevetna`) || this.tip.value.match(`Trokrevetna`) || this.tip.value.match(`Cetvorokrevetna`) || this.tip.value.match(`Petokrevetna`)) {
      console.log(`Tip je validan!`);
    } else {
      console.log(`Tip nije validan!`);
    }
  }

  ngOnInit(): void {
  }
}
