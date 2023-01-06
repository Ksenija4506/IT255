import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { RoomModel } from '../room/room.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postRoom(data : any) : Observable<RoomModel>{
    return this.http.post<RoomModel>("http://localhost:3000/rooms/", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getRoom() : Observable<RoomModel>{
    return this.http.get<RoomModel>("http://localhost:3000/rooms/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateRoom(data:any, id:number) : Observable<RoomModel>{
    return this.http.put<RoomModel>("http://localhost:3000/rooms/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRoom(id : number) : Observable<RoomModel>{
    return this.http.delete<RoomModel>("http://localhost:3000/rooms/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
