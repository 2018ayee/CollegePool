import { TestBed } from '@angular/core/testing';

import { DynamicAddService } from './dynamic-add.service';

describe('DynamicAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicAddService = TestBed.get(DynamicAddService);
    expect(service).toBeTruthy();
  });
});
