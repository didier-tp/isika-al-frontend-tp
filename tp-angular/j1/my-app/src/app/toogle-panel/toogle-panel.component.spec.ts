import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooglePanelComponent } from './toogle-panel.component';

describe('TooglePanelComponent', () => {
  let component: TooglePanelComponent;
  let fixture: ComponentFixture<TooglePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooglePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooglePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
