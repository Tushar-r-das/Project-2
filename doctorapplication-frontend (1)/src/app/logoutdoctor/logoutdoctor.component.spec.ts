import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutdoctorComponent } from './logoutdoctor.component';

describe('LogoutdoctorComponent', () => {
  let component: LogoutdoctorComponent;
  let fixture: ComponentFixture<LogoutdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
