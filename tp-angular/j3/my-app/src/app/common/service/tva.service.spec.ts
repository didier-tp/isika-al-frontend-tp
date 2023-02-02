import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } 
             from '@angular/common/http/testing';

import { TvaService } from './tva.service';

describe('TvaService', () => {
  let service: TvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [ HttpClientTestingModule]
    });
    service = TestBed.inject(TvaService);
    //service = new TvaService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('20% de tva pour ht=200 donne tva de 40', () => {
    expect(service.tva(200,20)).toBe(40);
  });


});

//ng test --include=**/service/tva.*.ts
