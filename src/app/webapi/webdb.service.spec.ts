import { TestBed } from '@angular/core/testing';

import { WebdbService } from './webdb.service';

describe('WebdbService', () => {
  let service: WebdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
