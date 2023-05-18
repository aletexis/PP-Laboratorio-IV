import { TestBed } from '@angular/core/testing';

import { ActivarTerminosService } from './activar-terminos.service';

describe('ActivarTerminosService', () => {
  let service: ActivarTerminosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivarTerminosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
