import { TestBed , inject } from '@angular/core/testing';

import { DeviseService } from './devise.service';
import { HttpClientTestingModule, HttpTestingController } 
 from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('DeviseService with mock http request/response', () => {
  let service: DeviseService;
  let http : HttpClient;
  let backend : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      /* providers: [ DeviseService ] already provided in root via @Injectable() */
    });
    // NO service = TestBed.inject(DeviseService);
    // BUT inject(*,*,*) below
  });

  //injections pour le test à préparer
 beforeEach(inject([DeviseService, HttpClient, HttpTestingController],
  ( s: DeviseService, _h: HttpClient, _b: HttpTestingController) =>
  { service = s; http = _h; backend = _b;}
  ));

  it('should get good conversion', () => {
    //excepted method behavior (just subscribe , deffered) :
    service.convertir$(200,'EUR', 'USD').subscribe(res => {
    expect(res)
    .withContext('200 EUR should be close to 217.4 USD')
    .toBeCloseTo(217.4 , 0.1);
    });
    //expected HTTP request built by convertir() method :
    const req = backend.expectOne({
    url: '/devise-api/public/convert?amount=200&source=EUR&target=USD',
    method: 'GET'
    });
    //mock HTTP ResponseContent :
    let convResult = {source:"EUR",target:"USD",amount:200, result:217.3913}
    //déclenchement méthode avec mock http response:
    req.flush(convResult, { status: 200, statusText: 'ok' });
   });
 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach( inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify(); //requete bien terminée?
    })
    );

});

// ng test --include=**/service/devise.service.with_mock.spec.ts
// ng test --watch=false --include=**/service/devise.service.with_mock.spec.ts