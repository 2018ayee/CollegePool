import { TestBed } from '@angular/core/testing';

import { LogincheckService } from './logincheck.service';

describe('LogincheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogincheckService = TestBed.get(LogincheckService);
    expect(service).toBeTruthy();
  });
});
