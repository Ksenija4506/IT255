import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrokComponent } from './obrok.component';

describe('ObrokComponent', () => {
  let component: ObrokComponent;
  let fixture: ComponentFixture<ObrokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
