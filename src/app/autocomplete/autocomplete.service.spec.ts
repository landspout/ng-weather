import { TestBed, inject } from '@angular/core/testing';

import { AutocompleteAPIService } from './autocomplete.service';

describe('AutocompleteAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutocompleteAPIService]
    });
  });

  it('should ...', inject([AutocompleteAPIService], (service: AutocompleteAPIService) => {
    expect(service).toBeTruthy();
  }));
});
