import { TestBed } from '@angular/core/testing';

import { PlacesAutocompleteService } from './places-autocomplete.service';

describe('PlacesAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacesAutocompleteService = TestBed.get(PlacesAutocompleteService);
    expect(service).toBeTruthy();
  });
});
