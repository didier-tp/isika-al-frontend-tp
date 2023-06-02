import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTogglePanelComponent } from './my-toggle-panel.component';

describe('MyTogglePanelComponent', () => {
  let component: MyTogglePanelComponent;
  let fixture: ComponentFixture<MyTogglePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTogglePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTogglePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
