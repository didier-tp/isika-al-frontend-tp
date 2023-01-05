import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CalculatriceComponent } from './calculatrice.component';

describe('CalculatriceComponent', () => {
  let component: CalculatriceComponent;
  let fixture: ComponentFixture<CalculatriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule , AppRoutingModule] ,
      declarations: [ CalculatriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('5+6=11 from model', () => {
    component.a=5;
    component.b=6; 
    component.onCalculer('+');//à ne pas oublier d'appeler si pas de dispatchEvent
    fixture.detectChanges();
    const compNativeElt = fixture.debugElement.nativeElement;
    let spanResElt = compNativeElt.querySelector('#spanRes');
    console.log("from model, res:"  + spanResElt.innerText);
    expect(spanResElt.innerText).toContain('11');
    });

    it('10-3=7 from IHM', () => {
      const compNativeElt = fixture.debugElement.nativeElement;
      let aInputElt = compNativeElt.querySelector("input[name='a']");
      aInputElt.value=10;
      aInputElt.dispatchEvent(new Event('input'));
      let bInputElt = compNativeElt.querySelector("input[name='b']");
      bInputElt.value=3;
      bInputElt.dispatchEvent(new Event('input'));
      let moinsButtonElt = compNativeElt.querySelector("input[type='button'][value='-']");
      //moinsButtonElt.dispatchEvent(new Event('click'));
      moinsButtonElt.click();
      fixture.detectChanges();
      expect(component.a).toBe(10);
      expect(component.b).toBe(3);
      expect(component.res).toBe(7);
      let spanResElt = compNativeElt.querySelector('#spanRes');
      console.log("from IHM, res:"  + spanResElt.innerText);
      expect(spanResElt.innerText).toContain('7');
      });
});

// ng test --watch=false --include=**/calculatrice/*.spec.ts
// ng test --include=**/calculatrice/*.spec.ts

