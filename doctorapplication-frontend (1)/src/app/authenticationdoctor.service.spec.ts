import { TestBed } from '@angular/core/testing';

import { AuthenticationdoctorService } from './authenticationdoctor.service';

describe('AuthenticationdoctorService', () => {
  let service: AuthenticationdoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationdoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
