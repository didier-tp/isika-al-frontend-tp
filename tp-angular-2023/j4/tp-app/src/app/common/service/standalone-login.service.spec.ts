import { TestBed } from '@angular/core/testing';

import { StandaloneLoginService } from './standalone-login.service';

describe('StandaloneLoginService', () => {
  let service: StandaloneLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandaloneLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
