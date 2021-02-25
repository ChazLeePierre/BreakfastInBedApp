import { TestBed } from '@angular/core/testing';

import { BreakfastService } from './breakfast.service';

describe('BreakfastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreakfastService = TestBed.get(BreakfastService);
    expect(service).toBeTruthy();
  });
});
