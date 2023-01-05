import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Devise } from '../../models/devise';
import { DeviseService } from '../../services/devise.service';
import { ConversionComponent } from './conversion.component';


describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;
  let deviseServiceWithinTest : DeviseService;
  let spyAndFakeGetAllDevises : jasmine.Spy;
  let spyAndFakeConvertir : jasmine.Spy;  


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule , HttpClientModule] ,
      declarations: [ ConversionComponent ]
      /* providers: [ DeviseService ] already provided in root via @Injectable() */
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges(); //NOT HERE BECAUSE ngOnInit() contains async call(s)
    deviseServiceWithinTest = fixture.debugElement.injector.get(DeviseService);

    let stubDevises : Devise[] = [
      new Devise('EUR','euro',1.0),
      new Devise('USD','dollar',1.1),
      new Devise('GBP','livre',0.9)
    ];
    spyAndFakeGetAllDevises = spyOn(deviseServiceWithinTest, 'getAllDevises$')
    .and.returnValue(of(stubDevises).pipe(delay(44)/*simu 44ms*/));
   

    spyAndFakeConvertir = spyOn(deviseServiceWithinTest, 'convertir$')
    .and.callFake((montant : number, source :string , cible : string):Observable<number> =>{
    let convResult = 0;
    if(source=='EUR'&&cible=='USD') 
      convResult=220.0;
    else if(source==cible) 
      convResult=montant;
    return of(convResult).pipe(delay(44)/*simu 44ms*/);
    });
   

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display good conversion result with fakeAsync', fakeAsync(() => {
    fixture.detectChanges();//waiting for start of initial callback and bindings (ngOnInit , injections, ...)
    expect(spyAndFakeGetAllDevises.calls.any())
    .withContext('getAllDevises$() should be called').toBe(true);
    console.log("before first tick(), component.codeDeviseSource="+component.codeDeviseSource);
    console.log("before first tick(), component.codeDeviseCible="+component.codeDeviseCible);
    tick(50); //waiting for async result of async calls in ngOnInit
    fixture.detectChanges();//waiting for callback and bindings
    console.log("after first tick(), component.codeDeviseSource="+component.codeDeviseSource);
    console.log("after first tick(), component.codeDeviseCible="+component.codeDeviseCible);
   
      const compNativeElt = fixture.debugElement.nativeElement;
      let montantInputElt = compNativeElt.querySelector("input[name='montant']");
      montantInputElt.value=200;
      montantInputElt.dispatchEvent(new Event('input'));
       //component.codeDeviseSource='EUR'; // pre-version
      let codeDevSourceSelectElt = compNativeElt.querySelector("select[name='codeDevSource']");
      codeDevSourceSelectElt.value='EUR';
      codeDevSourceSelectElt.dispatchEvent(new Event('change'));

      //component.codeDeviseCible='USD'; // pre-version
      let codeDevCibleSelectElt = compNativeElt.querySelector("select[name='codeDevCible']");
      codeDevCibleSelectElt.value='USD';
      codeDevCibleSelectElt.dispatchEvent(new Event('change'));
     
      let convButtonElt = compNativeElt.querySelector("input[type='button'][value='convertir']");
      //convButtonElt.dispatchEvent(new Event('click'));
      convButtonElt.click();
      fixture.detectChanges(); //waiting for callback and bindings
      expect(component.montant)
      .withContext('component.montant should be 200 after input')
      .toBeCloseTo(200,0.0001);
      expect(component.codeDeviseSource)
      .withContext('component.codeDeviseSource should be EUR after selection')
      .toBe('EUR');
      expect(component.codeDeviseCible)
      .withContext('component.codeDeviseCible should be USD after selection')
      .toBe('USD');
      expect(spyAndFakeConvertir.calls.any())
      .withContext('convertir$() should be called').toBe(true);
      tick(50); //waiting for async result of async calls in onConvertir
      fixture.detectChanges(); //waiting for callback and bindings
      let spanResElt = compNativeElt.querySelector('#montantConverti');
      console.log("from IHM, montantConverti:"  + spanResElt.innerText);
      expect(spanResElt.innerText)
      .withContext('spanResElt.innerText (#montantConverti) should be 220')
      .toBeCloseTo(220 , 0.1);
    }));

    it('should display good conversion result with async/await fixture.whenStable()', async () => {
      fixture.detectChanges();//waiting for start of initial callback and bindings (ngOnInit , injections, ...)
      expect(spyAndFakeGetAllDevises.calls.any())
      .withContext('getAllDevises$() should be called').toBe(true);
      console.log("before await fixture.whenStable(), component.codeDeviseSource="+component.codeDeviseSource);
      console.log("before await fixture.whenStable(), component.codeDeviseCible="+component.codeDeviseCible);
      await fixture.whenStable();
      fixture.detectChanges();//waiting for callback and bindings
      console.log("after await fixture.whenStable(), component.codeDeviseSource="+component.codeDeviseSource);
      console.log("after await fixture.whenStable(), component.codeDeviseCible="+component.codeDeviseCible);
     
        const compNativeElt = fixture.debugElement.nativeElement;
        let montantInputElt = compNativeElt.querySelector("input[name='montant']");
        montantInputElt.value=200;
        montantInputElt.dispatchEvent(new Event('input'));
         //component.codeDeviseSource='EUR'; // pre-version
        let codeDevSourceSelectElt = compNativeElt.querySelector("select[name='codeDevSource']");
        codeDevSourceSelectElt.value='EUR';
        codeDevSourceSelectElt.dispatchEvent(new Event('change'));
  
        //component.codeDeviseCible='USD'; // pre-version
        let codeDevCibleSelectElt = compNativeElt.querySelector("select[name='codeDevCible']");
        codeDevCibleSelectElt.value='USD';
        codeDevCibleSelectElt.dispatchEvent(new Event('change'));
       
        let convButtonElt = compNativeElt.querySelector("input[type='button'][value='convertir']");
        //convButtonElt.dispatchEvent(new Event('click'));
        convButtonElt.click();
        fixture.detectChanges(); //waiting for callback and bindings
        expect(component.montant)
        .withContext('component.montant should be 200 after input')
        .toBeCloseTo(200,0.0001);
        expect(component.codeDeviseSource)
        .withContext('component.codeDeviseSource should be EUR after selection')
        .toBe('EUR');
        expect(component.codeDeviseCible)
        .withContext('component.codeDeviseCible should be USD after selection')
        .toBe('USD');
        expect(spyAndFakeConvertir.calls.any())
        .withContext('convertir$() should be called').toBe(true);
        await fixture.whenStable(); //waiting for async result of async calls in onConvertir
        fixture.detectChanges(); //waiting for callback and bindings
        let spanResElt = compNativeElt.querySelector('#montantConverti');
        console.log("from IHM, montantConverti:"  + spanResElt.innerText);
        expect(spanResElt.innerText)
        .withContext('spanResElt.innerText (#montantConverti) should be 220')
        .toBeCloseTo(220 , 0.1);
      });

});

// ng test --watch=false --include=**/conversion/*.spec.ts
// ng test  --include=**/conversion/*.spec.ts
