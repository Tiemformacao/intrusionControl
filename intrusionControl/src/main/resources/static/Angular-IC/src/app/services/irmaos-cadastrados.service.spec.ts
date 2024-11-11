import { TestBed } from '@angular/core/testing';

import { IrmaosCadastradosService } from './irmaos-cadastrados.service';

describe('IrmaosCadastradosService', () => {
  let service: IrmaosCadastradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrmaosCadastradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
