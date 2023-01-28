import { TestBed, async } from '@angular/core/testing';
import { RoomComponent } from './room.component';
import { ApiService } from '../shared/api.service';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('RoomComponent', () => {
  let component: RoomComponent;
  let apiService: ApiService;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RoomComponent],
      providers: [ApiService, FormBuilder]
    }).compileComponents();

    component = TestBed.inject(RoomComponent);
    apiService = TestBed.inject(ApiService);
    formBuilder = TestBed.inject(FormBuilder);
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the form group', () => {
    component.ngOnInit();
    expect(component.formValue instanceof FormBuilder).toBe(true);
  });

  it('should call the postRoom method of apiService when postRoomDetails is called', () => {
    spyOn(apiService, 'postRoom').and.callThrough();
    component.postRoomDetails();
    expect(apiService.postRoom).toHaveBeenCalled();
  });

  it('should call the getRoom method of apiService when getAllRoom is called', () => {
    spyOn(apiService, 'getRoom').and.callThrough();
    component.getAllRoom();
    expect(apiService.getRoom).toHaveBeenCalled();
  });

  it('should call the deleteRoom method of apiService when roomDelete is called', () => {
    spyOn(apiService, 'deleteRoom').and.callThrough();
    component.roomDelete({ id: 1 });
    expect(apiService.deleteRoom).toHaveBeenCalledWith(1);
  });

  it('should call the updateRoom method of apiService when updateRoomDetails is called', () => {
    spyOn(apiService, 'updateRoom').and.callThrough();
    component.updateRoomDetails();
    expect(apiService.updateRoom).toHaveBeenCalled();
  });
});
