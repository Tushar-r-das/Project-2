import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MyserviceService} from './myservice.service';
import {Myservice1Service} from './myservice1.service';
import {Myservice2Service} from './myservice2.service';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { LoginpatientComponent } from './loginpatient/loginpatient.component';
import { AuthenticationdoctorService } from './authenticationdoctor.service';
import { LogoutdoctorComponent } from './logoutdoctor/logoutdoctor.component';
import { HomeComponent } from './home/home.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    ListDoctorComponent,
    UpdateDoctorComponent,
    AddPatientComponent,
    ListPatientComponent,
    UpdatePatientComponent,
    AddAppointmentComponent,
    ListAppointmentComponent,
    UpdateAppointmentComponent,
    LogindoctorComponent,
    LoginpatientComponent,
    LogoutdoctorComponent,
    HomeComponent,
    DoctorprofileComponent,
    PatientprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,FormsModule
  ],
  providers: [HttpClient,MyserviceService,Myservice1Service,Myservice2Service, AuthenticationdoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
