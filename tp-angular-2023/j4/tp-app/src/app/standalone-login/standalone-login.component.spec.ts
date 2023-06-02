import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneLoginComponent } from './standalone-login.component';

describe('StandaloneLoginComponent', () => {
  let component: StandaloneLoginComponent;
  let fixture: ComponentFixture<StandaloneLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
