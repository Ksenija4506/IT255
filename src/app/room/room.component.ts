import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RoomModel } from './room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{

  formValue !: FormGroup;

  roomModelObj : RoomModel = new RoomModel();
  roomData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formbuilder : FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id : [''],
      broj : [''],
      sprat : [''],
      tip : [''],
      cena : ['']
    })  
    this.getAllRoom();
  }

  clickAddRoom(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postRoomDetails(){
    this.roomModelObj.broj = this.formValue.value.broj;
    this.roomModelObj.sprat = this.formValue.value.sprat;
    this.roomModelObj.tip = this.formValue.value.tip;
    this.roomModelObj.cena = this.formValue.value.cena;

    this.api.postRoom(this.roomModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Soba je uspesno dodata!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllRoom();
    },
    err=>{
    alert("Doslo je do greske!")
    })
  }

  getAllRoom(){
    this.api.getRoom()
    .subscribe(res=>{
      this.roomData = res;
      console.log("Sobe", res)
    })
  }

  roomDelete(row : any){
    this.api.deleteRoom(row.id)
    .subscribe(res=>{
      alert("Soba je obrisana!")
      this.getAllRoom();
    })
  }

  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.roomModelObj.id = row.id;
    this.formValue.controls['broj'].setValue(row.broj);
    this.formValue.controls['sprat'].setValue(row.sprat);
    this.formValue.controls['tip'].setValue(row.tip);
    this.formValue.controls['cena'].setValue(row.cena);
  }

  updateRoomDetails(){
    this.roomModelObj.broj = this.formValue.value.broj;
    this.roomModelObj.sprat = this.formValue.value.sprat;
    this.roomModelObj.tip = this.formValue.value.tip;
    this.roomModelObj.cena = this.formValue.value.cena;

    this.api.updateRoom(this.roomModelObj, this.roomModelObj.id)
    .subscribe(res=>{
      alert("Izmena je uspesno izvrsena!");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllRoom();
    })
  }
}
