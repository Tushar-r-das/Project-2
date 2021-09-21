import { Component, OnInit } from '@angular/core';
import { AuthenticationdoctorService } from '../authenticationdoctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutdoctor',
  templateUrl: './logoutdoctor.component.html',
  styleUrls: ['./logoutdoctor.component.css']
})
export class LogoutdoctorComponent implements OnInit {

  constructor(
    private logoutdoctorService: AuthenticationdoctorService,
    private router: Router) {

  }

  ngOnInit() {
    this.logoutdoctorService.logOut();
    this.router.navigate(['logindoctor']);
  }

}
