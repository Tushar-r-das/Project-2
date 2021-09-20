import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [HttpClient,MyserviceService,Myservice1Service,Myservice2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
