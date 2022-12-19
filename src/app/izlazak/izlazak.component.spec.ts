import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzlazakComponent } from './izlazak.component';

describe('IzlazakComponent', () => {
  let component: IzlazakComponent;
  let fixture: ComponentFixture<IzlazakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzlazakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzlazakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
