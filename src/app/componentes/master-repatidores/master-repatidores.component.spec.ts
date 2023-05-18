import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRepatidoresComponent } from './master-repatidores.component';

describe('MasterRepatidoresComponent', () => {
  let component: MasterRepatidoresComponent;
  let fixture: ComponentFixture<MasterRepatidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRepatidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRepatidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
