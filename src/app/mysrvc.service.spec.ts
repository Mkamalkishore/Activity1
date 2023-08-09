import { TestBed } from '@angular/core/testing';

import { MysrvcService } from './mysrvc.service';

describe('MysrvcService', () => {
  let service: MysrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
