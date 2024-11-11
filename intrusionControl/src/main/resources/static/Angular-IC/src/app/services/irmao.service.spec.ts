import { TestBed } from '@angular/core/testing';

import { IrmaoService } from './irmao.service';

describe('IrmaoService', () => {
  let service: IrmaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrmaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
