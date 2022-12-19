import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObilazakComponent } from './obilazak.component';

describe('ObilazakComponent', () => {
  let component: ObilazakComponent;
  let fixture: ComponentFixture<ObilazakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObilazakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObilazakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
