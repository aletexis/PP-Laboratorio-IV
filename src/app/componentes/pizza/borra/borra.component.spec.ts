import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorraComponent } from './borra.component';

describe('BorraComponent', () => {
  let component: BorraComponent;
  let fixture: ComponentFixture<BorraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
