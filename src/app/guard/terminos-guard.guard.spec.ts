import { TestBed } from '@angular/core/testing';

import { TerminosGuardGuard } from './terminos-guard.guard';

describe('TerminosGuardGuard', () => {
  let guard: TerminosGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TerminosGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
