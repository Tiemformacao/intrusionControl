import { TestBed } from '@angular/core/testing';

import { FaccaoService } from './faccao.service';

describe('FaccaoService', () => {
  let service: FaccaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaccaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
