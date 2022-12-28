import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavisnostiComponent } from './zavisnosti.component';

describe('ZavisnostiComponent', () => {
  let component: ZavisnostiComponent;
  let fixture: ComponentFixture<ZavisnostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavisnostiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZavisnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
