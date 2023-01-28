import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { RoomModel } from '../room/room.model';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should post a room', () => {
    const room: RoomModel = {
        id: 1, broj: '1', sprat: '2', cena: '300',
        tip: '',
        name: function (name: any): void {
            throw new Error('Function not implemented.');
        }
    };
    service.postRoom(room).subscribe(res => {
      expect(res.name).toEqual('Test Room');
    });

    const req = httpMock.expectOne('http://localhost:3000/rooms/');
    expect(req.request.method).toBe('POST');
    req.flush(room);
  });

  it('should get a room', () => {
    const room: RoomModel = {
        id: 1, broj: '1', sprat: '2', cena: '300',
        tip: '',
        name: function (name: any): void {
            throw new Error('Function not implemented.');
        }
    };
    service.getRoom().subscribe(res => {
      expect(res.name).toEqual('Test Room');
    });

    const req = httpMock.expectOne('http://localhost:3000/rooms/');
    expect(req.request.method).toBe('GET');
    req.flush(room);
  });

  it('should update a room', () => {
    const room: RoomModel = {
        id: 1, broj: '1', sprat: '2', cena: '300',
        tip: '',
        name: function (name: any): void {
            throw new Error('Function not implemented.');
        }
    };
    service.updateRoom(room, 1).subscribe(res => {
      expect(res.name).toEqual('Test Room');
    });

    const req = httpMock.expectOne('http://localhost:3000/rooms/');
    expect(req.request.method).toBe('PUT');
    req.flush(room);
  });

  it('should delete a room', () => {
    service.deleteRoom(1).subscribe(res => {
      expect(res).toBeUndefined();
    });

    const req = httpMock.expectOne('http://localhost:3000/rooms/');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
