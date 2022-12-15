import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TvaComponent } from './tva.component';

describe('TvaComponent', () => {
  let component: TvaComponent;
  let fixture: ComponentFixture<TvaComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule] ,
      declarations: [ TvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('20% , 200 -> 240 from model', () => {
    component.ht=200;
    component.tauxTva=20; //20%
    component.onCalculTvaTtc();//à ne pas oublier d'appeler si pas de dispatchEvent
    //attention #spanTtc inséré dans <div *ngIf="tva>0">
    fixture.detectChanges();
    const compNativeElt = fixture.debugElement.nativeElement;
    let ttcElt = compNativeElt.querySelector('#spanTtc');
    console.log("from model, ttc:"  + ttcElt.innerText);
    expect(ttcElt.innerText).toContain('240');
    });

    it('10% , 200 -> 220 from IHM', () => {
   
      const compNativeElt = fixture.debugElement.nativeElement;
      let htInputElt = compNativeElt.querySelector("input[name='ht']");
      htInputElt.value=200;
      htInputElt.dispatchEvent(new Event('input'));
      let tauxTvaSelectElt = compNativeElt.querySelector("select[name='tauxTva']");
      tauxTvaSelectElt.value=tauxTvaSelectElt.options[1].value; //0: 5.5% , 1: 10% , 2: 20%
      tauxTvaSelectElt.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      expect(component.ht).toBe(200);
      expect(component.tauxTva).toBe(10);
      let ttcElt = compNativeElt.querySelector('#spanTtc');
      console.log("from ihm, ttc:"  + ttcElt.innerText);
      expect(ttcElt.innerText).toContain('220');
      });
    
});
