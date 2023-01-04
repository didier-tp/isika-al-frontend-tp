

import { TvaService } from './tva.service';

describe('Basic Test TvaService without TestBed', () => {
  let service: TvaService;

  beforeEach(() => {
    service = new TvaService();
  });

  it('20%tva sur 200 ht = 40', () => {
    expect(service.tva(200,20))
    .toBe(40);
    });
});

// ng test --watch=false --include=**/service/tva.service.basic_test.spec.ts
