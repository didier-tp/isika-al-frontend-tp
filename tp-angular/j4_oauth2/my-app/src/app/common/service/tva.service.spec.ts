import { TestBed } from '@angular/core/testing';

import { TvaService } from './tva.service';

describe('TvaService', () => {
  let service: TvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      /* providers: [ TvaService ] already provided in root via @Injectable() */
    });
    service = TestBed.inject(TvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('20%tva sur 200 ht = 40', () => {
    expect(service.tva(200,20)).toBe(40);
    });
});

// ng test --include=**/service/tva.service.spec.ts