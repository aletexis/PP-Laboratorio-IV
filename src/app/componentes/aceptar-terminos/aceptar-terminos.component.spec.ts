import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarTerminosComponent } from './aceptar-terminos.component';

describe('AceptarTerminosComponent', () => {
  let component: AceptarTerminosComponent;
  let fixture: ComponentFixture<AceptarTerminosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarTerminosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarTerminosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
