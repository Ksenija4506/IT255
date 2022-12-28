import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class RoomService {
    constructor() { 

    }

getPrice(noci: number): number {
    return noci*2500; 

    }
}