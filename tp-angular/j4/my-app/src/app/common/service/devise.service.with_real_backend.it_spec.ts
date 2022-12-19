import { TestBed } from '@angular/core/testing';
import { DeviseService } from './devise.service';
import {  HttpClientModule } from '@angular/common/http';

describe('DeviseService integration test with real backend', () => {
  let service: DeviseService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      /* providers: [ DeviseService ] already provided in root via @Injectable() */
    });
     service = TestBed.inject(DeviseService);

     /*NB : pour service._apiBaseUrl="/devise-api"; en relatif (comme ng serve et proxy.conf.json)
        il faut ajouter l'option suivante dans le fichier karma.conf.js :
        proxies: {
          '/devise-api': {
          'target': 'http://localhost:8282/devise-api',
          'changeOrigin': true
          }
        }
      */

      // ajouter si besoin  "src/**/*.it_spec.ts",
      //dans tsconfig.spec.json si extension .it_spec.ts plutôt que .spec.ts
      //NB: un test de type  .it_spec.ts n'est pas un test unitaire , c'est un test d'intégration 
      //qui ne fonctionne qu'en ayant préalablement démarré le backend en arrière plan
        
  });

  

  it('should get good conversion', (done) => {
    service.convertir$(200,'EUR', 'USD').subscribe({
      next: res => {
        console.log("montantConverti="+res);
        //expect(res).toBeCloseTo(217.4 , 0.1);
        expect(res).toBeCloseTo(220.0 , 0.1);
        done();
        },
      error: err => { fail("convert error :" + JSON.stringify(err));}
    });
    
   });
 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});

// ng test --include=**/service/devise.service.with_real_backend.it_spec.ts
// ng test --watch=false --include=**/service/devise.service.with_real_backend.it_spec.ts