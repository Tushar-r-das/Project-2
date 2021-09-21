import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationdoctorService {

  constructor() { }
  authenticate(doctor_email, doctor_password) {
    if (doctor_email === "himanshukirme38@gmail.com" && doctor_password === "2710") {
      sessionStorage.setItem('doctor_email', doctor_email)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('doctor_email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('doctor_email')
  }
}