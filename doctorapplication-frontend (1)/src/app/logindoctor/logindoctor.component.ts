import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationdoctorService } from '../authenticationdoctor.service';

@Component({
  selector: 'app-logindoctor',
  templateUrl: './logindoctor.component.html',
  styleUrls: ['./logindoctor.component.css']
})
export class LogindoctorComponent implements OnInit {
  doctor_email = 'himanshukirme38@gmail.com'
  doctor_password = ''
  invalidLogin = false


  constructor(private router: Router,
    private logindoctorservice: AuthenticationdoctorService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.logindoctorservice.authenticate(this.doctor_email, this.doctor_password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}