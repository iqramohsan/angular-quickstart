import { TestBed } from '@angular/core/testing';

import { ServerdService } from './serverd.service';

describe('ServerdService', () => {
  let service: ServerdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
