import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dodatne } from './dodatne';
import { Ponuda } from './ponuda'; 


/**function imeValidator(control: FormControl): {[ime: string]: boolean} | null{
   if(control.value.length < 3){
    console.log('Ime mora da sadrzi barem 3 karaktera!')
    return {'invalidIme': true};
  }
    return null;
}**/ 
 
 /**function prezimeValidator(control: FormControl): {[prezime: string]: boolean} | null{
   if(control.value.length < 3){
    console.log('Prezime mora da sadrzi barem 3 karaktera!')
    return {'invalidPrezime': true};
  }
    return null;
}**/

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})

export class PonudaComponent implements OnInit {

  forma: FormGroup;
  ime: AbstractControl;
  prezime: AbstractControl;
  mail: AbstractControl;
  od: AbstractControl;
  do: AbstractControl;
  id: AbstractControl;
  korisnici: any;
  cena: AbstractControl;

  ponudas: Ponuda[] = [
    {id: 1, broj: 1, sprat: 1, tip: 'Jednokrevetna', cena: 1670}, 
    {id: 2, broj: 5, sprat: 2, tip: 'Dvokrevetna', cena: 2000},
    {id: 3, broj: 9, sprat: 3, tip: 'Trokrevetna', cena: 3300} 
  ];

  dodatnes: Array<any> = [
    {br: 1, naziv: 'Klima', cena: 1000, checked: false},
    {br: 2, naziv: 'Mini bar', cena: 1500, checked: false},
    {br: 3, naziv: 'Sauna', cena: 1700, checked: false},
    {br: 4, naziv: 'Dorucak u sobi', cena: 1200, checked: false},
    {br: 5, naziv: 'Djakuzi', cena: 2500, checked: false}
  ];

  numertRegex = /\-?\d*\.?\d{1,2}/;

  constructor(fb: FormBuilder) {   

    this.korisnici = [];
  
    this.forma = fb.group({
      'ime': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      prezime: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      od: ['', Validators.required],
      do: ['', Validators.required],
      id: ['', Validators.compose([Validators.required, Validators.pattern(this.numertRegex)])],
    })

    this.ime = this.forma.controls['ime'];
    this.prezime = this.forma.controls['prezime'];
    this.mail = this.forma.controls['mail'];
    this.od = this.forma.controls['od'];
    this.do = this.forma.controls['do'];
    this.id = this.forma.controls['id'];

    this.cena = this.forma.controls['cena'];

  }

  /*onChange(naziv: any, isChecked: boolean){
    const usluga = (this.forma.controls['naziv'] as FormArray);
    
    if (isChecked) {
      usluga.push(new FormControl(naziv));
    } else {
      const index = usluga.controls.findIndex(x => x.value === naziv);
      usluga.removeAt(index);
    }
  }*/

  onCheckboxChange(event: any, dodatne: Dodatne) {
    if (event.target.checked) {
      alert("Vas racun ce se uvecati za " + dodatne.cena + " dinara.");
      console.log(event.checked);
    } 
  
  }

  /*getSel() {
    for(let i= 0; i<this.selectovane.length; i++){
      for(let j=0;j<this.dodatnes.length; j++){
        if(this.dodatnes[j].br === this.selectovane[i].br){
          this.dodatnes[j].checked = true;
        }
      }
    }
  }*/
 

  /*submit() {
    console.log(this.forma.value);
  }*/

  onSubmit() {
    console.log('Poslali ste vrednosti:', this.forma)
  }

  /*poruka() {
    if(document.getElementById("klima")){
      alert("Vas racun je uvecan za 1000 dinara!");
    }  else if(document.getElementById("bar")){
      alert("Vas racun je uvecan za 1500 dinara!");
    }  
  }*/

  proveraImena(){
    if (this.ime.value.length < 3) {
      console.log("Ime mora da sadrzi barem 3 karaktera!");
    }
  }

  proveraPrezimena(){
    if (this.prezime.value.length < 3) {
      console.log("Prezime mora da sadrzi barem 3 karaktera!");
    }
  }

  ngOnInit() { 

  }

  /*funkc(e) {
    if(e.target.checked == true) {
      console.log(`Vasa cena je uvecana za ${this.cena} dinara`)
    }
  }*/
}
