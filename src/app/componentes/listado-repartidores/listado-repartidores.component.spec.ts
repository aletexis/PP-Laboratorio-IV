import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRepartidoresComponent } from './listado-repartidores.component';

describe('ListadoRepartidoresComponent', () => {
  let component: ListadoRepartidoresComponent;
  let fixture: ComponentFixture<ListadoRepartidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRepartidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
