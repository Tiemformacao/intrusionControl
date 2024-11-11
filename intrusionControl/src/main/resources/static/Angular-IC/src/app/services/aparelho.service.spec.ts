import { TestBed } from '@angular/core/testing';

import { AparelhoService } from './aparelho.service';

describe('AparelhoService', () => {
  let service: AparelhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AparelhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
