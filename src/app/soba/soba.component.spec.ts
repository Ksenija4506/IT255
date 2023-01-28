import { SobaComponent } from './soba.component';
import { Soba } from './soba';
import { FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SobaComponent', () => {
let component: SobaComponent;
let fixture: ComponentFixture<SobaComponent>;
let formBuilder: FormBuilder;

beforeEach(() => {
TestBed.configureTestingModule({
declarations: [ SobaComponent ],
providers: [ FormBuilder ]
});

fixture = TestBed.createComponent(SobaComponent);
component = fixture.componentInstance;
formBuilder = TestBed.get(FormBuilder);
});

it('should create the component', () => {
expect(component).toBeTruthy();
});

it('should create a form with 5 controls', () => {
component.ngOnInit();
expect(component.forma.contains('id')).toBeTruthy();
expect(component.forma.contains('broj')).toBeTruthy();
expect(component.forma.contains('sprat')).toBeTruthy();
expect(component.forma.contains('tip')).toBeTruthy();
expect(component.forma.contains('cena')).toBeTruthy();
});

it('should add a soba object to the sobas array when the addSoba method is called', () => {
component.sobas = [];
expect(component.sobas.length).toEqual(1);
expect(component.sobas[0]).toEqual(new Soba('1', '1', '1', 'Jednokrevetna', '1670'));
});

it('should log "Tip je validan!" when the proveraTipa method is called with a valid tip', () => {
spyOn(console, 'log');
component.tip.setValue('Jednokrevetna');
component.proveraTipa();
expect(console.log).toHaveBeenCalledWith('Tip je validan!');
});

it('should log "Tip nije validan!" when the proveraTipa method is called with an invalid tip', () => {
spyOn(console, 'log');
component.tip.setValue('InvalidTip');
component.proveraTipa();
expect(console.log).toHaveBeenCalledWith('Tip nije validan!');
});
});
