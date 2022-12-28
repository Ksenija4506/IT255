import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/RoomService';

@Component({
  selector: 'app-zavisnosti',
  templateUrl: './zavisnosti.component.html',
  styleUrls: ['./zavisnosti.component.css']
})
export class ZavisnostiComponent implements OnInit {
  
  constructor(private roomServise : RoomService) {
    this.roomServise = roomServise;
  }

  cena() {
    const noci = 7;
    const cena = this.roomServise.getPrice(noci);
    alert("Vasa cena za " + noci + " nocenja iznosi " + cena + " dinara.")
  }

  ngOnInit() : void {

  }
}
