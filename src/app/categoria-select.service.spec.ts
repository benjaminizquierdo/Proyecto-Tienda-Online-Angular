import { TestBed } from '@angular/core/testing';

import { CategoriaSelectService } from './categoria-select.service';

describe('CategoriaSelectService', () => {
  let service: CategoriaSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
